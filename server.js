const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
    });

    res.end(`<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">  
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Cookie Run Server</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}

body{
height:100vh;
overflow:hidden;
display:flex;
justify-content:center;
align-items:center;
background:linear-gradient(-45deg,#FFD166,#FFB347,#FF8FAB,#8EC5FC,#A8E6CF);
background-size:400% 400%;
animation:bg 12s ease infinite;
}

@keyframes bg{
0%{background-position:0% 50%;}
50%{background-position:100% 50%;}
100%{background-position:0% 50%;}
}

.card{
width:700px;
background:rgba(255,255,255,.92);
padding:40px;
border-radius:30px;
text-align:center;
box-shadow:0 20px 40px rgba(0,0,0,.25);
border:8px solid #ffb347;
animation:show .8s;
}

@keyframes show{
from{
opacity:0;
transform:scale(.7);
}
to{
opacity:1;
transform:scale(1);
}
}

.logo{
font-size:90px;
animation:spin 6s linear infinite;
}

@keyframes spin{
100%{
transform:rotate(360deg);
}
}

h1{
margin-top:15px;
font-size:48px;
background:linear-gradient(to right,#ff6600,#ff1493,#7b2ff7);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
}

h2{
margin:15px;
color:#7b4b2a;
}

p{
font-size:22px;
line-height:1.8;
color:#444;
}

.btn{
display:inline-block;
margin-top:25px;
padding:16px 45px;
background:linear-gradient(90deg,#ff7b00,#ff4081);
color:white;
text-decoration:none;
border-radius:50px;
font-size:22px;
transition:.3s;
}

.btn:hover{
transform:scale(1.08);
box-shadow:0 10px 20px rgba(0,0,0,.25);
}

.item{
position:absolute;
font-size:40px;
animation:float 10s linear infinite;
}

@keyframes float{
0%{
transform:translateY(110vh) rotate(0deg);
opacity:0;
}
20%{
opacity:1;
}
100%{
transform:translateY(-120px) rotate(360deg);
opacity:0;
}
}

.i1{left:5%;animation-delay:0s;}
.i2{left:18%;animation-delay:2s;}
.i3{left:35%;animation-delay:4s;}
.i4{left:55%;animation-delay:1s;}
.i5{left:75%;animation-delay:3s;}
.i6{left:90%;animation-delay:5s;}

</style>

</head>

<body>

<div class="item i1">🍪</div>
<div class="item i2">🍩</div>
<div class="item i3">🍬</div>
<div class="item i4">🧁</div>
<div class="item i5">⭐</div>
<div class="item i6">✨</div>

<div class="card">

<div class="logo">🍪</div>

<h1>COOKIE RUN</h1>

<h2>Welcome to My Server</h2>

<p>
สวัสดีครับ 👋
<br><br>
นาย จิรพนธ์ ผาสุข
<br>
รหัสนักศึกษา 69319010129
</p>

<a class="btn" href="#">🍪 Start Adventure</a>

</div>

</body>
</html>`);

});

server.listen(PORT, () => {
    console.log("Server is running at http://localhost:" + PORT);
});
