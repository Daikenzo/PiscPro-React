import  '../css/App.css'
import  '../css/Article.css'
//Meal List Components
const   MenuHero = () =>{
    const mealsListResponseFromFakeApi = [
      {
        title: "JCVD",
        image:
        "https://www.gala.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fprismamedia_people.2F2017.2F06.2F30.2F7c27c579-10a2-464c-ab4d-4da173184c68.2Ejpeg/2216x1536/quality/80/jean-claude-van-damme.jpeg",
        
        },
        {
        title: "Chuck Norris",
        image:
        "https://static.wikia.nocookie.net/charabattles/images/e/eb/Chuck_norris.jpg/revision/latest?cb=20170412123612&path-prefix=fr",
        },
        {
        title: "Sylverster Stallone",
        image:
        "https://media.gettyimages.com/photos/sylvester-stallone-in-a-scene-from-the-film-rambo-iii-1988-picture-id168583123?s=612x612",
        },
      ];

    return  (
        <div class="container list-content" id="MealList-contents">
           {/*Boucle pour recup donnée tableau */}
            {mealsListResponseFromFakeApi.map((article) =>  {
              // si article publé, retourner du jsx
              return (
                article.isPublished && (
                  <article className="article card meallist-item" id={article.id} >
                    <h3 className="card-title">{article.title}</h3>
                    <img className="card-img" src={article.image} alt={article.title} />
                    <p className="card-contents">{article.description}</p>
                </article>
                )
            );
          })}
        </div>
    )
};

export  default MenuHero;