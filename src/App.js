import React, { useState } from "react";

import "./App.css";
import About from "./components/About/About.js";
import Projects from "./components/Projects/Projects.js";
import Navigation from "./components/Navigation/Navigation.js";
import ContactForm from "./components/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  const [categories] = useState([
    { name: "projects" },
    { name: "contact" },
    { name: "about me" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div className="container">
      <Navigation
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      />
      <main>
        {currentCategory.name === "about me" && <About />}
        {currentCategory.name === "contact" && <ContactForm />}
        {currentCategory.name === "projects" && <Projects />}
        
      </main>
      <Footer />
    </div>
  );
}

export default App;
