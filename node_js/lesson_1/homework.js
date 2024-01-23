class Server {
    static __http = require('http');
    static __fs = require('fs');
    static __root = '';
    static __pages = [];

    static start(rootPath, port = 3000) {
        this.__root = rootPath;
        this.__http
            .createServer(this.__handler)
            .listen(port, () => console.log(`Сервер запущен на порту ${port}`));
    }

    static __counter(code, url) {
        const page = (Server.__pages).find(e => e.url === url);
        if (page) {
            page.lastCode = code;
            page.counter += 1;
        } else {
            (Server.__pages).push({
                lastCode: code,
                counter: 1,
                url: url,
            });
        }
    }

    static __getFile(address) {
        return new Promise(async (resolve, reject) => {
            await Server.__fs.readFile(address, 'utf8', (err, data) => {
                !err ? resolve(data) : reject(err);
            });
        });
    }

    static __view(res, header, content) {
        const counter = Server.__pages.find(e => e.url === header.url);

        const headers = {};
        headers['Content-Type'] = `${header.type}; charset=${header.charset}`;
        if (counter) {
            headers['Set-Cookie'] = `countView=${counter ? counter.counter : 0}`;
        }
        res.writeHead(header.code, headers);
        res.end(content);
    }

    static __handler(req, res) {
        const method = req.method;
        const url = req.url === '/' ? '/index' : `${req.url}`;
        let file = Server.__root;
        const header = {
            code: 200,
            type: 'text/html',
            charset: 'UTF-8',
            url: url,
        };

        console.clear();
        console.log('\n');
        console.log(`Запрос получен: @${method} ${url} [${file}]`);
        switch (url) {
            case '/style.css':
            case '/style.css.map':
                header.type = 'text/css';
                file = 'style.css';
                break;
            case '/favicon.ico':
                header.type = 'image/svg+xml';
                file = 'favicon.svg';
                break;
            default:
                if (url.slice(-3) === '.js') {
                    header.type = 'text/javascript';
                    file += url;
                } else {
                    file += `${url}.html`;
                    Server.__counter(header.code, url);
                }
        }
        Server.__pages.sort((a, b) => b.counter - a.counter);
        console.log('Counter:', Server.__pages);

        Server.__getFile(file)
            .then((data) => {
                header.code = 200;
                Server.__view(res, header, data);
            })
            .catch(() => {
                header.code = 404;
                Server.__getFile(`${Server.__root}/404.html`)
                    .then((data) => {
                        Server.__view(res, header, data);
                    })
                    .catch(() => {
                        Server.__view(
                            res,
                            header,
                            `<!DOCTYPE html>` +
                            `<html lang="ru">` +
                            `<head><title>Page not found!</title></head>` +
                            `<body>Error 404: Page not found!</body>` +
                            `</html>`
                        );
                    });
            });
    }
}

Server.start('./lesson_1/pages');