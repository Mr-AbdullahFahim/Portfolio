import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import PortfolioCard from "../components/PortfolioCard";
import Link from "next/link";

library.add(fas, far, fab);

export default function Webportfolio(){
    return(
        <div>
            <div className="w-full flex justify-start items-center px-16 py-6 border-b-[1px] border-gray-800">
                <Link href="./.." className="hover:opacity-75 flex justify-start items-center gap-2">
                    <FontAwesomeIcon icon="fa-solid fa-chevron-left" className="w-3" /><span className="font-semibold">Back</span>
                </Link>
            </div>
            <section className="grid lg:grid-cols-2 gap-5 w-5/6 mx-auto pt-9 pb-20">
                <PortfolioCard title="Alumni Networking and Research Article Platform" description="As a Full Stack Developer, I created a Platform using Laravel to connect alumni, students, and lecturers. The platform features secure authentication and role-based access control, ensuring tailored experiences for each user type. I designed a responsive interface with Tailwind CSS to ensure accessibility across devices. Key functionalities include a research article module for uploading and managing articles, a job posting module for sharing jobs and internships, and real-time messaging powered by Chatify and Pusher to facilitate communication. The development process was efficiently managed with Git for version control." link="https://github.com/Mr-AbdullahFahim" />
                <PortfolioCard title="ToDo Mobile Application" description="As a Backend Developer and Frontend Contributor, I played a key role in developing a cross-platform ToDo app for iOS and Android, designed to enhance productivity and user experience. The app features custom UI components and AI-powered task suggestions integrated using OpenAI APIs, providing smart, personalized assistance to users. I developed a custom calendar component to improve interaction and usability and implemented Async Storage for efficient data management, enabling seamless offline functionality and persistent data handling." link="https://github.com/Mr-AbdullahFahim/todoApp.git" />
                <PortfolioCard title="Libraray Management System" description="The Library Management System is a web-based application developed using Laravel to streamline library operations with a user-friendly interface for administrators. It offers robust features such as book management to add, update, and monitor stock availability, and member management for registering and tracking membership details. The system also includes checkout management to efficiently handle book borrowing and returns, along with real-time stock updates that automatically adjust inventory levels during transactions." link="https://github.com/Mr-AbdullahFahim/LibraryManagementSystem.git"/>
            </section>
            <hr className="m-0 h-px w-full border-0 bg-gradient-to-r from-neutral-200/0 via-slate-700 to-neutral-200/0" />
            <footer className="flex justify-center items-center py-4">
                <p className="text-gray-800 ">&copy; 2025 Abdullah Fahim. All rights reserved.</p>
            </footer>
        </div>
    );
}