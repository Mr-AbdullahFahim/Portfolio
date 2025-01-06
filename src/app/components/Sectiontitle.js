
export default function Sectiontitle({coloredtitle,title}){
    return(
        <h2 className="md:text-4xl text-2xl font-extrabold text-center uppercase h-fit"><span className="text-[#F42A0F]">{coloredtitle}</span> {title}</h2>
    );
}