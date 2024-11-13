import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Jobs from "./components/Jobs";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero
        title="Become a React Dev"
        subtitle="Find the React job that fits your skills and needs"
      ></Hero>
      <Cards></Cards>
      <Jobs></Jobs>
    </div>
  );
};

export default App;