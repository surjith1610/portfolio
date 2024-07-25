"use client";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { RecentProjects } from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { navItems } from "@/data";
import { Experience } from "@/components/Experience";
import App from "next/app";
import { Approach } from "@/components/Approach";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
    <div className="max-w-7xl w-full">
    <FloatingNav navItems={navItems} />
    <Hero/>
    <Grid/>
    <Experience/>
    <RecentProjects/>
    {/* <Approach/> */}
    <Footer/>
    </div>
   </main>
  );
}
