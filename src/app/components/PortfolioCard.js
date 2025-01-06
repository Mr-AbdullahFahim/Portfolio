
export default function PortfolioCard({title,description,link}){
    return(
        <div className="bg-gray-300 p-5 rounded-xl">
            <h3 className="text-2xl font-semibold text-center mb-4">{title}</h3>
            <p className="text-justify font-thin mb-4">{description}</p>
            <div>Project Link: <a href={link}>{link}</a></div>
        </div>
    );
}