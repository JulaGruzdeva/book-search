import styled from "styled-components";
const Select = ({ title, option, selected }) => {
    return (
        <>
            <TitleForm>{title}</TitleForm>
            <SelectForm>
                <OptionForm selected={selected}>{selected}</OptionForm>
                {option.map((item) => <OptionForm value={item}>{item}</OptionForm>)}
            </SelectForm>
        </>
    )
}

export default Select;


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