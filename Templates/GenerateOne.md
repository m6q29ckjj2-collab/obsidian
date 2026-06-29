```dataviewjs
dv.pages('"Daily"').forEach(p => {
    dv.paragraph(`${p.file.name} — ${p.tasks.length} задач`);
});

