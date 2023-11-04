import Form from "./components/form/Form";
import History from "./components/History";

function App() {
    return (
        <div className="flex justify-start items-start">
            <History />

            <Form />
        </div>
    );
}

export default App;
