document.addEventListener("DOMContentLoaded", function() {
    const apiKey = '3208963754a5463dadf965a872f083e9'; // Substitua pela sua chave de API
    const url = `https://newsapi.org/v2/everything?q=João Pessoa&language=pt&apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById("news");

            if (data.articles && data.articles.length > 0) {
                newsContainer.innerHTML = ""; // Limpar conteúdo anterior

                data.articles.forEach(article => {
                    // Criar um item de notícia
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
                    
                    // Adicionar os elementos no contêiner de notícias
                    newsItem.appendChild(newsTitle);
                    newsItem.appendChild(newsDescription);
                    newsItem.appendChild(newsLink);

                    newsContainer.appendChild(newsItem);
                });
            } else {
                // Se não houver notícias
                const noNews = document.createElement("p");
                noNews.textContent = "Nenhuma notícia encontrada sobre João Pessoa.";
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
