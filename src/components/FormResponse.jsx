import React from "react";
import JsonView from "react18-json-view";
import "react18-json-view/src/style.css";

function FormResponse({ src }) {
    return (
        <div className="p-10 bg-gray-50">
            <h2 className="text-lg font-bold pb-3">Response</h2>
            <div className="flex justify-start items-center gap-5 pb-3">
                <p>
                    Status: <span>200</span>
                </p>
                <p>
                    Time: <span>100ms</span>
                </p>
                <p>
                    Size: <span>166kb</span>
                </p>
            </div>
            <JsonView
                className="bg-gray-100 text-black text-lg p-5"
                src={src}
            />
        </div>
    );
}

export default FormResponse;
