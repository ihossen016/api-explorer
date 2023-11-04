import { useState } from "react";
import Form from "./components/form/Form";
import History from "./components/History";
import {
    Drawer,
    Button,
    Typography,
    IconButton,
    List,
    ListItem,
    ListItemSuffix,
    Card,
} from "@material-tailwind/react";
import NewHistory from "./components/NewHistory";

function App() {
    const [openLeft, setOpenLeft] = useState(false);

    const openDrawer = () => setOpenLeft(true);
    const closeDrawer = () => setOpenLeft(false);

    return (
        <div className="w-full">
            <Button onClick={openDrawer}>Show History</Button>
            <NewHistory openLeft={openLeft} closeDrawer={closeDrawer} />

            {/* <History /> */}

            <Form />
        </div>
    );
}

export default App;
