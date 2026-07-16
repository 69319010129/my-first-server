res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Cookie Run Theme</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}

body{
height:100vh;
display:flex;
justify-content:center;
align-items:center;
overflow:hidden;
background:linear-gradient(-45deg,#FFD166,#FFB347,#FF8FAB,#A0E7E5,#B5EAD7);
background-size:400% 400%;
animation:bg 12s ease infinite;
}

@keyframes bg{
0%{background-position:0% 50%;}
50%{background-position:100% 50%;}
100%{background-position:0% 50%;}
}

.card{
width:720px;
background:rgba(255,255,255,.9);
backdrop-filter:blur(10px);
padding:40px;
border-radius:35px;
text-align:center;
box-shadow:0 20px 50px rgba(0,0,0,.3);
border:8px solid #ffb347;
animation:popup 1s;
}

@keyframes popup{
from{
transform:scale(.6);
opacity:0;
}
to{
transform:scale(1);
opacity:1;
}
}

h1{
font-size:50px;
background:linear-gradient(to right,#ff6b00,#ff0080,#7b2ff7);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
margin-bottom:20px;
}

h2{
font-size:30px;
color:#7b4b2a;
margin-bottom:20px;
}

p{
font-size:22px;
line-height:1.8;
color:#555;
}

.cookie{
font-size:100px;
animation:spin 6s linear infinite;
margin-bottom:20px;
}

@keyframes spin{
100%{
transform:rotate(360deg);
}
}

.btn{
display:inline-block;
margin-top:30px;
padding:18px 45px;
font-size:22px;
background:linear-gradient(to right,#ff9a44,#ff5f6d);
color:white;
border-radius:50px;
text-decoration:none;
transition:.3s;
box-shadow:0 10px 20px rgba(0,0,0,.25);
}

.btn:hover{
transform:translateY(-8px) scale(1.08);
box-shadow:0 15px 30px rgba(0,0,0,.3);
}

.float{
position:absolute;
font-size:40px;
animation:float 7s linear infinite;
}

@keyframes float{
0%{
transform:translateY(120vh) rotate(0deg);
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

.f1{left:5%;animation-delay:0s;}
.f2{left:20%;animation-delay:2s;}
.f3{left:40%;animation-delay:4s;}
.f4{left:60%;animation-delay:1s;}
.f5{left:80%;animation-delay:3s;}
.f6{left:92%;animation-delay:5s;}

</style>

</head>

<body>

<div class="float f1">🍪</div>
<div class="float f2">🍩</div>
<div class="float f3">🍬</div>
<div class="float f4">🧁</div>
<div class="float f5">⭐</div>
<div class="float f6">✨</div>

<div class="card">

<div class="cookie">🍪</div>

<h1>COOKIE RUN WEB SERVER</h1>

<h2>🎉 Welcome 🎉</h2>

<p>
สวัสดีครับ<br><br>

<b>นาย จิรพนธ์ ผาสุข</b><br>

รหัสนักศึกษา 69319010129
</p>

<a class="btn">🍪 Start Adventure</a>

</div>

</body>
</html>
`);
