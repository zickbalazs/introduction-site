const express = require('express'), path = require('path'), app = express();

app.use(express.urlencoded({extended:true}));
app.use('/img', express.static(path.join(__dirname, './assets/img')));
app.use('/js', express.static(path.join(__dirname, './assets/js')))
app.use('/bi', express.static(path.join(__dirname, './node-modules/bootstrap-icons/icons')))
app.get('/css', (req, res)=>{res.status(200).sendFile(path.join(__dirname, './assets/css/styles.css'))})
app.get('/', (req,res)=>{ res.status(200).sendFile(path.join(__dirname, './web/index.html')); });
app.get('/hobbies', (req,res)=>{ res.status(200).sendFile(path.join(__dirname, './web/hobbies.html')); });
app.get('/contacts', (req,res)=>{ res.status(200).sendFile(path.join(__dirname, './web/contacts.html')); });
app.post('/api/message', (req,res)=>{ 
    console.log(req.body);
    res.status(200).sendFile(path.join(__dirname, './web/thx.html')); 
});
app.listen(8080, console.log('listening on http://localhost:8080'));
