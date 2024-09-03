const newsContainer = document.getElementById('news-container');

// Exemplo de requisição à API de notícias
async function fetchNews() {
    try {
        const response = await fetch('https://api.exemplo.com/instagram-news');
        const data = await response.json();

        data.articles.forEach(article => {
            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item');

            newsItem.innerHTML = `
                <img src="${article.imageUrl}" alt="${article.title}">
                <h2>${article.title}</h2>
                <p>${article.description}</p>
            `;

            newsContainer.appendChild(newsItem);
        });
    } catch (error) {
        console.error('Erro ao buscar notícias:', error);
    }
}

fetchNews();
