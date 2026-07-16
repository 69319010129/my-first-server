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

<title>Royal Kingdom Server - The Haunting</title>

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
transition: background 1.5s ease;
}

body.dark-mode {
  background: #050505;
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
border: 6px double #d4af37;
animation:show .8s ease-out;
position: relative;
z-index: 10;
transition: opacity 0.8s ease, transform 0.8s ease;
}

.card.hidden {
  opacity: 0;
  transform: translateY(50px) scale(0.9);
  pointer-events: none;
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
filter: drop-shadow(0
