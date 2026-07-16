<title>Cookie Run Kingdom</title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Baloo+2:wght@500;700&display=swap" rel="stylesheet">

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Fredoka',sans-serif;
}

body{
height:100vh;
overflow:hidden;
display:flex;
justify-content:center;
align-items:center;

background:
linear-gradient(-45deg,
#ffb347,
#ffcc70,
#ff8fab,
#84d8ff,
#b8ffb3,
#fff2a8);

background-size:600% 600%;
animation:bgMove 15s ease infinite;
position:relative;
}

@keyframes bgMove{

0%{
background-position:0% 50%;
}

50%{
background-position:100% 50%;
}

100%{
background-position:0% 50%;
}

}
/* ===========================
   PART 1 : เอฟเฟกต์พื้นหลัง + การ์ด
=========================== */

/* พื้นหลังเคลื่อนไหว */
body{
    background: linear-gradient(
        -45deg,
        #FFD166,
        #FF9A8B,
        #FF6EC7,
        #7BDFF2,
        #B8F2E6,
        #FFF3B0
    );
    background-size: 500% 500%;
    animation: bgMove 12s ease infinite;
}

/* Animation พื้นหลัง */
@keyframes bgMove{
    0%{background-position:0% 50%;}
    50%{background-position:100% 50%;}
    100%{background-position:0% 50%;}
}

/* การ์ดมีแสง */
.card{
    position:relative;
    overflow:hidden;
    box-shadow:
        0 0 20px rgba(255,255,255,.5),
        0 0 40px rgba(255,170,0,.4),
        0 0 80px rgba(255,100,180,.3);
}

/* แสงวิ่งบนการ์ด */
.card::before{
    content:"";
    position:absolute;
    top:-50%;
    left:-50%;
    width:200%;
    height:200%;
    background:linear-gradient(
        45deg,
        transparent,
        rgba(255,255,255,.45),
        transparent
    );
    transform:rotate(25deg);
    animation:shine 5s linear infinite;
}

@keyframes shine{
    0%{
        transform:translateX(-100%) rotate(25deg);
    }
    100%{
        transform:translateX(100%) rotate(25deg);
    }
}

/* โลโก้เด้ง */
.logo{
    animation:bounce 2.5s ease-in-out infinite;
}

@keyframes bounce{
    0%,100%{
        transform:translateY(0);
    }
    50%{
        transform:translateY(-15px);
    }
}
