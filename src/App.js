import React, { useEffect, useState } from "react";
import Footer from "./Componenets/Footer";
import { Header } from "./Componenets/Header";
import MainApp from "./MainApp";
import "primeicons/primeicons.css";
export const ThemeContext = React.createContext();

function App() {
    const [theme, setTheme] = useState(false);
    useEffect(() => {
        if (localStorage.getItem("theme")) {
            setTheme(localStorage.getItem("theme") === "true" ? true : false);
        } else {
            localStorage.setItem("theme", "false");
        }
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className={`${theme ? "dark" : ""} bg-white dark:bg-gray-900`}>
                <Header />
                <MainApp theme={theme} />
                <Footer />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
