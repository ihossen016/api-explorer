import React from "react";
import JsonView from "react18-json-view";
import "react18-json-view/src/style.css";
import { httpStatuses, statusMessages } from "../../data";

function FormResponse({ response }) {
    const { status, body, time, size } = response;

    return (
        <div className="p-10 bg-gray-50">
            <h2 className="text-lg md:text-2xl font-bold pb-3">Response</h2>
            <div className="flex flex-col md:flex-row justify-start md:items-center items-start gap-5 pb-3">
                <p>
                    Status:{" "}
                    <span
                        className={`${
                            status >= 200 && status < 300
                                ? "text-green-600"
                                : status >= 300 && status < 400
                                ? "text-yellow-500"
                                : status >= 400
                                ? "text-red-600"
                                : ""
                        }`}
                    >
                        {status}
                        {status > 0 && (
                            <span>{` (${httpStatuses[status]})`}</span>
                        )}
                    </span>
                </p>
                <p>
                    Time: <span>{time}</span>
                </p>
                <p>
                    Size:{" "}
                    {status === 0 ? (
                        <span>{size} bytes</span>
                    ) : status !== 0 && size ? (
                        <span>{size} bytes</span>
                    ) : (
                        <span> Not Found</span>
                    )}
                </p>
            </div>

            {status !== 0 && (
                <JsonView
                    className="bg-gray-100 text-black text-lg p-5 max-h-96 overflow-auto"
                    src={body}
                />
            )}

            {status === 0 && (
                <div className="font-regular relative block w-full rounded-lg bg-blue-100 p-4 text-base leading-5 text-blue-700 opacity-100">
                    Submit an URL to see the response
                </div>
            )}

            {status >= 300 && status <= 400 && (
                <div className="font-regular relative block w-full rounded-lg bg-yellow-100 p-4 text-base leading-5 text-yellow-700 opacity-100">
                    {statusMessages[status]}
                </div>
            )}

            {status >= 400 && (
                <div className="font-regular relative block w-full rounded-lg bg-red-100 p-4 text-base leading-5 text-red-700 opacity-100">
                    {statusMessages[status]}
                </div>
            )}
        </div>
    );
}

export default FormResponse;
