import React, { useState } from "react";

function History() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`px-5 flex justify-start items-start absolute z-50 md:static min-h-screen md:px-6 border-r-2 py-10 overflow-hidden bg-white`}
        >
            <img
                className="cursor-pointer"
                src={`./${!isOpen ? "history" : "close"}.svg`}
                alt="history-icon"
                onClick={() => setIsOpen(!isOpen)}
            />
            <div className={`w-full pr-5 ${!isOpen ? "hidden" : ""}`}>
                <h2 className="text-lg font-black text-right md:text-2xl">
                    History
                </h2>
                <ul className="pt-10">
                    <li>ashfoahshfohdaofhjposdh</li>
                    <li>ashfoahshfohdaofhjposdh</li>
                    <li>ashfoahshfohdaofhjposdh</li>
                    <li>ashfoahshfohdaofhjposdh</li>
                    <li>ashfoahshfohdaofhjposdh</li>
                    <li>ashfoahshfohdaofhjposdh</li>
                </ul>
            </div>
        </div>
    );
}

export default History;
