import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ImageGallery from "./pages/Gallery/ImageGallery";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ImageGallery />
    </div>
  );
}

export default App;
