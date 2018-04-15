import styled from 'styled-components'

const Text = styled.div`
    ${props => props.muted ? "color: #9aa0ac !important;" : ""}
    ${props => props.h1 ? `
        font-size: 4.5rem;
        font-weight: 300;
        line-height: 1.1;
    `: ""}
}
`

export default Text;