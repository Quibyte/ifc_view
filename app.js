const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Разрешаем все CORS-запросы (для API и других ресурсов)
app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Раздаём статику (если есть CSS/JS/изображения)
app.use(express.static(__dirname));

// Отдаём index.html на все GET-запросы
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
