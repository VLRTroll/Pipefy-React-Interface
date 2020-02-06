import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  background: #fff;
  border-radius: 5px;

  margin-bottom: 10px;
  padding: 15px;

  border-top: 20px solid rgba(230, 236, 245, 0.4);
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  cursor: grab;

  header {
    position: absolute;
    top: -22px;
    left: 15px;
  }

  p {
    font-weight: 500;
    line-height: 20px;
  }

  img {
    height: 24px;
    width: 24px;
    border-radius: 2px;
    margin-top: 5px;
  }

  ${props =>
    props.dragging &&
    css`
      border: 2px dashed rgba(0, 0, 0, 0.2);
      padding-top: 33px;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      cursor: grabbing;

      header,
      p,
      img {
        opacity: 0;
      }
    `}
`;

export const Label = styled.div`
  height: 10px;
  width: 10px;
  margin-right: 5px;

  /* desestrutura as propriedades do componente */
  background: ${({ color }) => color};

  display: inline-block;
  border-radius: 2px;
`;
