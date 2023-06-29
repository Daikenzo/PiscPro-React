import React from "react";
import  '../css/Experience.css'

const Jobs = () => {
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

  return (
    <section className="experience-list">
      <h2>Mes expériences</h2>
      <ul className="experience-list">
        {experiencesFromFakeApi.map((experience) => {
          return (
            <li key={experience.id} className={experience.isCurrent ? "experience-list experience experience-current" : "experience"}>
              <h3 className="experience-title">{experience.title}</h3>
              <h4 className="company-name"><strong className='style-italic'>{experience.company}</strong></h4>
              <p className="experience-info">{experience.description}</p>
              <p className="experience-date">
                {experience.startDate} - {experience.endDate}
              </p>
              <p><strong>{experience.isCurrent && "JOB ACTUEL"}</strong>    </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Jobs;