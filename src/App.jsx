import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ImageGallery from "./pages/Gallery/ImageGallery";
import Facilities from "./pages/Facilities/Facilities";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ImageGallery />
      <Facilities />
    </div>
  );
}

export default App;
