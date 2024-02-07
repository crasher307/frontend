'use strict';

import express from "express";
import path from "path";
import fs from "fs";

class Server {
    static app;
    static usersFile = path.join('./users.json');

    static start(port = 3000) {
        this.app = express();
        this.app.use(express.json());
        this.app.all('/users*', (req, res) => this.__usersHandler(req, res));
        this.app.listen(port, () => {
            console.clear();
            console.log(`Server started: http://localhost:${port}`);
        });
    }

    static readFile(address) {
        try {
            return fs.readFileSync(address, 'utf8');
        } catch (e) {
            //
        }
        return null;
    }
    static writeFile(address, mode, data) {
        try {
            fs.writeFile(address, data, {flag: mode}, (e) => {
                throw new Error(e.message);
            });
            return true;
        } catch (e) {
            //
        }
        return false;
    }

    static decode(data) {
        return JSON.parse(data);
    }
    static encode(data) {
        return JSON.stringify(data, null, 4);
    }

    static __usersHandler(req, res) {
        const users = this.decode(this.readFile(this.usersFile)) || [];
        const save = (data) => this.writeFile(this.usersFile, 'w+', this.encode(data));
        const url = req.url.split('/').splice(2); // query props
        const query = {id: url[0] ? Number(url[0]) : null, ...req.body};
        const response = {
            code: 200,
            data: null,
            error: null,
        };
        switch (String(req.method).toLowerCase()) {
            case 'get':
                if (query.id) {
                    const user = users.find(e => e.id === query.id);
                    if (user) {
                        response.data = user;
                    } else {
                        response.code = 404;
                        response.error = 'Пользователь не найден';
                    }
                } else {
                    response.data = users;
                }
                break;
            case 'post':
                query.id = users.length ? users[users.length - 1].id + 1 : 1;
                users.push(query);
                if (save(users)) {
                    response.data = 'Пользователь добавлен';
                } else {
                    response.error = 'Пользователь не добавлен';
                }
                break;
            case 'put':
                if (query.id) {
                    const user = users.find(e => e.id === query.id);
                    if (user) {
                        Object.entries(query).forEach(e => user[e[0]] = e[1]);
                        if (save(users)) {
                            response.data = 'Пользователь обновлен';
                        } else {
                            response.error = 'Пользователь не обновлен';
                        }
                    } else {
                        response.code = 404;
                        response.error = 'Пользователь не найден';
                    }
                } else {
                    response.code = 500;
                    response.error = 'Не передан id пользователя';
                }
                break;
            case 'delete':
                if (query.id) {
                    const user = Object.entries(users)
                        .map(e => ({idx: e[0], id: e[1].id}))
                        .find(e => e.id === query.id);
                    if (user) {
                        users.splice(Number(user.idx), 1);
                        if (save(users)) {
                            response.data = 'Пользователь удален';
                        } else {
                            response.error = 'Пользователь не удален';
                        }
                    } else {
                        response.code = 404;
                        response.error = 'Пользователь не найден';
                    }
                } else {
                    response.code = 500;
                    response.error = 'Не передан id пользователя';
                }
                break;
        }
        res.writeHead(response.code, {'Content-Type': `application/json; charset=utf-8`});
        res.end(this.encode(response));
    }
}

Server.start();