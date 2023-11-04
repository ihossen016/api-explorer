import React, { useContext, useEffect, useState } from "react";
import FormHeader from "./FormHeader";
import FormContent from "./FormContent";
import FormResponse from "./FormResponse";
import Loader from "../Loader";
import { AppContext } from "../../AppContext";

function Form() {
    const { dispatch } = useContext(AppContext);
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
        time: "0 ms",
        size: 0,
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
            const urlSearchParams = new URLSearchParams();
            let queryString = "";
            let responseSize;
            let authObj;

            if (requestObj.params.length > 0) {
                requestObj.params.forEach(param => {
                    urlSearchParams.append(param.key, param.value);
                });

                queryString += "?" + urlSearchParams.toString();
            }

            if (requestObj.method === "POST" || requestObj.method === "PUT") {
                authObj = {
                    method: requestObj.method,
                    headers: requestObj.headers,
                    body: JSON.stringify(requestObj.body),
                };
            } else {
                authObj = {
                    method: requestObj.method,
                    headers: requestObj.headers,
                };
            }
            const startTime = performance.now();

            const response = await fetch(requestObj.url + queryString, authObj);

            const endTime = performance.now();
            const responseTime = endTime - startTime;

            const data = await response.json();

            response.headers.forEach((value, name) => {
                if (name.toLowerCase() === "content-length") {
                    responseSize = value;
                }
            });

            setResponsetObj({
                method: requestObj.method,
                url: requestObj.url,
                params: requestObj.params,
                time: responseTime.toFixed(2) + " ms",
                size: responseSize,
                status: response.status,
                body: data,
            });
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (responseObj.status > 0) {
            dispatch({ type: "ADD", payload: responseObj });
        }
    }, [responseObj.status]);

    return (
        <>
            {isLoading && <Loader />}

            <div className="w-5/6 py-10 pl-[20%] pr-[5%] md:pl-10">
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
