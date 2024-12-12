import Badge from "./Badge";
import style from "./Card.module.css"

function Card() {
    return (
        <>
            <div
                className={`${style.card} shadow-lg shadow-stone-500 bg-white rounded-xl overflow-hidden max-w-[80vw] sm:max-w-[50vw] lg:max-w-[350px] `}
            >
                <div className="h-3/5">
                    <img
                        className="h-full object-cover"
                        src="/public/blog.png"
                        alt=""
                    />
                </div>
                <div className="h-2/5 p-3 flex flex-col justify-between gap-2">
                    <div className="line-clamp-5">
                        <h2>Titolo del Post</h2>
                        <p className="my-2 leading-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Earum doloremque repudiandae ut, rerum est
                            incidunt non, officia corporis ab ipsum autem quam?
                            Blanditiis atque, cum tempore explicabo sapiente
                            officiis quo?
                        </p>
                    </div>
                    <Badge />
                </div>
            </div>
        </>
    );
}

export default Card;
