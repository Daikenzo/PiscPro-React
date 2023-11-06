import  "./css/Articles.css"

//Components Articles
const   Articles = () =>{

    const articlesResponseFakeFromApi = [
        {
          id: 1,
          title: "Article 1",
          content: "Contenu article 1 : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nihil nisi sed facere dicta voluptatum aut sunt, saepe quod, repellat nesciunt magni eos voluptatem, deserunt voluptas. Magni architecto voluptatum iusto." ,
          image: "https://picsum.photos/200/300",
        },
        {
          id: 2,
          title: "Article 2",
          content: "Contenu article 2: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nihil nisi sed facere dicta voluptatum aut sunt, saepe quod, repellat nesciunt magni eos voluptatem, deserunt voluptas. Magni architecto voluptatum iusto.",
          image: "https://picsum.photos/200/300",
        },
        {
          id: 3,
          title: "Article 3",
          content: "Contenu article 3: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione nihil nisi sed facere dicta voluptatum aut sunt, saepe quod, repellat nesciunt magni eos voluptatem, deserunt voluptas. Magni architecto voluptatum iusto.",
          image: "https://picsum.photos/200/300",
        },
      ];

    return(
        <div className="article-containers">
            {/* 
        on fait une boucle sur la variable articlesResponseFakeFromApi 
        qui contient les articles (faussement) récupérés depuis l'API
        La fonction .map permet de faire une boucle sur un tableau (comme la 
        fonction foreach)
        La map prend en parametre une fonction qui sera executée pour chaque 
        élément du tableau
        Ici, pour chaque élément du tableau, on retourne du JSX, permettant
        de créer une balise article avec les données de l'article
      */}
        {articlesResponseFakeFromApi.map((article) => (
            <article class="article card">
                <h3 class="card card-title">{article.title}</h3>
                <p class="card-contents">{article.content}</p>
                <img class="card-img" src={article.image} alt={article.title} 
                /> 
            </article>
         ))}
        </div>
    );
};

// default: récupére par défaut cette fonction
export default Articles;