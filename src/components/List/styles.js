import styled from "styled-components";

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px; /* flex-grow, flex-shrink, flex-basis */
  opacity: ${({ done }) =>
    done ? 0.6 : 1}; /* mesmo que props => props.done ? 0.6 : 1 */

  & + div {
    /* componentes que possuem uma 'div' precedente */
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }

    button {
      cursor: pointer; /* link cursor when hovered */
      background: #3b5bfd;

      height: 42px;
      width: 42px;
      border-radius: 18px;

      border: 0;
    }
  }

  ul {
    margin-top: 30px;
  }
`;
