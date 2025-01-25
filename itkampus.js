// Telegram Web App API интеграция
const tg = window.Telegram.WebApp;

tg.ready(); // инициализация WebApp

// Обработка кнопки для отправки сообщения в чат
document.getElementById('sendMessage').addEventListener('click', () => {
  tg.sendData("Сообщение от мини-приложения");
});