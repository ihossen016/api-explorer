import React from "react";

function FormHeader({ requestObj, setRequestObj }) {
    return (
        <div className="flex flex-col md:flex-row items-center justify-start gap-2">
            <div className="w-full md:w-3/4 border border-gray-600 divide-y-2 md:divide-y-0">
                <select
                    className="w-full md:w-[15%] form-select px-5 py-3 border-0 cursor-pointer"
                    value={requestObj.method}
                    onChange={e =>
                        setRequestObj({
                            ...requestObj,
                            method: e.target.value,
                        })
                    }
                >
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                    <option value="PUT">PUT</option>
                    <option value="PATCH">PATCH</option>
                    <option value="DELETE">DELETE</option>
                </select>

                <input
                    className="form-input w-full md:w-[85%] px-4 py-3 border-0 bg-transparent"
                    type="text"
                    value={requestObj.url}
                    placeholder={requestObj.placeholder}
                    onChange={e =>
                        setRequestObj({
                            ...requestObj,
                            url: e.target.value,
                        })
                    }
                />
            </div>

            <button
                type="submit"
                className="w-full md:w-[10%] px-5 py-3 bg-blue-600 text-white border border-blue-600"
            >
                Send
            </button>
        </div>
    );
}

export default FormHeader;
