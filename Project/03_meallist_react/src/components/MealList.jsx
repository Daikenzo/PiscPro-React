import  '../css/App.css'
import  '../css/Article.css'
//Meal List Components
const   MealList = () =>{
    const mealsListResponseFromFakeApi = [
        {
          id: 1,
          title: "Poulet au légumes",
          image: "https://assets.afcdn.com/recipe/20170609/68259_w640h486c1cx2880cy1920.webp",
          description: "Un bon poulet avec des légumes",
        },
        {
          id: 2,
          title: "Boeuf bourguignon",
          image: "https://img-3.journaldesfemmes.fr/n7hKEGA7OFGZ8KfeTewfNnrt6H8=/750x500/smart/d6db2baa728b47f8adbf30b99a957dc0/recipe-jdf/10002051.jpg",
          description: "Un bon boeuf bourguignon",
        },
        {
          id: 3,
          title: "Poisson aux légumes",
          image: "https://img-3.journaldesfemmes.fr/Zil0WjNJ6u4UOPpyv0GMGcJo53U=/750x500/smart/8efe96373ea84b73a9a04ca81a353bb5/recipe-jdf/328988.jpg",
          description: "Un bon poisson avec des légumes",
        },
      ];

    return  (
        <div class="container list-content" id="MealList-contents">
            {mealsListResponseFromFakeApi.map((article) => (
            <article class="article card meallist-item" id={article.id}>
                <h3 class="card-title">{article.title}</h3>
                <img class="card-img" src={article.image} alt={article.title} />
                <p class="card-contents">{article.description}</p>
            </article>
         ))}
        </div>
    )
};

export  default MealList;