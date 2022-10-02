import { useParams } from "react-router-dom";
import Navbar from "./Homepage_tripVillas/Components/Navbar/Navbar";
import MainRoutes from "./Routes/MainRoutes";

function App() {
  let id = useParams();
  console.log(id);
  return (
    <div className="App">
      <MainRoutes />
    </div>
  );
}

export default App;
