import React, {useContext} from "react";
import {GameContext} from "../Providers/GameContext";

export interface GameProps{
    children?: React.ReactNode;
    title: string;
    description ?: string;
    component?: React.ReactNode;
    onClick?: () => void;
}

export const Game = ({children, title, description, component, onClick}: GameProps) => {

    const [gameName, setGameName] = useContext(GameContext);

    const handleClick = () => {
       setGameName(title);
    }


    return (
        <button className="flex flex-col items-center justify-center rounded-md duration-300 hover:bg-indigo-500 h-64" onClick={handleClick}>
            <h2 className="text-3xl font-bold text-white">{title}</h2>
            <p className={"text-white my-5"}>{description}</p>
        </button>
    );

}
