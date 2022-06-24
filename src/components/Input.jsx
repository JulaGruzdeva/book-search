import axios from 'axios';
import { toJS } from 'mobx';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import search from '../img/search.svg';
import books from '../store/books';
import searchParametrs from '../store/searchParametrs';


async function getBook(value) {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${value}&orderBy=${searchParametrs.sorting}&key=AIzaSyD3JQMqkbc_r5rvK7dwvS9TFteXCT7SzfY`);
    // console.log(response.data.items);
    books.bookData(response.data.items)
    console.log(toJS(books.data));
}

const Input = () => {
    const [inputValue, setInputValue] = useState('')
    useEffect(() => {
        console.log(inputValue);
        console.log(searchParametrs.categoria)
    })
    return (
        <>
            <Block>
                <Title className='Title'>Search for books</Title>
            </Block>
            <Search>
                <InputSearch type='text' placeholder="name of the book" onChange={(e) => setInputValue(e.target.value)} />
                <EnterButton onClick={() => getBook(inputValue)}><img src={search} alt="" style={{ width: 'calc(0.5em + 2vw)', marginRight: 'calc(0.1em + 1vw)' }} /></EnterButton>
            </Search>
        </>
    )
}

export default Input;


const Block = styled.div`
    justify-content: center;
    text-align: center;
`

const Title = styled.h1`
    font-family: 'Roboto';
    font-weight: 300;
    font-size: calc(1em + 2vw);
    color: #636261;
    margin-top: calc(1em + 2vw);
    margin-bottom:calc(0.5em + 0.5vw);
`

const Search = styled.div`
    position: relative;
    margin: auto;
    width: 50%;
    max-width: 815px;
    min-width: 250px;
    min-height: calc(1.5em + 2vw);
    padding-left: 1em;
    outline: none;

    background: #F7F9FD;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
    /* border-radius: 1.5rem; */
    border: none;
    margin-bottom:calc(1em + 0.5vw);

`
const InputSearch = styled.input`
    position: absolute;
    top: 0;
    bottom: 0;
    width:85%;
      
    border: none;
    background: none;
    outline: none;
    
    font-family: 'Roboto';
    font-size: calc(0.8em + 1vw);
    font-weight: 400;
    color: #636261;

    
    ::placeholder{
        font-family: 'Roboto';
        /* font-size: calc(0.3em + 1vw); */
        font-weight: 300;
        color: #adadad;
    }
`

const EnterButton = styled.button`
    position: absolute;
    right: 0;
    top:0;
    bottom:0;
    border: none;
    background: none;
    cursor: pointer;
`
