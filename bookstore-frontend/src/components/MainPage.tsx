import { useEffect, useState } from "react";
import { baseUrl } from "./core";
import axios from "axios";
import "./Grid.css";
import { Book } from "./Book";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
    const [ books, setBooks ] = useState([]);
    const nav = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await axios.get(`${baseUrl}/api/Books`);
            if (response) {
                setBooks(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="grid-container">
            {books.map(({ id, name, price, quantity }) => (
                <Book key={id} id={id} name={name} price={price} quantity={quantity} onEdit={id => nav(`/book/${id}`)}/>
            ))}
        </div>
    );
}