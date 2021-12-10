import { createContext, useContext, useEffect, useState } from "react";
import useMedia from "./hooks/useMedia";
const GlobalContext = createContext();
export function GlobalProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(undefined);

  const [active, setActive] = useState(false);
  const [btnMobile, setBtnMobile] = useState(false);
  const mobile = useMedia("(max-width:61.875rem)");
  const handleToggle = (event) => {
    setDarkTheme(event.target.checked);
  };
  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        // Set value of  darkmode to light
        document.documentElement.setAttribute("data-theme", "light");
        window.localStorage.setItem("theme", "light");
      } else {
        // Set value of  darkmode to dark
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "dark");
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    // Set initial color to light
    setDarkTheme(initialColorValue === "light");
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        active,
        setActive,
        handleToggle,
        setDarkTheme,
        darkTheme,
        btnMobile,
        setBtnMobile,
        mobile,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export function useAppContext() {
  return useContext(GlobalContext);
}
