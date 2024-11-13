import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import ApplicationForm from "./Form";
// import ContactUs from "./Contact";
// import AboutUs from "./About";


function App() {
  const [count, setCount] = useState(0);

return(
  <div>
  <ApplicationForm/>
  </div>
)
}

export default App;
