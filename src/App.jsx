import { useState } from "react";
import Form from "./components/form/Form";
import History from "./components/History";

function App() {
    const [openLeft, setOpenLeft] = useState(false);

    const openDrawer = () => setOpenLeft(true);
    const closeDrawer = () => setOpenLeft(false);

    return (
        <div className="w-full">
            <History openLeft={openLeft} closeDrawer={closeDrawer} />

            <Form openDrawer={openDrawer} />
        </div>
    );
}

export default App;
