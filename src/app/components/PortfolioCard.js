import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLink } from "@fortawesome/free-solid-svg-icons";

export default function PortfolioCard({ title, description, link }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition duration-300 p-6 flex flex-col h-full">
      <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{title}</h3>
      <p className="text-gray-600 text-sm mb-6 flex-1 text-justify">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-blue-600 font-medium text-sm mt-auto group hover:underline"
      >
        <FontAwesomeIcon icon={faLink} className="w-4 h-4" />
        <span>Visit Project</span>
        <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
}
