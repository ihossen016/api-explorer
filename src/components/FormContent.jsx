import React, { useState } from "react";
import Tabs from "./tabs/Tabs";

function FormContent() {
    const [toggleState, setToggleState] = useState(0);

    return (
        <div className="w-3/4">
            <Tabs toggleState={toggleState} setToggleState={setToggleState} />

            <div className="py-5 bg-gray-50">
                <div className={`${toggleState !== 0 ? "hidden" : ""}`}>
                    <h2>Lorem</h2>
                </div>
                <div className={`${toggleState !== 1 ? "hidden" : ""}`}>
                    <h2>Ipsum</h2>
                </div>
                <div className={`${toggleState !== 2 ? "hidden" : ""}`}>
                    <h2>Dolor</h2>
                </div>
            </div>
        </div>
    );
}

export default FormContent;
