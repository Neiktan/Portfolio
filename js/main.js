// ===== Typed.js initialization =====

if (window.Typed) {
    const textEl = document.querySelector(".text");
    if (textEl) {
        new Typed(".text", {
            strings: ["Front-End Developer", "Web Developer", "Cybersecurity researcher"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
    }

    const textWebEl = document.querySelector(".text-web");
    if (textWebEl) {
        new Typed(".text-web", {
            strings: ["Front-End Developer", "Web Developer", "Cybersecurity researcher"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
    }
}

// ===== Color toggle (Light / Dark) =====
const themeToggleBtn = document.getElementById("theme-toggle");

if (themeToggleBtn) {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
        document.body.classList.add("dark-mode");
    }

    updateToggleText();

    themeToggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
        localStorage.setItem("theme", theme);
        updateToggleText();
    });
}

function updateToggleText() {
    const btn = document.getElementById("theme-toggle");
    if (!btn) return;

    if (document.body.classList.contains("dark-mode")) {
        btn.textContent = "Light mode";
    } else {
        btn.textContent = "Dark mode";
    }
}