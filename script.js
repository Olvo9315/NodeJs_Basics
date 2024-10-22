const http = require('http');

const pageViews = {
    '/': 0,
    '/about': 0
};

const server = http.createServer((req, res) => {
    console.log('Запрос получен');
    
    if (pageViews.hasOwnProperty(req.url)) {
        pageViews[req.url] += 1;
    }

    switch (req.url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
            res.end(`<h1>Главная страница</h1><p>Количество просмотров: ${pageViews['/']}</p><a href="/about">Перейти на страницу обо мне</a>`);
            break;

        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
            res.end(`<h1>Страница обо мне</h1><p>Количество просмотров: ${pageViews['/about']}</p><a href="/">Перейти на главную страницу</a>`);
            break;

        default:
            res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
            res.end('<h1>Страница 404</h1>');
            break;
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});