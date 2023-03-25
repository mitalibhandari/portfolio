import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { experiences } from "../constants/index";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: experience.background, color: "#fff" }}
      contentArrowStyle={{ borderRight: `10px solid ${experience.background}` }}
      borderTop={{ color: "#fff" }}
      date={experience.date}
      dateClassName="date"
      icon={
        <div>
          <img
            src={experience.icon}
            alt={experience.companyName}
            height="100%"
            width="100%"
          />
        </div>
      }
    >
      <div>
        <h3>{experience.title}</h3>
        <h5>
          {experience.companyName}, {experience.location}
        </h5>
        <hr />
      </div>
      <ul>
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`}>{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

function Work() {
  return (
    <section className="work" id="work">
      <h2>Work Experience</h2>

      <div>
        <VerticalTimeline className="timeline">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Work;
