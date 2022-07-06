import { Link } from 'react-router-dom';
import styled from "styled-components";

const Card = ({ bookId, cover, categoria, title, author }) => {
    return (
        <>
            <Cards>
                <Link to={`book/${bookId}`} style={{ textDecoration: "none" }}>

                    <BookCover src={cover} alt="book" />
                    <Categories>{(categoria && categoria.length !== 0) ? categoria[0] : 'No categoria'}</Categories>
                    <BookName>{title.split('').slice(0, 43)}...</BookName>
                    <BookAuthor>{author ? author.join(', ') : 'Unknown'}</BookAuthor>
                </Link>
            </Cards>
        </>
    )
}

export default Card;

const Cards = styled.div`
    width: 18%;
    position: relative;
    max-width: 18%;
    min-width: 200px;
    height: calc(19em + 2vw);
    margin-bottom:calc(0.5em + 2vw);

    background: #F9F9F9;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.35);
    border-radius: 10px;
    margin-right: calc(1em + 1vw);
    text-decoration: none;
`
const BookCover = styled.img`
    width: 200px;
    height: 200px;
    object-fit: contain;
`

const Categories = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 0.9em;
    margin-left: 1em;
    color: #636261;
`
const BookName = styled.p`
    height: calc(0.8em + 2vw);
    overflow: hidden;
    text-overflow: ellipsis;
    min-height: 35px;
    max-width: 200px;
    min-width: 50px;    
    margin-left: 1em;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 0.9em;
    color: #3F3F41;
`
const BookAuthor = styled.p`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: 'Roboto';
    font-weight: 300;
    font-size: 0.9em;
    margin-left: 1em;
    margin-right: 1em;
    color: #636261;
`
