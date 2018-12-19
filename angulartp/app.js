const express = require('express')
var http = require('http');

const app = express()

app.get('/api/posts',  (req, res) => {

    http.get('http://jsonplaceholder.typicode.com/posts', (resp) => {
        let pst = '';

        resp.on('data', (chunk) => {
            pst = pst + chunk;
        });

        resp.on('end', () => {
            let posts = JSON.parse(pst);

            posts.forEach(function(post) {
                post['date'] = Date.now();
            })

            res.json(posts);
        });

    }).on("error", (err) => {
        res.json("Error: " + err.message);
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})