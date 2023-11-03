import React, { useState } from "react";
import Tabs from "./tabs/Tabs";
import JsonView from "react18-json-view";
import "react18-json-view/src/style.css";

function FormContent({ requestObj, setRequestObj }) {
    const [toggleState, setToggleState] = useState(0);

    return (
        <div className="w-3/4">
            <Tabs toggleState={toggleState} setToggleState={setToggleState} />

            <div className="py-5 bg-gray-50 px-10">
                <div className={`${toggleState !== 0 ? "hidden" : ""}`}>
                    <h2>Lorem</h2>
                </div>
                <div className={`${toggleState !== 1 ? "hidden" : ""}`}>
                    <h2 className="py-5">Input your Headers in JSON format</h2>

                    <JsonView
                        className="bg-gray-100 text-black text-3xl"
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
                        className="bg-gray-100 text-black text-3xl"
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
