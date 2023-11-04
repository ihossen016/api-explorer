import React from "react";

function Loader() {
    return (
        <div className="absolute w-full h-full flex justify-center items-center bg-[#a7a7a7b9] ">
            <div
                className="inline-block h-20 w-20 animate-spin rounded-full border-8 border-gray-950 border-solid border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
            >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                </span>
            </div>
        </div>
    );
}

export default Loader;
