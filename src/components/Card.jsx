import Badge from "./Badge";
import style from "./Card.module.css";

function Card({ titolo, contenuto, immagine }) {
    return (
        <>
            <div
                className={`${style.card} shadow-lg shadow-stone-500 bg-white rounded-xl overflow-hidden max-w-[80vw] sm:max-w-[50vw] lg:max-w-[350px] hover:scale-110 hover:rotate-6 hover:shadow-xl hover:shadow-zinc-700 transition-all`}
            >
                <div className="h-3/5">
                    <img
                        className="h-full object-cover"
                        src={immagine}
                        alt={titolo}
                    />
                </div>
                <div className="h-2/5 p-3 flex flex-col justify-between items-start gap-2">
                    <div className="line-clamp-5">
                        <h2 className="text-lg font-semibold">{titolo}</h2>
                        <p className="my-2 leading-5">{contenuto}</p>
                    </div>
                    <Badge />
                </div>
            </div>
        </>
    );
}

export default Card;
