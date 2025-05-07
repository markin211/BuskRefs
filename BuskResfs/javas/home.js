const container = document.getElementById('gallery'); // Contêiner das imagens

// Função para buscar imagens de outro arquivo HTML
async function loadImagesFromHTML(filePath) {
    try {
        const response = await fetch(filePath);
        const text = await response.text();

        // Cria um elemento temporário para manipular o HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = text;

        // Seleciona todas as imagens do arquivo HTML
        const images = tempDiv.querySelectorAll('img');

        images.forEach(img => {
            const card = document.createElement('div');
            card.className = 'card';

            const newImg = document.createElement('img');
            newImg.src = img.src; // URL da imagem
            newImg.alt = img.alt; // Texto alternativo
            newImg.style.width = '100%';

            card.appendChild(newImg);
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Erro ao carregar imagens:', error);
    }
}

// Carrega imagens de diferentes arquivos HTML
document.addEventListener('DOMContentLoaded', () => {
    loadImagesFromHTML('/sites/mangá/mangá_cabeça.html');
    loadImagesFromHTML('/sites/mangá/mangá_corpo.html');
    // Adicione mais arquivos HTML aqui
});