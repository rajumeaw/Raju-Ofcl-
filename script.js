// একটি ক্যানভাস ব্যবহার করে ব্যাকগ্রাউন্ডে স্টার ইফেক্ট তৈরি করা
// এটি একটু অ্যাডভান্সড JS, আপনি চাইলে এই ফাইলটি খালি রাখতে পারেন

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1'; // যাতে কন্টেন্টের পেছনে থাকে
    document.body.appendChild(canvas);

    let stars = [];
    const numStars = 200;

    // স্টার তৈরি করার ফাংশন
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5,
            velocity: Math.random() * 0.1 + 0.05
        });
    }

    // অ্যানিমেশন লুপ
    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height); // ক্যানভাস পরিষ্কার করা

        ctx.fillStyle = '#FFFFFF';
        stars.forEach(star => {
            // স্টারগুলোকে নিচের দিকে স্লাইড করানো
            star.y += star.velocity;

            // যদি স্ক্রিনের নিচ থেকে বের হয়ে যায়, তবে উপরে ফিরিয়ে আনা
            if (star.y > canvas.height) {
                star.y = 0;
            }

            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    animate();

    // উইন্ডো সাইজ পরিবর্তন হলে ক্যানভাসের সাইজ আপডেট করা
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});