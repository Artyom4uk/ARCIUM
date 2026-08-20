const fs=require('fs');
for (const f of ['index.html','src/styles.css','src/app.js','README.md']) { if(!fs.existsSync(f)) throw new Error(`Missing ${f}`); }
const js=fs.readFileSync('src/app.js','utf8');
new Function(js);
console.log('ARCIUM static build check passed');
