import styled from 'styled-components'

export default styled.div`
    position: relative;
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 3px;

    ${props => props.success ? `
        color: #316100;
        background-color: #dff1cc;
        border-color: #d2ecb8;
    ` : ""}
    ${props => props.danger ? `
        color: #6b1110;
        background-color: #f5d2d2;
        border-color: #f1c1c0;
    ` : ""}
`