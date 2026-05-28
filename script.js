function openDebian() {
    window.open("https://debian-production-5d3d.up.railway.app", "_blank");
}

function openUbuntu() {
    window.open("https://ubuntu-production-28b1.up.railway.app", "_blank");
}

/* ===== BOLINHAS ===== */

const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let balls = [];

for (let i = 0; i < 60; i++) {
    balls.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 4 + 2,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2
    });
}

function animate() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let b of balls) {
        ctx.beginPath();
        ctx.fillStyle = "yellow";
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();

        b.x += b.dx;
        b.y += b.dy;

        if (b.x < 0 || b.x > canvas.width) b.dx *= -1;
        if (b.y < 0 || b.y > canvas.height) b.dy *= -1;
    }

    requestAnimationFrame(animate);
}

animate();
