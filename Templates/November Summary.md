```dataviewjs
const folder = "Daily"; // <-- убедись, что имя папки точно такое
const pages = dv.pages(`"${folder}"`);
dv.paragraph(`🔎 Pages found: ${pages.length}`);
pages.forEach(p => dv.paragraph(p.file.path));
