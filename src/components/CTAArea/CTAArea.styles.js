import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  max-width: 1180px;
  margin: 20px auto;
  padding: 0;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;