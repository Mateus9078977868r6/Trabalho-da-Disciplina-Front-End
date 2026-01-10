const btn = document.getElementById("dark-mode-toggle");

btn.addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
    
    if (document.body.classList.contains("dark-theme")) {
        btn.textContent = "Modo Claro";
    } else {
        btn.textContent = "Modo Escuro";
    }
});

let numeroLikes = 0;

function darLike() {
    numeroLikes = numeroLikes + 1;
    document.getElementById("contador").innerText = numeroLikes;
    
    if (numeroLikes === 10) {
        alert("Este time está ficando popular!");
    }
}