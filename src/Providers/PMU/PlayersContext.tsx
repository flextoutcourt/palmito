import React, {createContext} from "react";
import {PlayerProps} from "../../Organisms/Pmu";
import {GameContextProps} from "../GameContext";

export interface PlayersContextProps {
    Players: PlayerProps[];
    setPlayers: (players: PlayerProps) => void;
    ready: boolean;
    setReady: (ready: boolean) => void;
    game: boolean;
    setGame: (game: boolean) => void;
}

export const PlayersContext = createContext<PlayersContextProps>({
    Players: [],
    setPlayers: () => {},
    ready: false,
    setReady: () => {},
    game: false,
    setGame: () => {}
});
