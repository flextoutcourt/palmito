import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {Button} from "../Atom/Button";
import {PlayersContext} from "../Providers/PMU/PlayersContext";
import {PlayerPredictions} from "../Molecule/PMU/PlayerPredictions";
import {Game} from "./PMU/Game";

export interface PmuProps {
    children?: React.ReactNode;
}

export interface PlayersProps {
    Players: PlayerProps[];
}

export interface PlayerProps {
    name: string;
}

export interface PredictionProps {
    Player: PlayerProps;
    suit: "spades" | "hearts" | "diamonds" | "clubs" | string;
    number: number;
}

export const Pmu = ({children}: PmuProps) => {

    const [players, setPlayers] = useState<PlayersProps>({Players: []});
    const [ready, setReady] = useState<boolean>(false);
    const [game, setGame] = useState<boolean>(false);

    const {register, handleSubmit, formState: {errors}} = useForm();


    const onSubmit = (data: any) => {
        console.log(players);
        setPlayers({Players: [...players.Players, data]});
    }

    const setReadyState = () => {
        if (players.Players.length > 1) {
            setReady(true);
        } else {
            alert("Il faut au moins 2 joueurs");
        }
    }

    const onPredictions = (data: any) => {
        console.log(data);
    }

    const setNumberForPlayer = (number: number, player: PlayerProps) => {
        setPlayers({
            Players: players.Players.map((p) => {
                    if (p.name === player.name) {
                        return {...p, number: number};
                    } else {
                        return p;
                    }
                }
            )
        });
        console.log(players);
    }

    const setSignForPlayer = (sign: string, player: PlayerProps) => {
        setPlayers({
            Players: players.Players.map((p) => {
                    if (p.name === player.name) {
                        return {...p, sign: sign};
                    } else {
                        return p;
                    }
                }
            )
        });
        console.log(players);
    }

    return (
    // @ts-ignore
        <PlayersContext.Provider value={[players, setPlayers, ready, setReady, game, setGame]}>
            {ready
                ?
                game ?
                    <Game />
                    :
                    <>
                        <div className="grid grid-cols-4 gap-4">
                            {players && players.Players.map((player, key) => (
                                <PlayerPredictions player={player} key={key}
                                                   setNumber={number => setNumberForPlayer(number, player)}
                                                   setSign={sign => setSignForPlayer(sign, player)}/>
                            ))}
                        </div>
                        <Button title={"tout est bon"} onClick={() => setGame(true)}/>
                    </>

                :
                <div className="flex flex-col items-center justify-center h-screen bg-black">
                    <h1 className="text-5xl font-bold text-white">PMU</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register('name', {required: true})} className={'text-black'}/>
                        <input type="submit"/>
                    </form>
                    <Button title={"Lancer les prédictions"} onClick={setReadyState}/>
                </div>}

        </PlayersContext.Provider>
    );

}
