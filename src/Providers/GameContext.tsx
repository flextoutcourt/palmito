import {createContext} from "react";

export interface GameContextProps{
    gameName: string | null;
    setGameName: (gameName: string) => void;
}

export const GameContext = createContext<GameContextProps>({
    gameName: null,
    setGameName: () => {}
});
