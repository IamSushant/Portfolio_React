import { useState } from "react";
import NavBar from "./components/NavBar"
import LandingPage from "./pages/Landing/LandingPage"


const App = () => {
  const [dark, setDark] = useState(false);
  const handleDarkMode = (payload) => {
    setDark(payload)
  }

  return (
    <>
      <NavBar dark={dark} handleDarkMode={handleDarkMode} />
      <LandingPage darkMode={dark} />
    </>
  )
}

export default App