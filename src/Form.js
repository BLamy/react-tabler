import styled from 'styled-components'

const Group = styled.div`
    margin-bottom: 1rem;
`;

const Label = styled.label`
    display: block;
    margin-bottom: .375rem;
    font-weight: 600;
    font-size: 0.875rem;
`;

const Control = styled.input`
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 0.9375rem;
    line-height: 1.6;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 40, 100, 0.12);
    border-radius: 3px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`

Control.PlainText = styled.div`
    display: block;
    width: 100%;
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
    margin-bottom: 0;
    line-height: 1.6;
    background-color: transparent;
    border: solid transparent;
    border-width: 1px 0;
`;

export { Group, Label, Control }

