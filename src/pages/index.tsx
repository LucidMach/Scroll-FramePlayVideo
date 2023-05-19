import ScrollVideo from "@/components/scrollVideo";
import Head from "next/head";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>envious | home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ScrollVideo dir="/desktop" max={25} />
    </>
  );
};

export default Home;
