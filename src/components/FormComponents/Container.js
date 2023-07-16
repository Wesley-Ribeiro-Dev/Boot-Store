import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;

  img {
    margin-bottom: 28px;
    width: 147px;
    align-self: center;
  }

  /* @media screen and (min-width: 800px) {
    img{
      margin-top: 100px;
    }
  } */
`;

export default Container;