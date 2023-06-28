import  '../css/Experience.css'

const   Experiences = ()    =>{
    const experiencesFromFakeApi = [
        {
            id: 1,
            title: "Développeur front",
            company: "Company 1",
            description: "Développement d'une application web front",
            startDate: "2021-01-01",
            endDate: "2021-02-01",
            isCurrent: false,
        },
        {
            id: 2,
            title: "Développeur back",
            company: "Company 2",
            description: "Développement d'une application web back",
            startDate: "2022-02-01",
            endDate: "2022-03-01",
            isCurrent: false,
        },
        {
            id: 3,
            title: "Développeur fullstack",
            company: "Company 3",
            description: "Développement d'une application web fullstack",
            startDate: "2023-03-01",
            endDate: null,
            isCurrent: true,
        },
    ]; 

    return  (
        <section className="experience-list">
            <h2>Experience :</h2>
            {experiencesFromFakeApi.map((experience) =>{
                
                return(
                    experience.isCurrent ? ( <div class="experience experience-current">
                        <div className="experience-info">
                            <h3 className="experience-title">{experience.title} (<span id="actual-experience">  Experience Actuelle</span>):</h3>
                            <p className="experience-info">{experience.description}</p>
                            <p className="company-name" id={experience.company}> Company: {experience.company}</p>
                            <div className="experience-date">De <span>{experience.startDate}</span> à  
                                {!experience.endDate ? (" aujourd'hui") : 
                                (<span> {experience.endDate}</span>)}
                            </div>
                        </div>

                    </div>) : ( <div class="experience">
                        <div className="experience-info">
                            <h3 className="experience-title">{experience.title}</h3>
                            <p className="experience-info">{experience.description}</p>
                            <p className="company-name" id={experience.company}> Company: {experience.company}</p>
                            <div className="experience-date">De <span>{experience.startDate}</span> à  
                                {!experience.endDate ? (" aujourd'hui") : 
                                (<span> {experience.endDate}</span>)}
                            </div>
                        </div>

                    </div>)
                    

                )
            })}
        </section>
    );
};

export  default Experiences;