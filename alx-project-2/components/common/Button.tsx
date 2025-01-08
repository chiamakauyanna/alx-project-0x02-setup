// components/common/Button.tsx
import React from "react";
import { ButtonProps } from "@/interfaces"; 

const Button: React.FC<ButtonProps> = ({ size, shape, children }) => {
    const sizeClass = {
        small: "px-3 py-2 text-sm",
        medium: "px-5 py-3 text-base",
        large: "px-6 py-4 text-lg",
    }[size];

    const shapeClass = {
        "rounded-sm": "rounded-sm",
        "rounded-md": "rounded-md",
        "rounded-full": "rounded-full",
    }[shape];

    return (
        <button
            className={`${sizeClass} ${shapeClass} bg-blue-500 text-white hover:bg-blue-600 transition duration-300`}
        >
            {children}
        </button>
    );
};

export default Button;
