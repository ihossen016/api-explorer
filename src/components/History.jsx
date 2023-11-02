import React, { useState } from "react";

function History() {
    const [mobileWidth, setMobileWidth] = useState(false);

    return (
        <div
            className={`w-[${
                mobileWidth ? "70%" : "15%"
            }] absolute z-50 md:static ${
                mobileWidth ? "px-5" : "px-3"
            } md:w-[20%] min-h-screen md:px-6 border-r-2 py-10 overflow-hidden bg-white`}
        >
            <div className="flex justify-start items-start gap-4">
                <img
                    className="md:hidden"
                    src="./history.svg"
                    alt="history-icon"
                    onClick={() => setMobileWidth(!mobileWidth)}
                />
                <div className="w-full">
                    <h2 className="text-lg font-black text-right md:text-left md:text-2xl">
                        History
                    </h2>
                    <ul className="pt-10">
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default History;
