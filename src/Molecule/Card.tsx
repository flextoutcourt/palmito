import React from "react";
import {Power} from "../Atom/Power";

import Spades from "../assets/icons/spades.png";
import Hearts from "../assets/icons/hearts.png";
import Diamonds from "../assets/icons/diamonds.png";
import Clubs from "../assets/icons/clubs.png";

import classnames from 'classnames';

export interface CardProps {
    children?: React.ReactNode;
    suit: 'spades' | 'hearts' | 'diamonds' | 'clubs' | string;
    rank: 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | string;
    noPower?: boolean;
    small?: boolean;
    onClick?: () => void;
}

export interface sizeTypeProps {
    type: 'cardSize' | 'cardFontSize' | 'marginBottom' | 'padding';
}

export const Card = ({children, suit, rank, noPower, small, onClick}: CardProps) => {

    const suits = () => {
        switch (suit) {
            case 'spades':
            case 'clubs':
                return "bg-white text-black";
            case 'hearts':
            case 'diamonds':
                return "bg-white text-red-500";
        }
    }

    const size = ({type}: sizeTypeProps) => {
        switch(type){
            case 'cardSize' :
                switch(small){
                    case true:
                        return "w-8 h-16";
                    default:
                        return "w-48 h-96";
                }
            case 'cardFontSize' :
                switch(small){
                    case true:
                        return "text-2xl";
                    default:
                        return "text-6xl";
                }
            case 'marginBottom' :
                switch(small){
                    case true:
                        return "mb-0";
                    default:
                        return "mb-8";
                }
            case 'padding' :
                switch(small){
                    case true:
                        return "p-1";
                    default:
                        return "p-8";
                }
        }
    }

    const icon = () => {
        switch (suit) {
            case 'spades':
                return Spades;
            case 'hearts':
                return Hearts;
            case 'diamonds':
                return Diamonds;
            case 'clubs':
                return Clubs;
        }
    }

    return (
        <button className={classnames('flex flex-col justify-center items-center')} onClick={onClick}>
            <div className={classnames('rounded-md flex flex-col justify-center items-center mx-1 border-2 border-black bg-white shadow-md', suits(), size({type: 'cardSize'}), size({type: 'padding'}), size({type: 'marginBottom'}))}>
                <div className={classnames('font-bold', size({type: "cardFontSize"}), size({type: 'marginBottom'}))}>{rank}</div>
                <img src={icon()} alt={suit} />
            </div>
            {noPower ? '' : <Power suit={suit} rank={rank}/> }
        </button>
    )
}
