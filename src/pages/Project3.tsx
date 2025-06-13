import Header from "../components/1.Header/Header";
import Footer from "../components/7.Footer/Footer";
import Contact from "../components/6.Contact/Contact";

const Project3 = () => {
  return (
    <>
      <Header />
      <div className="project3-page">
        <main className="flex-grow">
          <h1>Project 3</h1>
          <img
            src="https://via.placeholder.com/150"
            alt="Project 3 Thumbnail"
          />
          <p>This is the content of Project 3.</p>
          <div className="project1-navigation">
            <a href="/project2">Previous Project</a>
          </div>
        </main>
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Project3;