import React from 'react';
import dynamic from "next/dynamic";
import Head from "next/head";
import {FormattedMessage, useIntl} from "react-intl";

const Landing = dynamic(() => import("@/Components/Layout/Landing"))

import {CommonText} from "@/styles/Text";

export default function Slug() {
    const intl = useIntl()

    return(
        <>
            <Head>
                <title>{intl.formatMessage({ id: "main.title" })}</title>
            </Head>
            <Landing>
                <CommonText margin="5% 10%" color="#000" fontWeight="400" fontSize="30px"><FormattedMessage id="page.is.in.development"/></CommonText>
            </Landing>
        </>
    );
}