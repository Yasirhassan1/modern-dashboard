import { useState } from "react";
export function useTheme(mode = "light") {
    const [_, setTheme] = useState(localStorage.getItem("theme") || mode);

    function onThemeChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const tempTheme = e.target.value;
        const root = document.documentElement;
        const prevTheme = localStorage.getItem("theme");

        if (prevTheme) {
            root.classList.remove(prevTheme)
        }

        root.classList.add(tempTheme)
        localStorage.setItem("theme", tempTheme)
        setTheme(tempTheme)
    }

    return [onThemeChange]

}
