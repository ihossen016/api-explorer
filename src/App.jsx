import { useEffect, useState } from "react";
import History from "./components/History";
import FormHeader from "./components/FormHeader";
import FormContent from "./components/FormContent";
import FormResponse from "./components/FormResponse";

function App() {
    const [requestObj, setRequestObj] = useState({
        method: "GET",
        url: "",
        placeholder: "Enter URL or paste text",
        params: [{ key: "", value: "" }],
        headers: {},
        body: {},
    });

    const src = {
        test: "test",
    };

    // useEffect(() => {
    //     console.log(requestObj.headers);
    // }, [requestObj.headers]);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(requestObj);
    };

    return (
        <div className="flex justify-start items-start">
            <History />

            <div className="w-full py-10 pl-[20%] pr-[5%] md:pl-10">
                <h1 className="text-3xl font-bold underline">API Explorer</h1>

                <form className="py-5" onSubmit={handleSubmit}>
                    <FormHeader
                        requestObj={requestObj}
                        setRequestObj={setRequestObj}
                    />

                    <div className="py-10">
                        <FormContent
                            requestObj={requestObj}
                            setRequestObj={setRequestObj}
                        />
                    </div>
                </form>

                <FormResponse src={{ status: 200, message: "success" }} />
            </div>
        </div>
    );
}

export default App;
