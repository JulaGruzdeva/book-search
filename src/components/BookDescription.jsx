import { toJS } from "mobx";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import books from "../store/books";



const BookDescription = () => {
    const bookId = useParams().id;
    const book = toJS(books.data).filter(item => item.id === bookId)[0];
    const bookVolumeInfo = book.volumeInfo;

    return (
        <>
            <Container>
                <Cover src={bookVolumeInfo.imageLinks.thumbnail} />
                <DescriptionBlock>
                    <CategoriaAuthor>{(bookVolumeInfo.categories && bookVolumeInfo.categories.length > 0) ? bookVolumeInfo.categories[0] : 'no categoria'}</CategoriaAuthor>
                    <Description>{bookVolumeInfo.title}</Description>
                    <CategoriaAuthor>{(bookVolumeInfo.authors && bookVolumeInfo.authors.length > 0) ? bookVolumeInfo.authors.join(', ') : 'Unknown'}</CategoriaAuthor>
                    <Description>{bookVolumeInfo.description ? bookVolumeInfo.description : 'No description'}</Description>
                </DescriptionBlock>
            </Container>
        </>
    )
}

export default BookDescription;

const Container = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
    padding-top: 20px;
    margin: 0 auto;

    width: 80%;
    height: fit-content;
    
`

const Cover = styled.img`
    height: calc(10em + 10vw);
    border: 1px solid blacks;
`

const DescriptionBlock = styled.div`
    width: 60%;
`

const CategoriaAuthor = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: calc(0.4em + 1vw);
    margin-left: 1em;
    color: #636261;
`

const Description = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: calc(0.4em + 1vw);
    margin-left: 1em;
    color: #1a1919;
`
