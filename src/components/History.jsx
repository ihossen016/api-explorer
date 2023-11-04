import React, { useState, useContext } from "react";
import { AppContext } from "../AppContext";

function History() {
    const [isOpen, setIsOpen] = useState(false);
    const { histories, dispatch } = useContext(AppContext);
    console.log(histories);

    return (
        <div
            className={`px-5 flex justify-start items-start gap-4 absolute z-50 md:static min-h-screen md:px-6 border-r-2 py-10 overflow-hidden bg-white`}
        >
            <img
                className="cursor-pointer"
                src={`./${!isOpen ? "history" : "close"}.svg`}
                alt="history-icon"
                onClick={() => setIsOpen(!isOpen)}
            />
            <div className={`w-full pr-5 ${!isOpen ? "hidden" : ""}`}>
                <h2 className="text-lg font-black md:text-2xl">History</h2>
                <ul className="pt-10">
                    {histories.length === 0 && <li>No History</li>}
                </ul>
            </div>
        </div>
    );
}

export default History;
