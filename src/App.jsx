import { useState } from "react";
import Form from "./components/form/Form";
import NewHistory from "./components/NewHistory";

function App() {
    const [openLeft, setOpenLeft] = useState(false);

    const openDrawer = () => setOpenLeft(true);
    const closeDrawer = () => setOpenLeft(false);

    return (
        <div className="w-full">
            <NewHistory openLeft={openLeft} closeDrawer={closeDrawer} />

            {/* <History /> */}

            <Form openDrawer={openDrawer} />
        </div>
    );
}

export default App;
