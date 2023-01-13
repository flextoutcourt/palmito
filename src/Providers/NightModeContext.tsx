import React, {createContext} from 'react';
import {GameContextProps} from "./GameContext";

export interface NightModeContextProps{
    nightMode: boolean;
    setNightMode: (nightMode: boolean) => void;
}

export const NightModeContext = createContext<NightModeContextProps>({
    nightMode: true,
    setNightMode: () => {}
});
