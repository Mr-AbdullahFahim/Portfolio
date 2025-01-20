import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import DesignPortfoliocard from "../components/DesignPortfoiocard";

library.add(fas, far, fab);

export default function Designportfolio(){
    return(
        <div>
            <div className="w-full flex justify-start items-center px-16 py-6 border-b-[1px] border-gray-800">
                <a href="./../Portfolio" className="hover:opacity-75 flex justify-start items-center gap-2">
                    <FontAwesomeIcon icon="fa-solid fa-chevron-left" className="w-3" /><span className="font-semibold">Back</span>
                </a>
            </div>
            <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mx-auto w-4/5 pt-12 pb-20">
                <DesignPortfoliocard src="./designs/Choreo Session.png" alt="Choreo session flyer"/>
                <DesignPortfoliocard src="./designs/AlphaFood logo.jpg" alt="Alpha foods logo"/>
                <DesignPortfoliocard src="./designs/Christmas day flyer.jpg" alt="Christmas day flyer"/>
                <DesignPortfoliocard src="./designs/collage boost.jpg" alt="collage boost flyer"/>
                <DesignPortfoliocard src="./designs/Dinner menu.jpg" alt="Dinner menu"/>
                <DesignPortfoliocard src="./designs/Eid flyer.jpg" alt="Eid flyer"/>
                <DesignPortfoliocard src="./designs/gavel common flyer.jpg" alt="gavel common flyer"/>
                <DesignPortfoliocard src="./designs/Eid ul Adha Flyer.jpg" alt="Eid ul Adha Flyer"/>
                <DesignPortfoliocard src="./designs/Golden jubliee flyer.jpg" alt="Golden jubliee flyer"/>
                <DesignPortfoliocard src="./designs/Good friday flyer.jpg" alt="Good friday flyer"/>
                <DesignPortfoliocard src="./designs/IEEE day event flyer.jpg" alt="IEEE day event flyer"/>
                <DesignPortfoliocard src="./designs/IEEE official t-shirt.jpg" alt="IEEE official t-shirt"/>
                <DesignPortfoliocard src="./designs/IEEE promotion flyer.jpg" alt="IEEE promotion flyer"/>
                <DesignPortfoliocard src="./designs/labour day flyer.jpg" alt="labour day flyer"/>
                <DesignPortfoliocard src="./designs/Launch menu.jpg" alt="Launch menu"/>
                <DesignPortfoliocard src="./designs/Mothers day event flyer.jpg" alt="Mothers day event flyer"/>
                <DesignPortfoliocard src="./designs/speaker profile thimeth perera.jpg" alt="speaker profile thimeth perera"/>
                <DesignPortfoliocard src="./designs/Speaker profile-Michelle perera.jpg" alt="Speaker profile-Michelle perera"/>
                <DesignPortfoliocard src="./designs/t-shirt competition flyer.jpg" alt="t-shirt competition flyer"/>
                <DesignPortfoliocard src="./designs/UoJ Coders T-shirt mock mockup.jpg" alt="UoJ Coders T-shirt mock mockup"/>
                <DesignPortfoliocard src="./designs/WhatsApp chennal flyer.jpg" alt="WhatsApp chennal flyer"/>
            </section>
            <hr className="m-0 h-px w-full border-0 bg-gradient-to-r from-neutral-200/0 via-slate-700 to-neutral-200/0" />
            <footer className="flex justify-center items-center py-4">
                <p className="text-gray-800 ">&copy; 2025 Abdullah Fahim. All rights reserved.</p>
            </footer>
        </div>
    );
}
