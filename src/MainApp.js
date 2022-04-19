import React, { useEffect, useState } from "react";
import { CardComp } from "./Componenets/Card";
import Api from "./Services/adviceApi";

const MainApp = ({ theme }) => {
    const [data, setData] = React.useState([]);
    const [query, setQuery] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        setLoading(true);
        if (query.length > 0) {
            try {
                const response = await Api.get(`/advice/search/${query}`);
                setData(response.data.slips);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        } else {
            Api.get("/advice")
                .then((res) => {
                    setData(res.data.slip);
                    console.log(res.data.slip);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setError(err);
                    setLoading(false);
                });
        }
    };
    return (
        <div
            className={`w-full h-full  fixed flex flex-row align-middle items-center justify-center top-50 bottom-50 ${
                theme ? "dark" : ""
            }`}>
            {loading ? (
                <i className="pi pi-spin pi-spinner" style={{ fontSize: "5rem" }}></i>
            ) : (
                <div>
                    <div
                        style={{
                            boxShadow:
                                "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
                        }}
                        className="flex border-t-gray-200 dark:border-t-slate-700 transition 2xl:py-4 2xl:px-6 py-2 px-5 justify-between bg-white dark:bg-gray-800 rounded-b items-center dark:text-gray-400 text-gray-500">
                        <div className="hidden sm:flex space-x-7 sm:space-x-3 transition items-center font-semibold">
                            <div>
                                <CardComp advice={data.advice} />
                            </div>
                        </div>
                    </div>

                    <div className="flex sm:hidden dark:text-gray-400 text-gray-500 rounded bg-white dark:bg-gray-800 mt-2 py-4 px-5 space-x-7 justify-center transition items-center font-semibold"></div>
                    <button
                        className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-400 font-semibold py-2 px-4  shadow-lg hover:shadow-xl focus:outline-none focus:shadow-outline"
                        onClick={() => {
                            getData();
                        }}>
                        get New Advice
                    </button>
                </div>
            )}
        </div>
    );
};

export default MainApp;
