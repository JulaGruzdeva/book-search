import { toJS } from "mobx";
import { observer } from 'mobx-react';

import styled from "styled-components";
import books from "../store/books";
import Card from "./Card";

const Book = observer(() => {
    return (
        <>
            <NumberResult>Found 446 results</NumberResult>
            <CardBlock>
                {toJS(books.data).map((item) => <Card key={item.id} cover={item.volumeInfo.imageLinks.smallThumbnail} categoria={item.volumeInfo.categories} title={item.volumeInfo.title} author={item.volumeInfo.authors} />)}

            </CardBlock>
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
    border: 1px solid black;
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