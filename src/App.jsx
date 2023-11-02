import { useEffect, useState } from "react";
import History from "./components/History";

function App() {
    const [requestObj, setRequestObj] = useState({
        method: "GET",
        url: "",
        placeholder: "Enter URL or paste text",
    });

    // useEffect(() => {
    //     console.log(requestObj.method);
    // }, [requestObj.method]);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(requestObj);
    };

    return (
        <div className="flex justify-start items-start">
            <History />

            <div className="w-full py-10 pl-[20%] md:pl-10">
                <h1 className="text-3xl font-bold underline">API Explorer</h1>

                <form className="py-5" onSubmit={handleSubmit}>
                    <div className="flex items-center justify-start gap-2">
                        <div className="w-3/4 border border-gray-600">
                            <select
                                className="w-[15%] form-select px-5 py-3 border-0"
                                value={requestObj.method}
                                onChange={e =>
                                    setRequestObj({
                                        ...requestObj,
                                        method: e.target.value,
                                    })
                                }
                            >
                                <option value="GET">GET</option>
                                <option value="POST">POST</option>
                                <option value="PUT">PUT</option>
                                <option value="PATCH">PATCH</option>
                                <option value="DELETE">DELETE</option>
                            </select>

                            <input
                                className="form-input w-[85%] px-4 py-3 border-0 bg-transparent"
                                type="text"
                                value={requestObj.url}
                                placeholder={requestObj.placeholder}
                                onChange={e =>
                                    setRequestObj({
                                        ...requestObj,
                                        url: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-[10%] px-5 py-3 bg-blue-600 text-white border border-blue-600"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App;
