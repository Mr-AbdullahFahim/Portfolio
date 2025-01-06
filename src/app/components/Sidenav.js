import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

export default function Sidenav({ open }) {
    const sidenavRef = useRef(null);

    const navigate = (path) => {
        const section = document.getElementById(path);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        } else {
            console.error(`Element with id "${path}" not found`);
        }
    };

    useEffect(() => {
        const sidenav = sidenavRef.current;
        if (open) {
            sidenav?.classList.remove('hidden');
        } else {
            setTimeout(() => {
                sidenav?.classList.add('hidden');
            }, 600); // Match animation duration
        }
    }, [open]);

    return (
        <div
            ref={sidenavRef}
            className={`${open ? 'animate-slideIn' : 'animate-slideOut'} hidden z-50 fixed w-2/4 right-0 h-full bg-background/40 backdrop-blur-lg backdrop-saturate-150 supports-backdrop-blur:bg-background/90 mt-16`}
            id="sidenav"
        >
            <div className="text-white grid text-center mt-5 gap-2 w-full px-2">
                <button className="bg-opacity-20 opacity-90 hover:bg-opacity-15 cursor-pointer rounded-md hover:opacity-100 text-sm py-2 bg-black font-medium" onClick={() => navigate("Portfolio")}>
                    <div>Portfolio</div>
                </button>
                <button className="bg-opacity-20 opacity-90 hover:bg-opacity-15 cursor-pointer rounded-md hover:opacity-100 text-sm py-2 bg-black font-medium" onClick={() => navigate("Experience")}>
                    <div>Experience</div>
                </button>
                <button className="bg-opacity-20 opacity-90 hover:bg-opacity-15 cursor-pointer rounded-md hover:opacity-100 text-sm py-2 bg-black font-medium" onClick={() => navigate("Contactus")}>
                    <div>Contact Us</div>
                </button>
                <a
                    href="Abdullah-FullstackDevelopmentIntership.pdf"
                    download="AbdullahFahim_CV.pdf"
                    className="text-sm px-3 py-2 bg-[#F42A0F] rounded-lg text-white hover:brightness-90"
                >
                    Download CV
                    <FontAwesomeIcon icon={["fas", "circle-down"]} className="text-lg ml-2" />
                </a>
            </div>
        </div>
    );
}
