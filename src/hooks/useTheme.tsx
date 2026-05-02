import { useState } from "react";
import { type SelectChangeEvent } from '@mui/material/Select';
export function useTheme(mode = "light") {
    const [_, setTheme] = useState(localStorage.getItem("theme") || mode);

    function onThemeChange(event: SelectChangeEvent) {
        const tempTheme = event.target.value;
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
