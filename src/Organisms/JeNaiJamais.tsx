import React from "react";

export interface JeNaiJamaisProps{
    children?: React.ReactNode;
}

export const JeNaiJamais = ({children}: JeNaiJamaisProps) => {

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-5xl font-bold text-white">Je n'ai jamais</h1>
        </div>
    );

}
