const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')
const mime = require('mime-types');

const server = http.createServer((req,res)=>{

    let urlParse = url.parse(req.url, true);
    const {file} = urlParse.query;
    const {message} = urlParse.query;

    if (path.extname(file) === '.js'){
        res.statusCode = '404';
        res.end();
        return;
    } else {
        const filePath = path.join(__dirname,'public',file)
        fs.writeFileSync(filePath, message)
    }

    res.end();
});

server.listen(5000,'127.0.0.1', ()=>{
    console.log('server running')
})