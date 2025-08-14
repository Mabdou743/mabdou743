<<<<<<< HEAD
# Mahmoud Abdou Mostafa

**Software Engineer • Frontend & Full‑Stack Developer**

Cairo, Egypt · 📧 mahmoudabdou743@gmail.com · 📞 +20 1143432437

---

### 👋 Hi, I'm Mahmoud
I build user‑friendly web apps with a focus on clean architecture, maintainable code, and delightful front‑end experiences. I trained at the Information Technology Institute (ITI) — Professional Development & BI‑infused CRM track — where I completed a 9‑month program that covered modern web development, .NET Core, BI concepts and soft skills.

**Quick facts:**
- 🔭 Currently: Building the frontend for a company sign‑up flow and polishing the `DORAK` Queue Management System.
- 🛠️ Tech focus: Angular, TypeScript, C#, ASP.NET Core, Node.js, MongoDB/SQL Server.
- 🌱 Learning: Deepening knowledge in RxJS, DevOps basics (Docker, CI/CD), and Power BI.

---

## 🎓 Training — Professional Development & BI‑infused CRM (ITI)
This README includes a compact summary of the program modules and outcomes so recruiters and teammates can see the technical foundation I built during the track.

**Program highlights**
- **Duration & Style:** 9‑month professional program (project‑based, mentor supported). Delivery mix: 20% self‑paced | 40% online | 40% guided practice.
- **Prerequisites:** Intro programming, SQL basics, web fundamentals and other pre‑work to prepare trainees for fast paced bootcamp learning.
- **Program objective:** Produce job‑ready graduates for roles such as Microsoft .NET Full‑Stack Developer, Cloud App Developer, Dynamics CRM Developer, BI Developer, and Frontend Developer.

**Core curriculum (selected topics)**
- **Software Development Fundamentals:** Data structures & algorithms, OOP, introductory software engineering, XML.
- **.NET Core & Web App Dev:** ASP.NET Core MVC & Web API, SignalR, Entity Framework, LINQ, gRPC intro, Azure fundamentals.
- **Frontend & MEAN stack:** HTML5/CSS3, Responsive Web, Advanced JS, Angular, Node.js, MongoDB.
- **Business Intelligence:** SQL Server BI, Power BI, Data Warehouse basics, Data Mining concepts.
- **Software Design & Workflow:** SOLID principles, design patterns, unit testing, source control, Agile, DevOps elective.
- **Soft skills:** Communication, high‑impact presentations, job seeking, teamwork and leadership.

**Certification & outcomes:**
- Students deliver at least one freelancing job and pursue international certificates (Power BI / Azure / Microsoft exams). The program targets employability in major local & international tech employers.

---

## 🚀 Selected projects
*(Pinned repos recommended for full project details — see my profile.)*
- **DORAK — Queue Management System** — Angular • .NET Web API • SignalR • SQL Server • HangFire — real‑time queue tracking for businesses.
- **E‑commerce Website** — Angular • Node.js • Express • MongoDB — full shopping flow and order management.
- **RashadGuide — Health Facilities Directory (Freelance)** — WordPress • HTML/CSS/JS • PHP — searchable directory for Saudi health services (rashadguide.com).

---

## 💡 Tech & Tools
**Frontend:** HTML5 • CSS3 • Bootstrap • Tailwind • Angular • TypeScript

**Backend:** C# • ASP.NET Core • Node.js • Express.js • REST APIs

**DBs:** SQL Server • MongoDB

**Tools:** Git • GitHub • VS Code • Visual Studio • Postman • SSMS

**Concepts:** OOP • SOLID • MVC • Design Patterns • Unit Testing

---

## 📊 Dynamic badges (live)
<p align="center">
  <img src="https://komarev.com/ghpvc/?username=YOUR_USERNAME" alt="profile views" />
  <img src="https://github-readme-stats.vercel.app/api?username=YOUR_USERNAME&show_icons=true&theme=default&count_private=true" alt="Mahmoud's GitHub stats" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=YOUR_USERNAME&layout=compact" alt="Top languages" />
</p>

> **Notes:** The three badges above are live images — no extra server setup required. If your GitHub username is different, replace `YOUR_USERNAME` in the badge URLs with your correct username.

---

## 🔁 Auto‑update README (GitHub Actions)
I added a ready‑to‑use workflow you can drop into your repo to auto‑update parts of the README (for example: refresh a "Recent Projects" list or regenerate a daily status). Below is a recommended workflow and a small Node script that auto‑fetches your top 5 repos and injects them into a placeholder area.

**Place these files in your repo:**
- `.github/workflows/update-readme.yml`
- `scripts/update-readme.js`

