import type { AppProps } from "next/app";
import { useMemo, useState } from "react";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import NextNProgress from "nextjs-progressbar";

import { getDictionary } from "@/utils/index";
import { GlobalContext } from "@/utils/context/global";

import { GlobalStyles } from "@/styles/globalStyles";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { locale, defaultLocale } = router;
  const [currentLang, setCurrentLang] = useState(locale || "");

    const globalContextValue = useMemo(
      () => ({
        currentLang,
        setLanguage: setCurrentLang,
      }),
      [currentLang]
  );

  const messages = useMemo(() => getDictionary(currentLang), [currentLang]);

  return (
      <GlobalContext.Provider value={globalContextValue}>
        <IntlProvider
            locale={currentLang}
            defaultLocale={defaultLocale}
            messages={messages}
        >
            <GlobalStyles />

            <NextNProgress
                color="linear-gradient(67.56deg, #960000 27.72%, #ff0000 88.7%)"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
            />
            <Component {...pageProps} />

        </IntlProvider>
      </GlobalContext.Provider>
  );
}
