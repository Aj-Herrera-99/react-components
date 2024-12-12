import Card from "./Card";
import { foods } from "../data/foods";

function Main() {
    return (
        <>
            <main className="min-h-[85vh] text-center p-3  bg-stone-300">
                <h1 className="text-4xl font-semibold mb-5">Il mio blog</h1>
                <div className="flex justify-center flex-wrap gap-6 w-4/5 mx-auto">
                    {foods.map((food) => (
                        <Card
                            immagine={food.immagine}
                            titolo={food.titolo}
                            contenuto={food.contenuto}
                        ></Card>
                    ))}
                </div>
            </main>
        </>
    );
}

export default Main;
