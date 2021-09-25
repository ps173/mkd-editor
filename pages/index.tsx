import { useState } from "react";
import Head from "next/head";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
const Editor = dynamic(import("../components/editor"), { ssr: false });
import Preview from "../components/preview";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  const [text, setText] = useState<string>("# Hellow!");

  return (
    <>
      <Head>
        <title>Markdown Editor</title>
        <meta name="description" content="A Markdown editor with preview" />
      </Head>
      <Navbar />
      <div className="md">
        <Editor text={text} setText={setText} />
        <Preview text={text} />
      </div>
    </>
  );
};

export default Home;
