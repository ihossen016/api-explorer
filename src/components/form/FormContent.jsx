import React, { useState } from "react";
import Tabs from "../tabs/Tabs";
import JsonView from "react18-json-view";
import "react18-json-view/src/style.css";

function FormContent({ requestObj, setRequestObj }) {
    const [toggleState, setToggleState] = useState(0);

    return (
        <div className="w-full">
            <Tabs
                requestObj={requestObj}
                toggleState={toggleState}
                setToggleState={setToggleState}
            />

            <div className="py-5 bg-gray-50 px-10">
                <div className={`${toggleState !== 0 ? "hidden" : ""}`}>
                    <h2 className="py-5">Query Parameters</h2>

                    <div>
                        <button
                            className="px-10 py-3 mb-5 border border-black"
                            type="button"
                            onClick={() =>
                                setRequestObj({
                                    ...requestObj,
                                    params: [
                                        ...requestObj.params,
                                        { key: "", value: "" },
                                    ],
                                })
                            }
                        >
                            Add
                        </button>

                        {requestObj.params.map((param, index) => {
                            const handleKeyChange = e => {
                                const updatedParams = [...requestObj.params];
                                updatedParams[index].key = e.target.value;
                                setRequestObj({
                                    ...requestObj,
                                    params: updatedParams,
                                });
                            };

                            const handleValueChange = e => {
                                const updatedParams = [...requestObj.params];
                                updatedParams[index].value = e.target.value;
                                setRequestObj({
                                    ...requestObj,
                                    params: updatedParams,
                                });
                            };

                            const handleRemove = () => {
                                setRequestObj({
                                    ...requestObj,
                                    params: [
                                        ...requestObj.params.filter(
                                            (param, i) => i !== index
                                        ),
                                    ],
                                });
                            };

                            return (
                                <div
                                    key={index}
                                    className="flex flex-col md:flex-row justify-start items-center gap-5 mb-4"
                                >
                                    <input
                                        type="text"
                                        placeholder="Key"
                                        value={param.key}
                                        onChange={handleKeyChange}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Value"
                                        value={param.value}
                                        onChange={handleValueChange}
                                    />

                                    <button
                                        type="button"
                                        className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center"
                                        onClick={handleRemove}
                                    >
                                        X
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className={`${toggleState !== 1 ? "hidden" : ""}`}>
                    <h2 className="py-5">Input your Headers in JSON format</h2>

                    <JsonView
                        className="bg-gray-100 text-black text-xl p-5 max-h-96 overflow-auto"
                        editable={{ add: true, edit: true, delete: true }}
                        src={requestObj.headers}
                        onChange={data =>
                            setRequestObj({
                                ...requestObj,
                                headers: data.src,
                            })
                        }
                    />
                </div>
                <div className={`${toggleState !== 2 ? "hidden" : ""}`}>
                    <h2 className="py-5">Input your Data in JSON format</h2>

                    <JsonView
                        className="bg-gray-100 text-black text-xl p-5 max-h-96 overflow-auto"
                        editable={{ add: true, edit: true, delete: true }}
                        src={requestObj.body}
                        onChange={data =>
                            setRequestObj({
                                ...requestObj,
                                body: data.src,
                            })
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default FormContent;
