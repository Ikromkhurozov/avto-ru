import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import {
    LanguageWrapper,
    SelectedLang,
    LanguageList,
} from "@/Components/Header/HeaderStyles";

import { useGlobal } from "@/utils/context/global";
import { locales } from "@/utils/constants";
import { handleDropDownClose } from "@/utils/index";

import RussiaFlag from "@/public/russia-flag.png";
import USAFlag from "@/public/usa-flag.png";

interface LanguageSwitcherProps {
    toggleLang: boolean;
    setToggleLang: (toggle: boolean) => void;
}

export default function LanguageSwitcher({
     setToggleLang,
     toggleLang,
 }: LanguageSwitcherProps) {
    const langRef = useRef(null);
    const { currentLang, setLanguage } = useGlobal();

    useEffect(() => {
        handleDropDownClose(langRef, setToggleLang);
    }, [setToggleLang]);

    const onSelectLanguage = (language: string) => {
        setLanguage(language);
        setToggleLang(false);
    };

    const renderCurrentLang = () => {
        if (currentLang === locales.enLocale) {
            return (
                <>
                    <Image
                        src={USAFlag}
                        alt={locales.enLocale}
                        title={locales.enLocale}
                    />
                    <div>En</div>
                </>
            );
        }

        return (
            <>
                <Image
                    src={RussiaFlag}
                    alt={locales.ruLocale}
                    title={locales.ruLocale}
                />
                <div>Ру</div>
            </>
        );
    };

    const renderLanguageList = () => (
        <>
            <li onClick={() => onSelectLanguage(locales.ruLocale)}>
                <Link href="ru" as="/ru" locale={locales.ruLocale}>
                    <Image
                        src={RussiaFlag}
                        alt={locales.ruLocale}
                        title={locales.ruLocale}
                    />
                    <span>Ру</span>
                </Link>
            </li>
            <li onClick={() => onSelectLanguage(locales.enLocale)}>
                <Link href="/" as="/en" locale={locales.enLocale}>
                    <Image
                        src={USAFlag}
                        alt={locales.enLocale}
                        title={locales.enLocale}
                    />
                    <span>En</span>
                </Link>
            </li>
        </>
    );

    return (
        <LanguageWrapper>
            <SelectedLang onClick={() => setToggleLang(true)}>
                {renderCurrentLang()}
            </SelectedLang>

            {toggleLang && (
                <LanguageList ref={langRef}>{renderLanguageList()}</LanguageList>
            )}
        </LanguageWrapper>
    );
}
