import styled from 'styled-components'
import Alert from './Alert'

const blue = "#467fcf";
const green = "#5eba00"; 
const orange = "#fd9644";
const red = "#cd201f"; 
const yellow = "#f1c40f";
const teal = "#2bcbba"; 
const purple = "#a55eea";

const Card = styled.div`
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    position: relative;
    margin-bottom: 1.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 40, 100, 0.12);
    border-radius: 3px;

    & ${Alert} {
        border-radius: 0;
        margin: -1px -1px 0;
    }
`

Card.Header = styled.div`
    padding: 1.5rem 1.5rem;
    margin-bottom: 0;
    background-color: rgba(0, 0, 0, 0.03);
    border-bottom: 1px solid rgba(0, 40, 100, 0.12);
    background: none;
    padding: 0.5rem 1.5rem;
    display: flex;
    min-height: 3.5rem;
    align-items: center;
    &:first-child {
        border-radius: calc(3px - 1px) calc(3px - 1px) 0 0;
    }
`

Card.Title = styled.h3`
    margin-bottom: 0;
    font-size: 1.125rem;
    line-height: 1.2;
    font-weight: 400;
    margin-bottom: 1.5rem;
`

Card.Options = styled.div`
    margin-left: auto;
    display: flex;
    order: 100;
    margin-right: -.5rem;
    color: #9aa0ac;
    align-self: center;

    & a {
        margin-left: .5rem;
        color: #9aa0ac;
        display: inline-block;
        min-width: 1rem;
    }
`

Card.Body = styled.div`
    flex: 1 1 auto;
    margin: 0;
    padding: 1.5rem 1.5rem;
    position: relative;
`

Card.Footer = styled.div`
    border-top: 1px solid rgba(0, 40, 100, 0.12);
    color: #6e7687;
    padding: 1rem 1.5rem;
    background: none;

    &:last-child {
        border-radius: 0 0 calc(3px - 1px) calc(3px - 1px);
    }
`

Card.Status = styled.div`
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    height: 3px;
    border-radius: 3px 3px 0 0;
    background: rgba(0, 40, 100, 0.12);
    ${props => props.blue ? `background-color: ${blue} !important;` : ""}
    ${props => props.green ? `background-color: ${green} !important;` : ""}
    ${props => props.orange ? `background-color: ${orange} !important;` : ""}
    ${props => props.red ? `background-color: ${red} !important;` : ""}
    ${props => props.yellow ? `background-color: ${yellow} !important;` : ""}
    ${props => props.teal ? `background-color: ${teal} !important;` : ""}
    ${props => props.purple ? `background-color: ${purple} !important;` : ""}
    ${props => props.left ? `
        right: auto;
        bottom: 0;
        height: auto;
        width: 3px;
        border-radius: 3px 0 0 3px;
    ` : ""}
`

Card.Alert = styled(Alert)`

`

export default Card;