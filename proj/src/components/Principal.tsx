import React,{useState} from "react";
import Home from "../pages/home.page";
import BookForm from './BookForm';
import BookList from '../BookList';
import {Book} from '../interfaces/book.interface';

const Principal = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const addBook = (book: Book) => {
        setBooks((prevBooks) => [...prevBooks, book]);
    };
    return (
        <div className="App">
            <h1>Cadastro de livros</h1>
            <BookForm onAddBook={addBook} />
            <BookList books={books} />
        </div>
    );
};
   
export default Principal