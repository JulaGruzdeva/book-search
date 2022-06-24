import styled from "styled-components";
// import cover from "../img/cover.png";


const Card = ({ cover, categoria, title, author }) => {
    return (
        <>
            <Cards>
                <BookCover src={cover} alt="book" />
                <Categories>{(categoria && categoria.length !== 0) ? categoria[0] : 'No categoria'}</Categories>
                <BookName>{title}</BookName>
                <BookAuthor>{author ? author.join(', ') : 'Unknown'}</BookAuthor>

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
    /* min-height: calc(20em + 2vw); */
    height: calc(20em + 2vw);
    margin-bottom:calc(0.5em + 2vw);


    background: #F9F9F9;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.35);
    border-radius: 10px;
    margin-right: calc(1em + 1vw);

`
const BookCover = styled.img`
    width: 200px;
    height: 200px;
    object-fit: contain;
    

`
const Categories = styled.p`
 
    /* margin-bottom:calc(0.1em + 1vw); */

    font-family: 'Roboto';
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
    color: #636261;
    


`
