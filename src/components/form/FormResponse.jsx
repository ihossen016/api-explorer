import React from "react";
import JsonView from "react18-json-view";
import "react18-json-view/src/style.css";

function FormResponse({ response }) {
    const { status, body, time } = response;

    return (
        <div className="p-10 bg-gray-50">
            <h2 className="text-lg md:text-2xl font-bold pb-3">Response</h2>
            <div className="flex justify-start items-center gap-5 pb-3">
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
                    </span>
                </p>
                <p>
                    Time: <span>{time}</span>
                </p>
            </div>

            {status !== 0 && (
                <JsonView
                    className="bg-gray-100 text-black text-lg p-5 max-h-96 overflow-auto"
                    src={body}
                />
            )}

            {status === 0 && (
                <div className="font-regular relative block w-full rounded-lg bg-blue-300 p-4 text-base leading-5 text-blue-700 opacity-100">
                    Submit an URL to see the response
                </div>
            )}
        </div>
    );
}

export default FormResponse;
