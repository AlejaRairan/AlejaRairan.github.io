import Header from "./Header.jsx";
import Projects from "./Projects.jsx";
import Frameworks from "./Frameworks.jsx";
import AboutMe from "./AboutMe.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import ContactFab from "./ContactFab.jsx";

function App() {
  return (
    <>
      <div id="top"></div>
      <div className="page">
        <Header />
        <ContactFab />
        <main>
          <Projects />
          <Frameworks />
          <AboutMe />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
