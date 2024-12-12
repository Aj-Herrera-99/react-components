import Card from "./Card";
import { foods } from "../data/foods";

function Main({ titolo }) {
    return (
        <main className="min-h-[85vh] p-5  bg-stone-300">
            <h1 className="text-center text-4xl font-semibold mb-5">
                {titolo}
            </h1>
            <div className="flex flex-wrap w-3/4 mx-auto">
                {foods.map((food) => (
                    <Card
                        key={food.id}
                        immagine={food.immagine}
                        titolo={food.titolo}
                        contenuto={food.contenuto}
                    ></Card>
                ))}
            </div>
        </main>
    );
}

export default Main;
