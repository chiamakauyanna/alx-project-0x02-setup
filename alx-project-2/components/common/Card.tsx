import { CardProps } from "@/interfaces";
import React from "react";

const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    );
};

export default Card;
