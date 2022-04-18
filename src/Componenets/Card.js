import React from "react";

export const CardComp = ({ advice }) => {
    return (
        <div className="flex flex-row">
            <p className="flex justify-center items-center text-4xl"> {advice}</p>
        </div>
    );
};
