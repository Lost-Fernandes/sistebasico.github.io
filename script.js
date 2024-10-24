document.addEventListener("DOMContentLoaded", function() {
    const news = [
        {
            title: "Evento cultural movimenta João Pessoa",
            description: "A cidade de João Pessoa recebe mais um evento cultural com artistas locais e convidados especiais.",
            url: "#"
        },
        {
            title: "Novos investimentos em infraestrutura são anunciados",
            description: "O governo anunciou novos investimentos para melhorar a infraestrutura da cidade.",
            url: "#"
        },
        {
            title: "João Pessoa se destaca no turismo",
            description: "A capital paraibana é um dos destinos mais procurados por turistas do Brasil e do mundo.",
            url: "#"
        }
    ];

    const newsContainer = document.getElementById("news");

    if (news.length > 0) {
        news.forEach(article => {
            const newsItem = document.createElement("div");
            newsItem.classList.add("news-item");

            const newsTitle = document.createElement("h3");
            newsTitle.textContent = article.title;

            const newsDescription = document.createElement("p");
            newsDescription.textContent = article.description;

            const newsLink = document.createElement("a");
            newsLink.textContent = "Leia mais";
            newsLink.href = article.url;
            newsLink.target = "_blank"; // Abre o link em uma nova aba

            newsItem.appendChild(newsTitle);
            newsItem.appendChild(newsDescription);
            newsItem.appendChild(newsLink);

            newsContainer.appendChild(newsItem);
        });
    } else {
        const noNews = document.createElement("p");
        noNews.textContent = "Nenhuma notícia disponível no momento.";
        newsContainer.appendChild(noNews);
    }
});
