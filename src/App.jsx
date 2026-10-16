import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";

import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { use, useEffect, useState } from "react";

// TEMPLATE: only the structure (empty tags + CSS classes).
// TODO (class): fetch the data, then pass it to each component using props.
function App() {
  let[data,setData]=useState(null);
  let[loading,setLoading] = useState(true);
  let[error,Seterror]=useState(false)


  useEffect(()=>{
    fetch('/portfolio.json')
    .then((response)=>{
      if(!response.ok){
        throw new error("Request failed");
      }
      return response.json();

    })
    .then((result)=>{
      setData(result);
      setLoading(false);

    })
    .catch(()=>{
      Seterror(true);
      setLoading(false);

    })

  })
if (loading) return <p className="status">Loading portfolio..</p>
if (error) return <p className="status"> unable to load portfolip...</p>



  return (
    <>
      <Navbar />
      <main>
        <Hero data={data}/>
        <About data={data}/>
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <Education education={data.education} />
        
        <Contact email={data.email} socials={data.socials} />
      </main>
      <Footer name={data.name} socials={data.socials} />
    </>
  );
}

export default App;
