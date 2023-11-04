import React, { useState, useContext } from "react";
import { AppContext } from "../AppContext";

function History() {
    const [isOpen, setIsOpen] = useState(false);
    const { histories, dispatch } = useContext(AppContext);
    console.log(histories);

    return (
        <div
            className={`w-1/6 px-3 flex justify-start items-start gap-4 absolute z-50 md:static min-h-screen md:px-6 border-r-2 py-10 overflow-hidden bg-white`}
        >
            <img
                className="cursor-pointer"
                src={`./${!isOpen ? "history" : "close"}.svg`}
                alt="history-icon"
                onClick={() => setIsOpen(!isOpen)}
            />
            <div className={`w-full ${!isOpen ? "hidden" : ""}`}>
                <h2 className="text-lg font-black md:text-2xl">History</h2>
                <ul className="pt-10">
                    {histories.length === 0 && <li>No History</li>}
                    {histories.length > 0 &&
                        histories.map((history, index) => (
                            <div
                                key={index}
                                className="flex justify-around items-center gap-2 bg-gray-100"
                            >
                                <li className="flex justify-start items-center gap-2 cursor-pointer p-2">
                                    <p className="text-green-500">
                                        {history.method}
                                    </p>
                                    <p>{history.url.slice(0, 15)}...</p>
                                </li>

                                <button
                                    type="button"
                                    className="w-5 h-5 rounded-full border border-black flex items-center justify-center"
                                >
                                    x
                                </button>
                            </div>
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default History;
