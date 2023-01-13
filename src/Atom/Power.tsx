import React from 'react';

export interface PowerProps{
    children?: React.ReactNode;
    suit: 'spades' | 'hearts' | 'diamonds' | 'clubs' | string;
    rank: 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | string;
}

export const Power = ({children, suit, rank}:PowerProps) => {

    const power = () => {
        switch(rank){
            case 'A':
                return "CUL SEEEEC !!!";
            case '2':
                return "En vrai t'as soif, prends 2 gorgées";
            case '3':
                return "T'as super soif, prends 3 gorgées";
            case '4':
                return "Musique jeu ! C'est comme le jeu avec Mehdi Maizi, sauf qu'ici y'as pas que les rappeurs, y'a tout le monde !";
            case '5':
                return "SQUIRT ou tout autre mot drôle avec le doigt en l'air";
            case '6':
                return "Je n'ai jamais / Qui pourrait (au choix) ! Oui ca arrive bientôt sur cette appli";
            case '7':
                return "Tu est le maitre de la question, poses jusqu'a 3 question (ou jusqu'a ce que quelqu'un pioche un 7) à qui tu veux, si cette personne te réponds autre chose que \"TA GUEULE\", elle bois 3 gorgées, sinon tu les prends !";
            case '8':
                return "Distribue 8 gorgées à qui tu veux (Bien sur tu peux faire la salope et répartir 8 gorgées)";
            case '9':
                return "Je n'ai jamais / Qui pourrait (au choix) ! Oui ca arrive bientôt sur cette appli";
            case '10':
                return "Tu est désormais le maître du Freeze (3 fois ou jusqu'a ce que quelqu'un pioche un 10), arrête toi de bouger dans n'importe quelle position, la dernière personne a reproduire ta position bois 3 gorgées (ou autant que tu le décide)";
            case 'J':
                return "Tu dois lancer un thème (fermé ou infini), tu commences par répondre, la dernière personne qui ne trouve pas ou répète bois le nombre de gorgées que tu auras décidé avant de lancer le thème";
            case 'Q':
                return "Toutes les dames dans le jeu boivent, cependant si la majorité de joueurs sont des hommes, ils sont les seuls à boire";
            case 'K':
                return "Tu inventes une règle (tu n'as bien évidement pas le droit d'en supprimer une déjà existante), Ah oui au fait le \"miroir sans teint\" est autorisé :)";
        }
    }

    return (
        <div className={"flex flex-col items-center justify-center"}>
            <div className={"text-2xl font-bold"}>{power()}</div>
        </div>
    )

}
