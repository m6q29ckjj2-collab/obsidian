<%* 
// Определяем текущий день недели
const day = tp.date.now("dddd");

// Формируем Obsidian link на шаблон задач
const goalsLink = `[[Templates/Weekday Goals/${day}]]`;

// Подставляем задачи из шаблона
tR += await tp.file.include(goalsLink);
%>
