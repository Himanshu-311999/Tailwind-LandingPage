import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    if(theme=== 'light'){
      document.documentElement.classList.add("dark")
    } 
    else{
      document.documentElement.classList.remove("dark")
    }
  }, [theme])
  

  return (
    <div className="dark:bg-black dark:text-white min-h-screen px-6 py-3 bg-amber-50 flex flex-col gap-16 md:px-10 md:py-7 md:justify-between lg:px-16 lg:justify-between">
      <Header setTheme={setTheme} theme={theme} />
      <Body />
      <Footer />
    </div>
  )
}

export default App
