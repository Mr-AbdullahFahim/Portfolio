
export default function DesignPortfoliocard({src,alt}){
    return(
        <div className="flex justify-center items-center shadow-md overflow-hidden bg-black rounded-lg">
            <img src={src} alt={alt} className="w-full" />
        </div>
    );
}