import History from "./components/History";

function App() {
    return (
        <div className="flex justify-start items-start">
            <History />

            <div className="py-10 pl-[20%] md:pl-10">
                <h1 className="text-3xl font-bold underline">API Explorer</h1>
            </div>
        </div>
    );
}

export default App;
