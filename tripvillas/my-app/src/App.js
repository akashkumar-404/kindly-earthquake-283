// <<<<<<< day1_fw18_0504
import Footer from "./Homepage_tripVillas/Components/Footer/Footer";
import Navbar from "./Homepage_tripVillas/Components/Navbar/Navbar";
import HomePage from "./Homepage_tripVillas/HomePage";
// =======
import Managed from "./Tripvillas_Managed/Pages/Managed";
// >>>>>>> main

function App() {
  return (
    <div className="App">
// <<<<<<< day1_fw18_0504
      <Navbar />
      <HomePage />
      <Footer />
// =======
      <Managed/>
// >>>>>>> main
    </div>
  );
}

export default App;
