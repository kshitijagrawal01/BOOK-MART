   var express=require('express'),
   mongo         = require("mongoose"),
   bodyParser    = require("body-parser"),
   multipart     = require("connect-multiparty"),

   multipartMiddleware = multipart();
 var app=express();  
 app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
var methodOverride = require('method-override');
var httpServer = require("http").createServer(app);
var cors = require('cors');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');

mongo.connect('mongodb://127.0.0.1/book-store', function(err){
      if(err)
         throw err;
   });
   app.use(cors({origin: 'http://localhost:3000'}));

// Add headers

app.use(bodyParser.json());
app.use(multipartMiddleware);  
app.use(methodOverride('X-HTTP-Method-Override')); 

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true })); 

var bookcartcontroller=require('./server/controllers/bookcartcontroller');
var bookcontroller=require('./server/controllers/bookcontroller');
  var dbconnectiontobookviewcontroller=require('./server/controllers/bookviewcontroller.js');
 var dbconnection=require('./server/controllers/book-controller.js'); 
 var viewcontroller=require('./server/controllers/view-controller.js'); 
  var view1controller=require('./server/controllers/view1-controller.js'); 
var ebookcontroller=require('./server/controllers/ebookcontrol.js');
 var blogcontroller=require('./server/controllers/blog-controller.js');
var searchresult=require('./server/controllers/searchresult');
var profilecontroller=require('./server/controllers/profile-controller');

var categorycontroller=require('./server/controllers/servercategory-controller.js');
  var contactcontroller=require('./server/controllers/contact-controller.js');
      app.get('/',function(req,res)
      {
      	res.sendfile('index.html');
      })
 
 /* app.get('/index',function(req,res)
      {
        res.sendfile('index.html');
      })
*/
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use('/style.css',express.static(__dirname+"/style.css"));
app.use('/css',express.static(__dirname+"/css"));
app.use('/js',express.static(__dirname+"/js"));
app.use('/images',express.static(__dirname+"/images"));
app.use('/fonts',express.static(__dirname+"/fonts"));
app.use('/app',express.static(__dirname+"/app"));
app.use('/node_modules',express.static(__dirname+"/node_modules"));

app.use(cors());

require('./config/passport')(app); 
app.get('/api/bookview',dbconnectiontobookviewcontroller.getbookview);
app.post('/api/profile/update',multipartMiddleware,profilecontroller.update);

app.post('/api/bookinfo/saveinfo',multipartMiddleware,dbconnection.savebookinfo);
app.post('/api/book/info',bookcontroller.info);
app.post('/api/book/pin',bookcontroller.pin);
app.post('/api/book/user',bookcontroller.user);
app.post('/api/book/likes',bookcontroller.likes);

app.post('/api/book/dislikes',bookcontroller.dislikes);
app.post('/api/book/communication',bookcontroller.comm);
app.post('/api/book/addtocart',bookcartcontroller.addtocart);
app.get('/api/usercartinfo',bookcartcontroller.usercartinfo);
app.post('/api/deletefromcart',bookcartcontroller.deletefromcart);
app.post('/api/cart/addpartials',bookcartcontroller.addpartials);
app.post('/api/bookinfo/getbooks',viewcontroller.getbookinfo);
app.post('/api/bookinfo/sciencebooks',viewcontroller.getsciencebookinfo);
app.post('/api/bookinfo/preparationbooks',viewcontroller.getpreparationbookinfo);
app.post('/api/bookinfo/blog',view1controller.getbloginfo);
app.post('/api/blog/show',view1controller.view_blog);

app.post('/api/blog/post',blogcontroller.post_blog);
app.post('/api/blog/show',blogcontroller.view_blog);
app.get('/api/blog/get',blogcontroller.get_blog);
app.post('/api/bookinfo/bio',categorycontroller.bioinfo);
app.post('/api/bookinfo/exams',categorycontroller.examinfo);
app.post('/api/bookinfo/family',categorycontroller.familyinfo);
app.post('/api/bookinfo/craft',categorycontroller.craftinfo);
app.post('/api/bookinfo/comic',categorycontroller.comicinfo);
app.post('/api/bookinfo/drama',categorycontroller.dramainfo);
app.post('/api/bookinfo/philos',categorycontroller.philosinfo);
app.post('/api/bookinfo/computer',categorycontroller.computerinfo);
app.post('/api/bookinfo/science',categorycontroller.scienceinfo);
app.post('/api/bookinfo/history',categorycontroller.historyinfo);
app.post('/api/contact/post',contactcontroller.saveinfo);


app.use('/api/search/word',searchresult.word);
app.use('/api/search/search',searchresult.search);
app.use('/api/search/ebookword',searchresult.ebookword);
app.use('/api/search/ebooksearch',searchresult.ebooksearch);

app.post('/api/ebook/info',ebookcontroller.info);
app.post('/api/ebook/user',ebookcontroller.user);
app.post('/api/ebook/likes',ebookcontroller.likes);
app.post('/api/ebook/dislikes',ebookcontroller.dislikes);
app.post('/api/ebook/communication',ebookcontroller.comm);

app.use('/app/ebook/ebookinfo',multipartMiddleware,ebookcontroller.saveinfo);

app.post('/api/bookinfo/saveinfo',multipartMiddleware,dbconnection.savebookinfo);

      app.listen(3000,function(req,res)
      {
      	console.log("server running on 3000");
      })

 