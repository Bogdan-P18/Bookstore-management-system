import React from "react";
import "./Grid.css";

interface BookProps {
    id?: string,
    name: string,
    price: string,
    quantity: string
    onEdit: (id?: string) => void;
}

export const Book: React.FC<BookProps> = ({ id, name, price, quantity, onEdit }) => {
    return (
        <div className="grid-item" onClick={() => onEdit(id)}>
            <p> {name} </p>
            <p> {price} </p>
        </div>
    );
}