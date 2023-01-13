import './App.css'
import {ChooseAGame} from "./Templates/ChooseAGame";
import {useContext, useState} from "react";
import {GameContext} from "./Providers/GameContext";
import {NightModeContext} from "./Providers/NightModeContext";

function App() {

    const [gameName, setGameName] = useState(null);
    const [nightMode, setNightMode] = useState(false);

    return (
        <NightModeContext.Provider value={[nightMode, setNightMode]}>
            <GameContext.Provider value={[gameName, setGameName]}>
                <div className={"bg-gray-800"}>
                    <div className="max-w-7xl mx-auto">
                        <ChooseAGame />
                    </div>
                </div>
            </GameContext.Provider>
        </NightModeContext.Provider>
    )
}

export default App
