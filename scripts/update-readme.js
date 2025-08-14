const fs = require('fs');
const https = require('https');
const username = process.env.GH_USERNAME || 'Mahmoud-Abdou';
const readmePath = 'README.md';

function fetch(url) {
  return new Promise((res, rej) => {
    https.get(url, { headers: { 'User-Agent': 'node.js' } }, (r) => {
      let data = '';
      r.on('data', chunk => data += chunk);
      r.on('end', () => res(data));
    }).on('error', rej);
  });
}

(async () => {
  try {
    const repos = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
    const reposJson = JSON.parse(repos);
    const top = reposJson.sort((a,b) => b.stargazers_count - a.stargazers_count).slice(0,5);
    const lines = top.map(r => `- [${r.name}](${r.html_url}) — ${r.description || ''}`);
    const markerStart = '<!-- START_TOP_REPOS -->';
    const markerEnd = '<!-- END_TOP_REPOS -->';
    const readme = fs.readFileSync(readmePath, 'utf8');
    const before = readme.split(markerStart)[0];
    const after = readme.split(markerEnd)[1];
    const newSection = `${markerStart}\n${lines.join('\n')}\n${markerEnd}`;
    const newReadme = before + newSection + after;
    fs.writeFileSync(readmePath, newReadme);
    console.log('README updated');
  } catch (e) {
    console.error('Failed to update README', e);
    process.exit(1);
  }
})();
