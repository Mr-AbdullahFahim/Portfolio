"use client"
import { useState } from "react";
import ButtonCard from "./components/ButtonCard";
import Contactus from "./components/Contactus";
import Navbar from "./components/Navbar";
import Sectiontitle from "./components/Sectiontitle";
import Sidenav from "./components/Sidenav";
import Image from "next/image";

export default function Home() {
  const navigate = (path) => {
      const section = document.getElementById(path);
      if(path){
          section.scrollIntoView({behavior:"smooth"});
      }
  }
  const [isopen,setisopen]=useState(false);
  return (
    <div className="grid">
      <Navbar open={setisopen}/>
      <Sidenav open={isopen}/>
      <section id="heroSection" className="grid lg:grid-cols-5 w-full h-lvh overflow-hidden -mt-16 pt-16">
        <div className="grid lg:justify-self-end justify-self-center items-center lg:col-span-3 ">
          <div className="ml-4">
            <div className="relative">
              <p className="uppercase col-span-1 grid bottom-0 absolute">-Hello!</p>
              <div className="grid items-end justify-self-center overflow-hidden md:h-96 h-64 translate-x-10 lg:hidden col-span-3">
                <img src="./Abdullah.png" alt="profile picture" className="md:w-[420px] w-[300px]"/>
              </div>
            </div>
            <h1 className="md:text-5xl text-3xl font-extrabold uppercase w-fit">I'm <span className="text-[#F42A0F]">Abdullah</span> Fahim</h1>
            <p className="md:text-xl text-sm font-extralight text-gray-700 mt-2 mb-3 w-fit">
              BSc in Computer Science[UG]  |  Graphic Designer  |<br/>Full-stack Developer  |  PV Team Lead @ IEEE SB UoJ
            </p>
            <button onClick={()=>navigate("Contactus")} className="bg-[#F42A0F] py-2 px-4 rounded-xl text-sm text-white flex items-center uppercase">Contact Us!</button>
          </div>
        </div>
        <div className="hidden lg:col-span-2 lg:grid items-end justify-self-start">
          <img src="Abdullah.png" alt="profile picture" className="w-[420px]"/>
        </div>
      </section>
      <section id="Portfolio" className="lg:h-screen mx-auto pt-20 uppercase">
        <Sectiontitle coloredtitle="Portfolio" title="of work"/>
        <div className="grid lg:grid-cols-2 mx-auto pt-20 lg:gap-20 gap-10">
          <ButtonCard url="./web button.png" alt="Web portfolio Button Icon" title="Web Development Projects" path="webportfolio"/>
          <ButtonCard url="./design button.png" alt="Design portfolio Button Icon" title="Graphic Design Works" path="designportfolio"/>
        </div>
      </section>
      <section id="Experience" className="h-screen mx-auto gap-10 pt-20 w-full mb-40">
        <Sectiontitle coloredtitle="Experience" title="in Related Fields"/>
        <div className="md:grid grid-cols-[repeat(15,minmax(0,1fr))] w-full pt-16 hidden">
          <div className="col-span-7 place-items-end">
            <div className="text-right">
              <h3 className="font-semibold text-lg -mb-1">Media Coordinator</h3>
              <h4 className="font-medium text-base -mb-1">IEEE Sri Lanka Section SIGHT - NENASA</h4>
              <p className="font-thin text-gray-600 text-">Apr 2024 - Present</p>
            </div>
            <div className="h-60"></div>
            <div className="text-right">
              <h3 className="font-semibold text-lg -mb-1">Public Visibility Team Member</h3>
              <h4 className="font-medium text-base -mb-1">IEEE Student Branch University of Jaffna</h4>
              <p className="font-thin text-gray-600 text-">Jan 2023 - Feb 2024</p>
            </div>
          </div>
          <div className="grid col-span-1 place-items-center">
            <div className="h-3 w-3 rounded-full bg-slate-400 relative translate-y-3"></div>
            <div className="h-3 w-3 rounded-full bg-slate-400 translate-y-40 relative"></div>
            <div className="h-[475px] w-[2px] bg-gray-500"></div>
            <div className="h-3 w-3 rounded-full bg-slate-400 -translate-y-40 relative"></div>
            <div className="h-3 w-3 rounded-full bg-slate-400 relative -translate-y-3"></div>
          </div>
          <div className="col-span-7 place-items-start">
            <div className="h-36"></div>
            <div className="text-left">
              <h3 className="font-semibold text-lg -mb-1">Public Visibility Team Lead</h3>
              <h4 className="font-medium text-base -mb-1">IEEE Student Branch University of Jaffna</h4>
              <p className="font-thin text-gray-600 text-">Feb 2024 - Present</p>
            </div>
            <div className="h-60"></div>
            <div className="text-left">
              <h3 className="font-semibold text-lg -mb-1">Graphic Designer</h3>
              <h4 className="font-medium text-base -mb-1">Gavel Club University of Jaffna</h4>
              <p className="font-thin text-gray-600 text-">Jan 2023 - Apr 2024</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(6,minmax(0,1fr))] w-full pt-16 md:hidden -ml-2">
          <div className="grid col-span-1 place-items-center">
            <div className="h-3 w-3 rounded-full bg-slate-400 relative translate-y-3"></div>
            <div className="h-3 w-3 rounded-full bg-slate-400 translate-y-40 relative"></div>
            <div className="h-[475px] w-[2px] bg-gray-500"></div>
            <div className="h-3 w-3 rounded-full bg-slate-400 -translate-y-40 relative"></div>
            <div className="h-3 w-3 rounded-full bg-slate-400 relative -translate-y-3"></div>
          </div>
          <div className="col-span-5">
            <div className="text-left mb-20">
              <h3 className="font-semibold text-lg -mb-1">Media Coordinator</h3>
              <h4 className="font-medium text-sm -mb-1">IEEE Sri Lanka Section SIGHT - NENASA</h4>
              <p className="font-thin text-gray-600 text-">Apr 2024 - Present</p>
            </div>
            <div className="text-left mb-24">
              <h3 className="font-semibold text-lg -mb-1">Public Visibility Team Lead</h3>
              <h4 className="font-medium text-sm -mb-1">IEEE Student Branch University of Jaffna</h4>
              <p className="font-thin text-gray-600 text-">Feb 2024 - Present</p>
            </div>
            <div className="text-left mb-20">
              <h3 className="font-semibold text-lg -mb-1">Public Visibility Team Member</h3>
              <h4 className="font-medium text-sm -mb-1">IEEE Student Branch University of Jaffna</h4>
              <p className="font-thin text-gray-600 text-">Jan 2023 - Feb 2024</p>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-lg -mb-1">Graphic Designer</h3>
              <h4 className="font-medium text-sm -mb-1">Gavel Club University of Jaffna</h4>
              <p className="font-thin text-gray-600 text-">Jan 2023 - Apr 2024</p>
            </div>
          </div>
        </div>
      </section>
      <section id="Contactus" className="pt-20">
        <Sectiontitle coloredtitle="Contact" title="Us" />
        <Contactus/>
      </section>
      <hr className="m-0 h-px w-full border-0 bg-gradient-to-r from-neutral-200/0 via-slate-700 to-neutral-200/0" />
      <footer className="flex justify-center items-center py-4">
        <p className="text-gray-800 ">&copy; 2025 Abdullah Fahim. All rights reserved.</p>
      </footer>
    </div>
  );
}
