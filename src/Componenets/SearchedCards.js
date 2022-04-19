import React from "react";
import { CardComp } from "./Card";

const SearchedCards = ({ advices }) => {
    return (
        <div>
            {advices.map((advice) => (
                <CardComp advice={advice} />
            ))}
        </div>
    );
};

export default SearchedCards;
