import { observer } from 'mobx-react';
import styled from 'styled-components';
import searchParametrs from '../store/searchParametrs';

const SelectBlock = observer(() => {
    // useEffect(() => {
    //     console.log(books.data);

    // })

    return (
        <CategoriesForm target="_top">
            <TitleForm>Categories</TitleForm>
            <SelectForm defaultValue={'all'} onChange={(event) => searchParametrs.setCategoria(event.target.value)}>
                <OptionForm value='all'>all</OptionForm>
                <OptionForm value="ART">ART</OptionForm>
                <OptionForm value="BIOGRAPHY">BIOGRAPHY</OptionForm>
                <OptionForm value="COMPUTERS">COMPUTERS</OptionForm>
                <OptionForm value="HISTORY">HISTORY</OptionForm>
                <OptionForm value="MRDICAL">MEDICAL</OptionForm>
                <OptionForm value="POETRY">POETRY</OptionForm>
            </SelectForm>

            <TitleForm>Sorting by</TitleForm>
            <SelectForm defaultValue={'relevance'} onChange={(event) => searchParametrs.setSorting(event.target.value)}>
                <OptionForm value='relevance'>relevance</OptionForm>
                <OptionForm>newest</OptionForm>
            </SelectForm>
        </CategoriesForm>
    )
})

export default SelectBlock;

const CategoriesForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const TitleForm = styled.p`
    font-family: 'Roboto';
    font-weight: 300;
    font-size: calc(0.6em + 0.5vw);
    margin-right: calc(0.1em + 1vw);
    color: #636261;
`

const SelectForm = styled.select`
    width: 15%;
    max-width: 400px;
    min-width: 98px;
    height: 40px;
    margin-right: calc(1em + 1vw);
    

    background: #F7F9FD;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);
    border: none;
    outline: none;

    font-weight: 300;
    font-size: calc(0.6em + 0.5vw);
    color: #636261;

`

const OptionForm = styled.option`
    border: none;
    outline: none;
    font-family: 'Roboto';
    font-weight: 300;
    color: #636261;
`