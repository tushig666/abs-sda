import "./Project.css";

const projectData = [
  {
    title: "Residential Building",
    description: "A modern residential building with state-of-the-art amenities.",
    image: "https://via.placeholder.com/300?text=Residential+Building",
  },
  {
    title: "Commercial Complex",
    description: "A commercial complex designed for business and retail spaces.",
    image: "https://via.placeholder.com/300?text=Commercial+Complex",
  },
  {
    title: "Infrastructure Project",
    description: "An infrastructure project that enhances urban connectivity.",
    image: "https://via.placeholder.com/300?text=Infrastructure+Project",
  },
];
const Project = () => {
  return (
    <section id="project" className="project">
      <h2 className="project-title">Our Projects</h2>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <div className="project_item" key={index}>
            <img src={project.image} alt={project.title} className="project_image" />
            <h3 className="project_item_title">{project.title}</h3>
            <p className="project_item_description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Project;