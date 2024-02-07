import { createContext, useContext } from "react";

import { locales } from "@/utils/constants";
import { GlobalContextType } from "@/utils/declarations/context";

const globalContextDefault = {
    currentLang: locales.ruLocale,
    setLanguage: () => null,
    globalWarning: {
        isOpen: false,
        text: "",
    },
    setGlobalWarning: () => null,
};

export const GlobalContext =
    createContext<GlobalContextType>(globalContextDefault);

export function useGlobal() {
    return useContext(GlobalContext);
}
