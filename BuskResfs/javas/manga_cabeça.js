function toggleMenu() {
    var barra = document.querySelector('.barra');
    if (barra) {
        barra.classList.toggle('open');
        console.log("Menu atualizado:", barra.classList);
    } else {
        console.log("Elemento .barra não encontrado!");
    }
}