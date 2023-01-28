var http = require('http');


http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type":"text/html"});
    switch(req.url){
        case '/home' : res.write('Halaman Home'); break;
        case '/product' : res.write('Halaman product'); break;
        default : res.write('404');
    }
    res.end();
}).listen(8000);

console.log("Server running on http://localhost:8000/");
