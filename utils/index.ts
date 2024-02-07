import React from "react";
import { locales } from "@/utils/constants";
import * as dictionary from "@/locales/index";

export const getDictionary = (lang: string) => {
    if (lang === locales.ruLocale) return dictionary.ru;

    if (lang === locales.enLocale) return dictionary.en;

    return dictionary.ru;
};

export function handleDropDownClose(
    ref: React.RefObject<HTMLElement>,
    setToggle: (toggle: boolean) => void
) {
    const handleClick = (e: any) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setToggle(false);
        }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
        document.removeEventListener("mousedown", handleClick);
    };
}
