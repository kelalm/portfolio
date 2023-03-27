import Head from "next/head";
import Image from "next/image";
import { Space_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Space_Mono({ subsets: ["latin"], weight: ["400"] });

import Header from "../components/Header";
import MainSection from "@/components/MainSection";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <>
      <div className={inter.className}>
        <Header />
        <MainSection />
        <Socials />
      </div>
    </>
  );
}
