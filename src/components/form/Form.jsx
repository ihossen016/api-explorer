import React, { useState } from "react";
import FormHeader from "./FormHeader";
import FormContent from "./FormContent";
import FormResponse from "./FormResponse";
import Loader from "../Loader";

function Form() {
    const [isLoading, setIsLoading] = useState(false);
    const [requestObj, setRequestObj] = useState({
        method: "GET",
        url: "",
        placeholder: "Enter URL or paste text",
        params: [],
        headers: {},
        body: {},
    });

    const [responseObj, setResponsetObj] = useState({
        method: "",
        url: "",
        params: [],
        time: "0ms",
        status: 0,
        body: {},
    });

    const handleSubmit = e => {
        e.preventDefault();

        handleFetch();
    };

    const handleFetch = async () => {
        setIsLoading(true);

        try {
            const startTime = performance.now();
            const response = await fetch(requestObj.url, {
                method: requestObj.method,
                headers: requestObj.headers,
            });

            const endTime = performance.now();
            const responseTime = endTime - startTime;

            const data = await response.json();

            setResponsetObj({
                method: requestObj.method,
                url: requestObj.url,
                params: requestObj.params,
                time: responseTime.toFixed(2) + "ms",
                status: response.status,
                body: data,
            });
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {isLoading && <Loader />}

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

                <FormResponse response={responseObj} />
            </div>
        </>
    );
}

export default Form;
