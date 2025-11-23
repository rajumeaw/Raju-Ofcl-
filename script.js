<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Premium Giveaway Winners</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

body{
    margin: 0;
    padding: 0;
    background: linear-gradient(120deg, #0f0c29, #302b63, #24243e);
    font-family: 'Poppins', sans-serif;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.container{
    width: 650px;
    background: rgba(0,0,0,0.7);
    border-radius: 30px;
    padding: 35px 30px;
    border: 3px solid #ff2ea7;
    box-shadow: 0 0 40px rgba(255,46,167,0.8);
    animation: fadeIn 1.8s ease;
}

h1{
    text-align: center;
    font-size: 36px;
    color: #ff2ea7;
    text-shadow: 0 0 20px #ff2ea7, 0 0 30px #ff77aa;
    margin-bottom: 10px;
}

.group{
    text-align: center;
    font-size: 22px;
    color: #ff77aa;
    font-weight: 600;
    margin-bottom: 15px;
    text-shadow: 0 0 10px #ff2ea7;
}

.admin{
    text-align: center;
    font-size: 20px;
    color: #ff99cc;
    margin-bottom: 25px;
    text-shadow: 0 0 10px #ff2ea7;
}

.winner{
    background: rgba(255,255,255,0.08);
    margin: 15px 0;
    padding: 22px 10px;
    font-size: 26px;
    text-align: center;
    font-weight: 700;
    border-radius: 18px;
    border-left: 6px solid #ff2ea7;
    box-shadow: 0 0 20px rgba(255,46,167,0.5);
    animation: glow 2s infinite alternate;
}

@keyframes glow{
    0% {box-shadow: 0 0 15px #ff2ea7; color: #ff2ea7;}
    50% {box-shadow: 0 0 35px #ff00ff; color: #ff77aa;}
    100% {box-shadow: 0 0 15px #ff2ea7; color: #ff2ea7;}
}

.gift-box{
    margin-top: 40px;
    padding: 30px 25px;
    background: rgba(255,255,255,0.05);
    border-radius: 25px;
    border: 2px solid #ff2ea7;
    box-shadow: 0 0 25px rgba(255,46,167,0.4);
    text-align: center;
    position: relative;
    overflow: hidden;
}

.gift-box h2{
    font-size: 28px;
    color: #ff2ea7;
    margin-bottom: 25px;
    text-shadow: 0 0 10px #ff77aa;
}

.gift-btn{
    display: block;
    width: 85%;
    margin: 15px auto;
    padding: 18px 0;
    font-size: 22px;
    font-weight: 700;
    color: #fff;
    background: linear-gradient(90deg, #ff2ea7, #ff77aa);
    border: none;
    border-radius: 15px;
    cursor: pointer;
    box-shadow: 0 0 20px rgba(255,46,167,0.6);
    transition: 0.4s;
    text-decoration: none;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.gift-btn:hover{
    transform: scale(1.07);
    box-shadow: 0 0 35px rgba(255,46,167,0.9);
}

.sparkle{
    position: absolute;
    width: 6px;
    height: 6px;
    background: #fff;
    border-radius: 50%;
    pointer-events: none;
    animation: sparkleMove 1s linear infinite;
}

@keyframes sparkleMove{
    0%{transform: translateY(0) scale(1);}
    50%{transform: translateY(-10px) scale(0.7);}
    100%{transform: translateY(0) scale(1);}
}

@keyframes fadeIn{
    0% {opacity: 0; transform: scale(0.9);}
    100% {opacity: 1; transform: scale(1);}
}
</style>
</head>
<body>

<div class="container">
    <h1>🎉 Giveaway Winners 🎉</h1>
    <div class="group">Group: 👑 DREAM EDITOR SOCIETY 🌿🐣</div>
    <div class="admin">Hosted by: 👑 Raju Ofcl</div>

    <div class="winner">👑 𝐑𝐚𝐡𝐦𝐚𝐧 𝐒𝐢𝐫</div>
    <div class="winner">👑 𝐅𝐚𝐫𝐮𝐤</div>
    <div class="winner">👑 𝐀𝐑 𝐑𝐚𝐛𝐛𝐲 𝐇𝐚𝐬𝐚𝐧</div>

    <div class="gift-box">
        <h2>🎁 Premium Gifts (Click to Download)</h2>
        <!-- Replace # with your Google Drive link -->
        <a href="#" class="gift-btn" target="_blank">Premium Map CC</a>
        <a href="#" class="gift-btn" target="_blank">Premium Normal Lobby CC</a>
        <a href="#" class="gift-btn" target="_blank">Premium Max Lobby CC</a>
        <a href="#" class="gift-btn" target="_blank">Wink APK VIP</a>
    </div>
</div>

<script>
const buttons = document.querySelectorAll('.gift-btn');

buttons.forEach(btn=>{
    btn.addEventListener('mousemove', e=>{
        const sparkle = document.createElement('span');
        sparkle.classList.add('sparkle');
        sparkle.style.left = e.offsetX + 'px';
        sparkle.style.top = e.offsetY + 'px';
        btn.appendChild(sparkle);
        setTimeout(()=> sparkle.remove(), 600);
    });
});
</script>

</body>
</html>