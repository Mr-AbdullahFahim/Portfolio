import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

library.add(fas, far, fab);


import fs from 'fs';
import path from 'path';
import Image from "next/image";

export default function Designportfolio(){
    const imageDir = path.join(process.cwd(), 'public/designs');
    const filenames = fs.readdirSync(imageDir);

    return(
        <div>
            <div className="w-full flex justify-start items-center px-16 py-6 border-b-[1px] border-gray-800">
                <Link href="./.." className="hover:opacity-75 flex justify-start items-center gap-2">
                    <FontAwesomeIcon icon="fa-solid fa-chevron-left" className="w-3" /><span className="font-semibold">Back</span>
                </Link>
            </div>
            <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mx-auto w-4/5 pt-12 pb-20">
                {filenames.map((filename, index) => (
                    <div key={index} className="flex justify-center items-center shadow-md overflow-hidden bg-black rounded-lg">
                        <Image
                            src={`/designs/${filename}`}
                            alt={`Gallery ${index}`}
                            className="w-full h-auto"
                            width={200}
                            height={200}
                        />
                    </div>
                ))}
            </section>
            <hr className="m-0 h-px w-full border-0 bg-gradient-to-r from-neutral-200/0 via-slate-700 to-neutral-200/0" />
            <footer className="flex justify-center items-center py-4">
                <p className="text-gray-800 ">&copy; 2025 Abdullah Fahim. All rights reserved.</p>
            </footer>
        </div>
    );
}
