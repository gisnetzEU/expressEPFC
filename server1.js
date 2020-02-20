const express = require('express');

    var app = express();

    // première callback
    app.use((req, res, next) => {
        console.log(req);
        // next() appelle la callback suivante
        next();
    });

    // seconde callback
    app.use((req, res) => {
        // ajoute un header sur le HTTP
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("hello express");
    })


    //app.use(log);
    //app.use(log);
    //app.use("sendHello");

    app.listen(3000, () => {
        console.log("serveur prêt, essaie http:\\localhost:3000")
    });