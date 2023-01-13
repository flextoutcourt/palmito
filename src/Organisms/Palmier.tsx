import React, {useState, useEffect} from 'react';
import {Card, CardProps} from "../Molecule/Card";
import classnames from "classnames";
import {Button} from "../Atom/Button";

export interface PalmierProps {
    children?: React.ReactNode;
}

const suits = ['spades', 'hearts', 'diamonds', 'clubs'];
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

export const Palmier = ({children}: PalmierProps) => {

    const [deck, setDeck] = useState<CardProps[]>([]);
    const [pastCards, setPastCards] = useState<CardProps[]>([]);
    const [card, setCard] = useState<CardProps>();
    const [disabledButton, setDisabledButton] = useState<boolean>(false);

    useEffect(() => {
        const d = [];
        for (let suit of suits) {
            for (let rank of ranks) {
                d.push({suit, rank});
            }
        }
        setDeck(d);

        return () => {
            setDeck([]);
            setPastCards([]);
        }
    }, []);

    const getRandomCard = () => {
        setDisabledButton(true);
        const random = Math.floor(Math.random() * deck.length);
        const c = deck[random];
        setDeck(deck.filter((_, i) => i !== random));
        setCard(c);
        setPastCards([...pastCards, c]);
        setDisabledButton(false);
    }

    const relaunch = () => {
        setDisabledButton(true);
        setDeck([]);
        setPastCards([]);
        setCard(undefined);
        setDisabledButton(false);
    }

    return (
        <div className={"flex flex-col items-center justify-center max-w-7xl mx-auto h-screen"}>
            <div
                className="flex flex-row absolute top-0 left-0 right-0 overflow-auto max-w-7xl mx-auto scrollbar scrollbar-thumb-gray-100 scrollbar-thumb-rounded-full">
                <div className="h-32"/>
                {pastCards && pastCards.map((c, i) => <Card key={i} noPower={true} small={true} {...c} />)}
            </div>
            {deck.length > 0 ? card && <Card rank={card.rank} suit={card.suit} onClick={getRandomCard}/> :
                <Button className={classnames('p-8 bg-indigo-500 rounded-md text-xl font-bold text-white mt-10')}
                        onClick={relaunch} disabled={disabledButton} title={"Relancer une partie"}></Button>}
            {deck.length > 0 &&
            <Button
                className={classnames('p-8 bg-indigo-500 rounded-md text-xl font-bold text-white mt-10 disabled:opacity-50')}
                onClick={getRandomCard} disabled={disabledButton} title={"Piocher une carte"}>
            </Button>}
        </div>
    )
}
