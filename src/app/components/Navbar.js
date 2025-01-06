"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

export default function Navbar({ open = () => {} }) {
    const [isopen, setisopen] = useState(false);

    const navigate = (path) => {
        const section = document.getElementById(path);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const changeState = () => {
        setisopen(!isopen);
    };

    useEffect(() => {
        open(isopen);
    }, [isopen, open]);

    return (
        <nav className="sticky top-0 z-40 w-full bg-background/40 backdrop-blur-lg backdrop-saturate-150 supports-backdrop-blur:bg-background/90">
            <div className="container mx-auto flex h-16 items-center justify-between">
                <div className="flex ml-10 md:ml-12">
                    <div className="font-semibold text-xl">
                        <a href="#home">Portfolio</a>
                    </div>
                </div>
                <div className="hidden gap-5 mr-10 translate-y-0.5 md:flex md:mr-12 items-center">
                    <div className="opacity-80 hover:opacity-100 text-sm">
                        <button onClick={() => navigate("Portfolio")}>Portfolio</button>
                    </div>
                    <div className="opacity-80 hover:opacity-100 text-sm">
                        <button onClick={() => navigate("Experience")}>Experience</button>
                    </div>
                    <div className="opacity-80 hover:opacity-100 text-sm">
                        <button onClick={() => navigate("Contactus")}>Contact Us</button>
                    </div>
                    <a
                        href="./Abdullah-FullstackDevelopmentIntership.pdf"
                        download="AbdullahFahim_CV.pdf"
                        className="text-sm px-3 py-2 bg-[#F42A0F] rounded-lg text-white items-center flex gap-2 hover:brightness-90"
                    >
                        Download CV{" "}
                        <FontAwesomeIcon icon={["fas", "circle-down"]} className="text-lg mr-1" />
                    </a>
                </div>
                <div className="flex w-full justify-end mr-8 md:hidden">
                    <FontAwesomeIcon
                        onClick={changeState}
                        icon={["fas", isopen ? "xmark" : "bars-staggered"]}
                        className="text-2xl text-black hover:opacity-85 cursor-pointer my-2"
                    />
                </div>
            </div>
            <hr className="m-0 h-px w-full border-0 bg-gradient-to-r from-neutral-200/0 via-slate-700 to-neutral-200/0" />
        </nav>
    );
}
