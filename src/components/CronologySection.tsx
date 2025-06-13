import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FaHeart, FaHandshake, FaRing, FaStar } from "react-icons/fa";

const timelineElements = [
  {
    id: 1,
    title: "Cununia Religioasă",
    date: "Ora 15:30",
    text: "Jurăminte, binecuvântare și unire sufletească.",
    icon: <FaRing />,
  },
  {
    id: 2,
    title: "Primirea invitaților",
    date: "Ora 17:00",
    text: "Pășim împreună într-o seară plină de bucurie și iubire.",
    icon: <FaHandshake />,
  },
  {
    id: 3,
    title: "Primul dans",
    date: "Ora 18:00",
    text: "Primii pași în ritmul iubirii noastre. O clipă doar a noastră, în fața lumii întregi.",
    icon: <FaHeart />,
  },
  {
    id: 4,
    title: "Tortul și surprizele",
    date: "Ora 22:00",
    text: "Un moment dulce, luminat de zâmbete și scântei. Gustăm fericirea și descoperim mici bucurii pregătite cu drag pentru voi.",
    icon: <FaStar />,
  },
];

const CronologySection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading text-center text-primary mb-12">
          Cronologie
        </h2>
        <VerticalTimeline lineColor="rgb(240, 236, 225)">
          {timelineElements.map((element) => (
            <VerticalTimelineElement
              key={element.id}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#fff", color: "#333" }}
              contentArrowStyle={{ borderRight: "7px solid  #fff" }}
              date={element.date}
              iconStyle={{ background: "rgb(240, 236, 225)", color: "#fff" }}
              icon={element.icon}
            >
              <h3 className="vertical-timeline-element-title font-heading text-xl">
                {element.title}
              </h3>
              <p className="font-body">{element.text}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default CronologySection;
