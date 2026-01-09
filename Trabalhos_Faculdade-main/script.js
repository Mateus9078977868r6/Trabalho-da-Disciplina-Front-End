const btn = document.getElementById("dark-mode-toggle");

btn.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
    
    if (document.body.classList.contains("dark-theme")) {
        btn.textContent = "Modo Claro";
    } else {
        btn.textContent = "Modo Escuro";
    }
});