import "./Project.css";

const Project = () => {
  return (
    <section className="project">
      <div className="project_content">
        <h2 className="project_title">Our Projects</h2>
        <div className="project_list">
          <div className="project_item">
            <img src="project1.jpg" alt="Project 1" className="project_image" />
            <h3 className="project_name">Project 1</h3>
            <p className="project_description">
              A brief description of Project 1, highlighting its key features and achievements.
            </p>
        </div>
            <div className="project_item">
                <img src="project2.jpg" alt="Project 2" className="project_image" />
                <h3 className="project_name">Project 2</h3>
                <p className="project_description">
                A brief description of Project 2, showcasing its innovative design and execution.
                </p>
            </div>
            <div className="project_item">
                <img src="project3.jpg" alt="Project 3" className="project_image" />
                <h3 className="project_name">Project 3</h3>
                <p className="project_description">
                A brief description of Project 3, emphasizing its impact on the community.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
export default Project;