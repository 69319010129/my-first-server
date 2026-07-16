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

<title>Royal Kingdom Server</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Georgia', 'Times New Roman', serif, sans-serif;
}

body{
height:100vh;
overflow:hidden;
display:flex;
justify-content:center;
align-items:center;
background: linear-gradient(-45deg, #0f2027, #203a43, #2c5364, #1f1c2c, #928dab);
background-size:400% 400%;
animation:bg 15s ease infinite;
}

@keyframes bg{
0%{background-position:0% 50%;}
50%{background-position:100% 50%;}
100%{background-position:0% 50%;}
}

.card{
width:700px;
background:rgba(255, 255, 255, 0.95);
padding:40px;
border-radius:20px;
text-align:center;
box-shadow: 0 25px 50px rgba(0,0,0,0.4);
border: 6px double #d4af37; /* ขอบสีทองสไตล์พระราชวัง */
animation:show .8s ease-out;
position: relative;
}

@keyframes show{
from{
opacity:0;
transform:translateY(30px);
}
to{
opacity:1;
transform:translateY(0);
}
}

.logo{
font-size:90px;
margin-bottom: 10px;
filter: drop-shadow(0 5px 10px rgba(0,0,0,0.2));
animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
0% { transform: scale(1); }
50% { transform: scale(1.05); }
100% { transform: scale(1); }
}

h1{
margin-top:10px;
font-size:46px;
letter-spacing: 3px;
background: linear-gradient(to right, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
font-weight: bold;
text-transform: uppercase;
}

h2{
margin:15px;
color:#4a3b32;
font-size: 24px;
font-style: italic;
border-bottom: 2px solid #e5c060;
padding-bottom: 10px;
}

p{
font-size:22px;
line-height: 1.8;
color: #2c3e50;
font-weight: 500;
}

.btn{
display:inline-block;
margin-top:30px;
padding:16px 45px;
background: linear-gradient(90deg, #d4af37, #aa771c);
color: white;
text-decoration: none;
border-radius: 8px; /* ปรับให้เหลี่ยมขึ้นดูภูมิฐาน */
font-size:20px;
font-weight: bold;
letter-spacing: 1px;
box-shadow: 0 5px 15px rgba(212,175,55,0.4);
transition: .3s;
border: 1px solid #fff;
}

.btn:hover{
transform:translateY(-3px);
box-shadow: 0 10px 25px rgba(212,175,55,0.6);
background: linear-gradient(90deg, #aa771c, #d4af37);
}

.item{
position:absolute;
font-size:35px;
animation:float 12s linear infinite;
filter: drop-shadow(0 0 5px rgba(255,215,0,0.3));
}

@keyframes float{
0%{
transform:translateY(110vh) rotate(0deg);
opacity:0;
}
20%{
opacity:0.6;
}
100%{
transform:translateY(-120px) rotate(180deg);
opacity:0;
}
}

.i1{left:8%;animation-delay:0s; animation-duration: 14s;}
.i2{left:22%;animation-delay:3s; animation-duration: 11s;}
.i3{left:40%;animation-delay:6s; animation-duration: 13s;}
.i4{left:60%;animation-delay:1.5s; animation-duration: 10s;}
.i5{left:78%;animation-delay:4.5s; animation-duration: 15s;}
.i6{left:92%;animation-delay:2.5s; animation-duration: 12s;}

</style>

</head>

<body>

<!-- ไอเทมลอยฟ้าสไตล์ราชวงศ์ -->
<div class="item i1">👑</div>
<div class="item i2">⚔️</div>
<div class="item i3">🏰</div>
<div class="item i4">🛡️</div>
<div class="item i5">✨</div>
<div class="item i6">💎</div>

<div class="card">

<div class="logo">👑</div>

<h1>THE ROYAL KINGDOM</h1>

<h2>Welcome to My Empire</h2>

<p>
ขอต้อนรับสู่ดินแดนแห่งราชา เจ้าค่ะ/ครับ 👋
<br><br>
<strong>นาย จิรพนธ์ ผาสุข</strong>
<br>
รหัสนักศึกษา 69319010129
</p>

<a class="btn" href="#">🏰 Enter The Castle</a>

</div>

</body>
</html>`);

});

server.listen(PORT, () => {
    console.log("Server is running at http://localhost:" + PORT);
});
