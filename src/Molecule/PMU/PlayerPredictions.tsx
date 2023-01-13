import React from "react";
import {PlayerProps} from "../../Organisms/Pmu";
import {Card} from "../Card";

export interface PlayerPredictionsProps {
    children?: React.ReactNode;
    player: PlayerProps;
    setSign: (sign: string) => void;
    setNumber: (number: number) => void;
}

const suits = ["spades", "hearts", "diamonds", "clubs"];

export const PlayerPredictions = ({children, player, setSign, setNumber}: PlayerPredictionsProps) => {

    const setSignForPlayer = (suit: string) => {
        setSign(suit);
    }

    const setNumberForPlayer = (number: number) => {
        setNumber(number);
    }

    return (
        <div className={"bg-indigo-500 h-96 w-full rounded-md p-4"}>
            <p>{player.name}</p>
            <div className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-4 gap-4 mt-6">
                    {suits.map((suit, key) => (
                        <Card suit={suit} rank={"K"} small={true} noPower onClick={() => setSignForPlayer(suit)}/>
                    ))}
                </div>
                <div className="grid grid-cols-5 gap-4 mt-6">
                    {["2", "3", "5", "7", "9"].map((number, key) => (
                        <Card suit={"spades"} rank={number} small={true} noPower
                              onClick={() => setNumberForPlayer(parseInt(number))}/>
                    ))}
                </div>
            </div>
        </div>
    );
}
