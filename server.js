res.end(`
<!DOCTYPE html>
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
    font-family:'Trebuchet MS',sans-serif;
}

body{
    background:linear-gradient(135deg,#ffe5b4,#ffd6ec,#d8f3ff);
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    overflow:hidden;
}

.card{
    width:700px;
    background:rgba(255,255,255,.95);
    border-radius:30px;
    padding:40px;
    text-align:center;
    box-shadow:0 15px 40px rgba(0,0,0,.2);
    border:8px solid #ffb347;
}

h1{
    color:#ff7b00;
    font-size:45px;
    margin-bottom:15px;
    text-shadow:2px 2px #fff;
}

h2{
    color:#7b4b2a;
    margin-bottom:20px;
}

p{
    color:#555;
    font-size:20px;
    line-height:1.8;
}

.cookie{
    font-size:90px;
    animation:spin 6s linear infinite;
    margin-bottom:20px;
}

.btn{
    display:inline-block;
    margin-top:30px;
    padding:15px 40px;
    background:#ff8fab;
    color:white;
    text-decoration:none;
    border-radius:50px;
    font-size:20px;
    transition:.3s;
}

.btn:hover{
    background:#ff5d8f;
    transform:scale(1.08);
}

.star{
    position:absolute;
    color:white;
    font-size:25px;
    animation:float 5s infinite;
}

.star:nth-child(1){top:10%;left:8%;}
.star:nth-child(2){top:20%;right:12%;}
.star:nth-child(3){bottom:15%;left:15%;}
.star:nth-child(4){bottom:20%;right:10%;}

@keyframes spin{
    from{transform:rotate(0deg);}
    to{transform:rotate(360deg);}
}

@keyframes float{
    0%,100%{transform:translateY(0);}
    50%{transform:translateY(-20px);}
}
</style>
</head>

<body>

<div class="star">⭐</div>
<div class="star">🍭</div>
<div class="star">✨</div>
<div class="star">🍬</div>

<div class="card">

<div class="cookie">🍪</div>

<h1>Cookie Run Web Server</h1>

<h2>ยินดีต้อนรับ</h2>

<p>
สวัสดีครับ 👋<br><br>

นี่คือ Web Server ของ<br>
<b>นาย จิรพนธ์ ผาสุข</b><br>
รหัสนักศึกษา <b>69319010129</b>
</p>

<a class="btn" href="#">
🍪 Start Adventure
</a>

</div>

</body>
</html>
`);
