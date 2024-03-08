import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Login";
import axios from "axios";
import { baseUrl } from "./core";
import { useNavigate, useParams } from "react-router-dom";
import "./BookPurchase.css";

export const BookPurchasePage = () => {
    const { username } = useContext(AuthContext);
    const [idUser, setIdUser] = useState(0);
    const [idBook, setIdBook] = useState(0);
    const [name, setTitle] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const params = useParams();
    const nav = useNavigate();
    useEffect(() => {
        console.log(username);
        setUserBook();
    });

    const setUserBook = async () => {
        try {
            const response = await axios.get(`${baseUrl}/Users/Details?name=${username}`);
            const user = response.data;

            if (user === null) {
                console.log("Wrong username");
                return;
            }

            const book = await axios.get(`${baseUrl}/api/Books/${Number(params.id).valueOf}`);
            if (book === null) {
                console.log("This book doesn't exist");
                return;
            }

            setTitle(book.data.name);
            setQuantity(book.data.quantity);
            setPrice(book.data.price);
            setIdUser(user.id);
            setIdBook(Number(params.id).valueOf);
        }
        catch (error) {
            console.log(error);
        }
    }
    
    const insertPurchase = async () => {
        const purchaseData = {
            userId: idUser,
            bookId: idBook,
            purchaseDate: new Date()
        }
        axios.post(`${baseUrl}/Purchases/Create`,purchaseData)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log("Error: ", error)
                return;
            });
        const updatedBook = {
            id: idBook,
            name: name,
            price: price,
            quantity: quantity - 1,
        };
        try {
            const response = await axios.put(`${baseUrl}/api/Books/${idBook}`, updatedBook);
            const bookData = response.data;
            if (bookData !== null) {
                nav("/");
            }
        }
        catch (error) {
            console.log("Error: ", error);
        } 
        return;
    }

    return (
        <div className="grid-container">
            <div>
                <p> {name} </p>
            </div>
            <div>
                <p> Price: {price} </p>
                <button onClick={insertPurchase}> Buy </button>
            </div>
        </div>
    );
}