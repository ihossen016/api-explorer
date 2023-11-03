import React from "react";
import JsonView from "react18-json-view";
import "react18-json-view/src/style.css";

function FormResponse({ src }) {
    return (
        <div>
            <h2>Response</h2>
            <JsonView src={src} />
        </div>
    );
}

export default FormResponse;