**Workflow:**
```yaml
name: Update README
on:
  schedule:
    - cron: '0 6 * * *' # runs daily at 06:00 UTC
  workflow_dispatch:

jobs:
  update-readme:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
      - name: Install deps
        run: npm ci || true
      - name: Run updater
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          GH_USERNAME: YOUR_USERNAME
        run: |
          node scripts/update-readme.js
      - name: Commit & Push (if changed)
        uses: stefanzweifel/git-auto-commit-action@v4
        with:
          commit_message: Update README with latest repos
```

**scripts/update-readme.js** (example)
```js
const fs = require('fs');
const https = require('https');
const username = process.env.GH_USERNAME || 'YOUR_USERNAME';
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
    // sort by stargazers_count and pick top 5
    const top = reposJson.sort((a,b) => b.stargazers_count - a.stargazers_count).slice(0,5);
    const lines = top.map(r => `- [${r.name}](${r.html_url}) — ${r.description || ''}`);
    const markerStart = '<!-- START_TOP_REPOS -->
- [Ai-Landing-page](https://github.com/Mabdou743/Ai-Landing-page) — 
- [Ai_Landing_Page](https://github.com/Mabdou743/Ai_Landing_Page) — 
- [Html_Project](https://github.com/Mabdou743/Html_Project) — 
- [Learn_GIT](https://github.com/Mabdou743/Learn_GIT) — studying Git and GitHub
- [mabdou743](https://github.com/Mabdou743/mabdou743) — 
<!-- END_TOP_REPOS -->';
    const readme = fs.readFileSync(readmePath, 'utf8');
    const before = readme.split(markerStart)[0];
    const after = readme.split(markerEnd)[1];
    const newSection = `${markerStart}
${lines.join('
')}
${markerEnd}`;
    const newReadme = before + newSection + after;
    fs.writeFileSync(readmePath, newReadme);
    console.log('README updated');
  } catch (e) {
    console.error('Failed to update README', e);
    process.exit(1);
  }
})();
```

**How it works**
- The workflow runs daily (or manually) and executes the script. The script fetches your public repos via GitHub API and injects a small `Top projects` block between these two markers in your README:

```
<!-- START_TOP_REPOS -->
... auto-inserted list ...
=======
<h1 align="center">Hi 👋, I'm Mahmoud Abdou</h1>
<h3 align="center">Full Stack Developer (.NET / MEAN) | CRM & BI Enthusiast | Based in Egypt 🇪🇬</h3>

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=mabdou743&label=Profile%20views&color=0e75b6&style=flat" alt="mabdou743" />
</p>

---

### 👨‍💻 About Me

- 🎓 I’m a passionate **Full Stack Web Developer** skilled in both **.NET** and the **MEAN stack**  
- 💼 Currently working on a **large-scale Queue Management System** (Private Project)  
- 🔄 Building **CRM customizations** with Microsoft Dynamics 365  
- 📊 Exploring **Business Intelligence** with **Power BI**, **SSAS**, and **SSRS**  
- 💡 Eager to learn and contribute to meaningful products that impact real users

---

### 🚀 Tech Stack

```text
Languages      : C#, JavaScript, TypeScript, SQL
Frontend       : Angular, HTML5, CSS3, TailwindCSS, Bootstrap
Backend        : .NET Core, Node.js, Express.js
Databases      : SQL Server, MongoDB
BI & Analytics : Power BI, SSRS, SSAS
CRM            : Microsoft Dynamics 365 (Plugins, Workflows)
Tools          : Git, Postman, Figma, Visual Studio, VS Code
```

---

### 🔨 Projects

- 🛒 [NodeJs E-Commerce (Public)](https://github.com/AmgadMAdly/NodeJsE-Commerce)  
  > Role: Backend Contributor — Product & Cart Management, MongoDB, Express

- 🧩 **[Enterprise Queue Management System](#)** (🚧 *Private - In Progress*)  
  > Full Stack Implementation with .NET 8, Angular 16, Token-based Auth, CRM Modules

---

### 📈 GitHub Stats

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=mabdou743&show_icons=true&theme=default" />
  <br />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=mabdou743&layout=compact&theme=default" />
</p>

---

### 🌐 Connect With Me

<p align="left">
  <a href="https://linkedin.com/in/mahmoud-abdou-b39a74188" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin" alt="linkedin" />
  </a>
  <a href="https://stackoverflow.com/users/28463389/mahmoud-abdou" target="_blank">
    <img src="https://img.shields.io/badge/StackOverflow-FE7A16?style=for-the-badge&logo=stackoverflow&logoColor=white" alt="stackoverflow" />
  </a>
</p>

---

### 📌 Fun Fact

> I’m the kind of dev who balances **clean code** with **clean UI** — and never stops learning.
>>>>>>> c917ef74bd3d713c63a13b5dda31ddd726179ce5
