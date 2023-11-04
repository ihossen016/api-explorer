import React from "react";

function Tabs({ requestObj, toggleState, setToggleState }) {
    const tabs =
        requestObj.method === "POST" ||
        requestObj.method === "PUT" ||
        requestObj.method === "PATCH"
            ? ["Params", "Headers", "Body"]
            : ["Params", "Headers"];

    const getActiveTabClass = (index, className) =>
        toggleState === index ? className : "";

    return (
        <ul className="w-2/4 flex bg-white">
            {tabs.map((tab, index) => (
                <li
                    key={tab}
                    className={`w-4/5 md:w-1/2 px-6 md:px-7 py-3 font-medium text-center cursor-pointer ${
                        index !== toggleState ? "border-b" : ""
                    } border-black ${getActiveTabClass(
                        index,
                        "border-t border-x border-b-0"
                    )}`}
                    onClick={() => setToggleState(index)}
                >
                    {tab}
                </li>
            ))}
        </ul>
    );
}

export default Tabs;
