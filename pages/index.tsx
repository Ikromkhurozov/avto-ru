import Head from "next/head";
import dynamic from "next/dynamic";
import {useIntl} from "react-intl";
import RecommendCars from "@/Components/Home/RecommendCars";

const Landing = dynamic(() => import("@/Components/Layout/Landing"));

export default function Home() {
    const intl = useIntl();
  return (
      <Landing>
          <Head>
              <title>{intl.formatMessage({ id: "main.title" })}</title>
              <link rel="icon" href="/public/favicon.ico" />
          </Head>
          <RecommendCars/>
      </Landing>
  );
}
