var fs = require('fs');
var http = require('http');

http.createServer(function(req, res){

    fs.appendFile('index3.html', "Buat file baru", function(err){
        if(err) throw err;
        console.log('file berhasil dibuat');
    });

    fs.readFile('index3.html', function(err, data){
        if(err) throw err;
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        res.end();
    });
   
}).listen(8000);

console.log("server running on http://localhost:8000/");