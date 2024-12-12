import Card from "./Card";

function Main() {
    return (
        <>
            <main className="min-h-[85vh] flex flex-col items-center p-3 gap-8 bg-stone-300">
                <h1 className="text-4xl font-semibold">Il mio blog</h1>
                <Card />
            </main>
        </>
    );
}

export default Main;
