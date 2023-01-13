import React from "react";
import {PlayerPredictions} from "../../Molecule/PMU/PlayerPredictions";
import {Button} from "../../Atom/Button";
import {PlayerProps, PlayersProps} from "../Pmu";
import {PlayersContext} from "../../Providers/PMU/PlayersContext";

export interface PlayersPredictionsProps {
    children?: React.ReactNode;
    players: PlayersProps;
}

export const PlayersPredictions = ({children, players}: PlayersPredictionsProps) => {

    const {Players, setPlayers, game, setGame} = React.useContext(PlayersContext);


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

    return(
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
    )
}
