import React, {useContext} from "react";
import {Game} from "../Molecule/Game";
import {GameContext} from "../Providers/GameContext";
import {Pmu} from "../Organisms/Pmu";
import {Palmier} from "../Organisms/Palmier";
import {JeNaiJamais} from "../Organisms/JeNaiJamais";
import {Home} from "react-feather";

export interface ChooseAGameProps {
    children?: React.ReactNode;
}

export const ChooseAGame = ({children}: ChooseAGameProps) => {

    // @ts-ignore
    const [gameName, setGameName] = useContext(GameContext);

    const component = () => {
        switch(gameName){
            case "PMU":
                return <Pmu />
            case 'Palmier':
                return <Palmier />
            case "Je n'ai jamais":
                return <JeNaiJamais />
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-5xl font-bold text-white mb-4">{gameName ? component() : 'Choisir un jeu'}</h1>
            {gameName ? null : <div className="grid grid-cols-4 gap-4 w-full">
                {/*<Game title={"Je n'ai jamais"} description={"test"}/>*/}
                <Game title={"Palmier"} />
                {/*<Game title={"PMU"} />*/}
            </div>}
            <button className={'text-white absolute bottom-2 right-2 bg-indigo-500 p-2 rounded-full'} onClick={() => {setGameName(null)}}>
                <Home size={24} color={'white'} />
            </button>

        </div>
    );

}
