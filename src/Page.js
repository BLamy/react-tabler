import styled from 'styled-components'

const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100%;
`

Page.Content = styled.div`
  margin: .75rem 0;
  @media (min-width: 768px) {
    margin: 1.5rem 0;
  }
`

export default Page;