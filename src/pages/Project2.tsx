import Header from "../components/1.Header/Header";
import Footer from "../components/7.Footer/Footer";
import Contact from "../components/6.Contact/Contact";

const Project2 = () => {
  return (
    <>
      <Header />
      <div className="project2-page">
        <main className="flex-grow">
          <h1>Project 2</h1>
          <img
            src="https://via.placeholder.com/150"
            alt="Project 2 Thumbnail"
          />
          <p>This is the content of Project 2.</p>
          <div className="project2-navigation">
            <a href="/project3">Next Project</a>
            <a href="/project1">Previous Project</a>
          </div>
        </main>
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Project2;