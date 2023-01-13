import React from "react";

export interface ButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    title: string;
}

export const Button = ({children, onClick, title, disabled}: ButtonProps) => {
    return (
        <button onClick={onClick} className="p-8 bg-indigo-500 rounded-md text-xl font-bold text-white mt-10 disabled:opacity-50">
            {title}
        </button>
    );
}
