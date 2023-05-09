import { useState } from "react";

const useHeader = () => {
    const [statusMenu,setStatusMenu] =  useState(false);

    const toggleMenu = () => setStatusMenu(!statusMenu)

    return {
        statusMenu,
        setStatusMenu,
        toggleMenu
    }
}

export default useHeader;