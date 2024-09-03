document.addEventListener("DOMContentLoaded", function() {
    const url = '/news'; // Faz a requisição ao servidor Node.js em vez da API diretamente

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById("news");

            if (data.articles && data.articles.length > 0) {
                newsContainer.innerHTML = ""; // Limpar conteúdo anterior

                data.articles.forEach(article => {
                    if (article.title.includes("Paraíba") || (article.description && article.description.includes("Paraíba"))) {
                        const newsItem = document.createElement("div");
                        newsItem.classList.add("news-item");

                        const newsTitle = document.createElement("h3");
                        newsTitle.textContent = article.title;

                        const newsDescription = document.createElement("p");
                        newsDescription.textContent = article.description || "Descrição não disponível.";

                        const newsLink = document.createElement("a");
                        newsLink.textContent = "Leia mais";
                        newsLink.href = article.url;
                        newsLink.target = "_blank"; // Abre o link em uma nova aba
                        
                        newsItem.appendChild(newsTitle);
                        newsItem.appendChild(newsDescription);
                        newsItem.appendChild(newsLink);

                        newsContainer.appendChild(newsItem);
                    }
                });

                if (newsContainer.innerHTML === "") {
                    const noNews = document.createElement("p");
                    noNews.textContent = "Nenhuma notícia encontrada sobre a campanha política de 2024 na Paraíba.";
                    newsContainer.appendChild(noNews);
                }
            } else {
                const noNews = document.createElement("p");
                noNews.textContent = "Nenhuma notícia encontrada sobre a campanha política de 2024 na Paraíba.";
                newsContainer.appendChild(noNews);
            }
        })
        .catch(error => {
            console.error("Erro ao buscar as notícias:", error);
            const newsContainer = document.getElementById("news");
            const errorMessage = document.createElement("p");
            errorMessage.textContent = "Ocorreu um erro ao carregar as notícias. Tente novamente mais tarde.";
            newsContainer.appendChild(errorMessage);
        });
});
