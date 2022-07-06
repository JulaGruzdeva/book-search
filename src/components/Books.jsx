import axios from "axios";
import { toJS } from "mobx";
import { observer } from 'mobx-react';
import { useState } from "react";
import styled from "styled-components";
import books from "../store/books";
import searchParametrs from "../store/searchParametrs";
import Card from "./Card";

async function getMoreBooks(value, startIndex) {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${value}&orderBy=${searchParametrs.sorting}&startIndex=${startIndex}&key=AIzaSyD3JQMqkbc_r5rvK7dwvS9TFteXCT7SzfY`);
    books.addMoreBookData(response.data.items)
    console.log(response)
    console.log(toJS(books.data));
}

const Book = observer(() => {
    const [startIndex, setStartIndex] = useState(10);

    const booksId = []
    const bookArray = () => toJS(books.data).filter((item) => {
        if (booksId.includes(item.id)) {
            return false
        } else {
            booksId.push(item.id)
            return true
        }
    })

    return (
        <>
            <NumberResult>Found {books.number} results</NumberResult>
            <CardBlock>
                {bookArray().map((item) => <Card key={item.id} bookId={item.id} cover={item.volumeInfo.imageLinks.smallThumbnail} categoria={item.volumeInfo.categories} title={item.volumeInfo.title} author={item.volumeInfo.authors} />)}
            </CardBlock>
            <GetMore onClick={() => { getMoreBooks(books.inputValue, startIndex); setStartIndex(startIndex + 10) }}>Load more</GetMore>


        </>
    )
})
export default Book;

const CardBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 90%;
    height: fit-content;
    justify-content: center;
    align-items: center;
`

const NumberResult = styled.p`
    margin-top:calc(1em + 2vw);
    margin-bottom:calc(1em + 2vw);
    text-align: center;
    font-family: 'Roboto';
    font-weight: 300;
    font-size: calc(0.6em + 0.5vw);
    margin-right: calc(0.1em + 1vw);
    color: #636261;
`

const GetMore = styled.button`
    position: relative;
    margin-top: 2%;
    margin-left: 47%;
    margin-bottom: 3%;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: calc(0.6em + 0.5vw);
    color: #636261;
    cursor: pointer;
`