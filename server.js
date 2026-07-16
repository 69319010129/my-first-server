const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
    });

    res.end(`
<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<title>Cookie Run</title>

<style>
body{
margin:0;
font-family:Arial,sans-serif;
background:linear-gradient(to bottom,#FFD580,#FFE8B6,#FFF5DD);
display:flex;
justify-content:center;
align-items:center;
height:100vh;
}

.card{
background:white;
padding:40px;
border-radius:25px;
box-shadow:0 0 20px rgba(0,0,0,.2);
text-align:center;
width:600px;
}

h1{
color:#ff7a00;
font-size:45px;
}

p{
font-size:20px;
}

button{
background:#ff8c42;
color:white;
border:none;
padding:15px 30px;
font-size:20px;
border-radius:30px;
cursor:pointer;
}

button:hover{
background:#ff6600;
}
</style>

</head>

<body>

<div class="card">
<h1>🍪 Cookie Run Server 🍪</h1>

<p>สวัสดีครับ</p>

<p>นาย จิรพนธ์ ผาสุข</p>

<p>รหัสนักศึกษา 69319010129</p>

<button>Start Adventure</button>
</div>

</body>
</html>
`);
});

server.listen(port, () => {
    console.log("Server running on port " + port);
});
