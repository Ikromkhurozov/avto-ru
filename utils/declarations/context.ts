export interface GlobalContextType {
    currentLang: string;
    setLanguage: (lang: string) => void;
    globalWarning?: GlobalWarning;
    setGlobalWarning?: (warning: GlobalWarning) => void;
}

export interface GlobalWarning {
    isOpen: boolean;
    text: string;
}
