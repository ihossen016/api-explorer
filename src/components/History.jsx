import React, { useContext, useState } from "react";
import {
    Drawer,
    Typography,
    IconButton,
    List,
    ListItemSuffix,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import JsonView from "react18-json-view";
import { AppContext } from "../AppContext";

function History({ openLeft, closeDrawer }) {
    const { histories, dispatch } = useContext(AppContext);
    const [open, setOpen] = useState(0);

    const handleOpen = value => setOpen(open === value ? 0 : value);

    function TrashIcon() {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
            >
                <path
                    fillRule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }

    return (
        <Drawer
            placement="left"
            open={openLeft}
            onClose={closeDrawer}
            className="p-4"
        >
            <div className="mb-6 flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">
                    History
                </Typography>
                <IconButton
                    variant="text"
                    color="blue-gray"
                    onClick={closeDrawer}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </IconButton>
            </div>

            {histories.length === 0 && (
                <Typography color="gray" className="mb-8 pr-4 font-normal">
                    No History Found.
                </Typography>
            )}

            {histories.length > 0 && (
                <List>
                    {histories.map((history, index) => (
                        <Accordion key={index} open={open === index + 1}>
                            <AccordionHeader
                                onClick={() => handleOpen(index + 1)}
                                className="text-sm font-normal py-1 flex justify-between items-center gap-2"
                            >
                                <Typography
                                    className="font-bold text-sm"
                                    color="green"
                                >
                                    {history.method}
                                </Typography>
                                {history.url.slice(0, 25)}...
                                <ListItemSuffix>
                                    <span className="text-blue-gray-700 p-2 rounded hover:bg-blue-gray-50 transition-all">
                                        <TrashIcon />
                                    </span>
                                </ListItemSuffix>
                            </AccordionHeader>

                            <AccordionBody>
                                <JsonView
                                    src={history}
                                    collapseStringsAfterLength={10}
                                    className="max-h-60 overflow-auto"
                                />
                            </AccordionBody>
                        </Accordion>
                    ))}
                </List>
            )}
        </Drawer>
    );
}

export default History;
