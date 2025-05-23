import Link from "next/link";

export default function ButtonCard({url,alt,title,path}){
    return(
        <Link className="grid justify-center items-center p-5 brightness-90 hover:brightness-75" href={path}>
            <img src={url} alt={alt} className="w-[200px] md:w-[270px] rounded-2xl shadow-lg"/>
            <h2 className="md:text-2xl text-xl w-[190px] md:w-[250px] mx-auto font-semibold text-gray-600 text-center">{title}</h2>
        </Link>
    );
}