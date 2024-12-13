import Badge from "./Badge";
import style from "./Card.module.css";

function Card({ titolo, contenuto, immagine }) {
    return (
        <div
            className={`shadow-lg shadow-stone-500 bg-white rounded-xl mx-2 my-4 w-full sm:w-[calc((100%-32px)/2)] lg:w-[calc((100%-48px)/3)] overflow-hidden hover:scale-110 hover:rotate-6 hover:shadow-xl hover:shadow-zinc-700 transition-all`}
        >
            <div className="h-3/5 w-full">
                <img
                    className="h-full w-full object-cover"
                    src={immagine}
                    alt={titolo}
                />
            </div>
            <div className="h-2/5 p-3 flex flex-col justify-between items-start gap-2">
                <div>
                    <div className="line-clamp-1">
                        <h2 className="text-lg font-semibold">{titolo}</h2>
                    </div>
                    <div className="md:line-clamp-1 xl:line-clamp-none">
                        <p className="hidden md:block my-1 leading-5">{contenuto}</p>
                    </div>
                </div>
                <Badge />
            </div>
        </div>
    );
}

export default Card;
