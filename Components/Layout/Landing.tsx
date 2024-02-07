import React from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/Components/Header/Header"));
const Footer = dynamic(() => import("@/Components/Footer/Footer"));

import {LayoutWrapper} from "@/Components/Layout/LayoutStyles";


interface LandingProps {
    children: React.ReactNode;
}

export default function Landing({ children }: LandingProps) {
    return (
        <div>
            <Header />
            <LayoutWrapper>{children}</LayoutWrapper>
            <Footer />
        </div>
    );
}
