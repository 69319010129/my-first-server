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
transition: background 1s ease;
}

body.dark-mode {
  background: black;
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
z-index: 10;
transition: opacity 1s ease, transform 1s ease;
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
cursor: pointer;
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
z-index: 5;
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

/* ส่วนของผีและบรรยากาศหลังกดปุ่ม */
#ghost-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items:center;
  z-index: 100;
  opacity: 0;
  pointer-events: none;
  transition: opacity 2s ease;
}

#ghost-overlay.show {
  opacity: 1;
  pointer-events: auto;
}

#ghost-image {
  max-width: 80%;
  max-height: 80%;
  filter: grayscale(100%) blur(2px) drop-shadow(0 0 20px rgba(255, 255, 255, 0.2));
  transform: scale(0.8) translateY(20px);
  transition: transform 3s ease-out, filter 3s ease-out;
  opacity: 0;
}

#ghost-overlay.show #ghost-image {
  transform: scale(1) translateY(0);
  filter: grayscale(100%) blur(0) drop-shadow(0 0 50px rgba(255, 255, 255, 0.5));
  opacity: 1;
}

#ghost-image:hover {
  filter: grayscale(0%) blur(0) drop-shadow(0 0 50px rgba(255, 0, 0, 0.8));
}

#ghost-message {
  position: absolute;
  bottom: 10%;
  color: #fff;
  font-family: 'Creepster', cursive; /* ต้องเพิ่ม font นี้ถ้าต้องการ */
  font-size: 3em;
  text-align: center;
  text-shadow: 0 0 10px rgba(255, 0, 0, 0.7);
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 2s ease, transform 2s ease;
  transition-delay: 2s;
}

#ghost-overlay.show #ghost-message {
  opacity: 1;
  transform: translateY(0);
}

#mist {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://www.transparenttextures.com/patterns/dark-dotted-2.png'); /* ลายฝุ่นสีดำ */
  opacity: 0;
  z-index: 90;
  pointer-events: none;
  transition: opacity 4s ease;
}

#mist.show {
  opacity: 0.3;
}

@keyframes mistMove {
  0% { background-position: 0 0; }
  100% { background-position: 100px 100px; }
}

</style>
<link href="https://fonts.googleapis.com/css2?family=Creepster&display=swap" rel="stylesheet"> <!-- เพิ่มฟอนต์สยองขวัญ -->
</head>

<body>

<!-- เสียงประกอบ (จะเล่นเมื่อเบราว์เซอร์อนุญาต) -->
<audio id="scream-sound" src="https://www.soundjay.com/human/creepy-scream-1.mp3" preload="auto"></audio>
<audio id="ambient-sound" src="https://www.soundjay.com/ambient/dark-ambient-atmosphere-01.mp3" preload="auto" loop></audio>

<!-- ไอเทมลอยฟ้าสไตล์ราชวงศ์ -->
<div class="item i1">👑</div>
<div class="item i2">⚔️</div>
<div class="item i3">🏰</div>
<div class="item i4">🛡️</div>
<div class="item i5">✨</div>
<div class="item i6">💎</div>

<div class="card" id="main-card">

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

<!-- เปลี่ยนจาก <a> เป็น <button> เพื่อการควบคุมด้วย JS ที่ง่ายขึ้น -->
<button class="btn" id="enter-btn">🏰 Enter The Castle</button>

</div>

<!-- ส่วนของผีและบรรยากาศหลังกดปุ่ม -->
<div id="mist"></div>
<div id="ghost-overlay">
  <img id="ghost-image" src="https://upload.wikimedia.org/wikipedia/commons/b/b3/A_Woman_as_a_Ghost_MET_DP143224.jpg" alt="A Woman as a Ghost">
  <div id="ghost-message">BEWARE!</div>
</div>

<script>
  const enterBtn = document.getElementById('enter-btn');
  const mainCard = document.getElementById('main-card');
  const ghostOverlay = document.getElementById('ghost-overlay');
  const ghostImage = document.getElementById('ghost-image');
  const mist = document.getElementById('mist');
  const screamSound = document.getElementById('scream-sound');
  const ambientSound = document.getElementById('ambient-sound');
  const body = document.body;

  enterBtn.addEventListener('click', () => {
    // 1. ซ่อนการ์ดหลัก
    mainCard.classList.add('hidden');
    
    // 2. เปลี่ยนบรรยากาศ (ทำเป็นพื้นหลังสีดำ)
    body.classList.add('dark-mode');
    
    // 3. แสดงหมอกควัน
    mist.classList.add('show');

    // 4. แสดงภาพผีและข้อความ
    setTimeout(() => {
      ghostOverlay.classList.add('show');
    }, 1000); // แสดงหลังจากการ์ดหายไป

    // 5. เล่นเสียงประกอบ (ถ้าเบราว์เซอร์อนุญาต)
    // ลองเล่นเสียงหวีดร้อง (อาจโดนบล็อก)
    screamSound.play().catch(e => console.error("Scream sound blocked:", e));
    
    // เล่นเสียงบรรยากาศหลอนๆ (มีโอกาสผ่านมากกว่า)
    setTimeout(() => {
        ambientSound.play().catch(e => console.error("Ambient sound blocked:", e));
    }, 2000);

  });
</script>

</body>
</html>`);

});

server.listen(PORT, () => {
    console.log("Server is running at http://localhost:" + PORT);
});
