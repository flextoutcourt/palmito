import React from "react";

export interface GameProps {
    children?: React.ReactNode;
}

const suits = ["spades", "hearts", "diamonds", "clubs"];

export const Game = ({children}: GameProps) => {
    return (
        <div className={"grid grid-cols-5"}>
            {suits.map((suit, key) => (
                <div className={"grid grid-cols-5"}>
                    {suit}
                </div>
            ))}
        </div>
    );
}
