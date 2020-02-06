import React, { useContext } from "react";
import BoardContext from "../Board/context";

import { MdAdd } from "react-icons/md";
import Card from "../Card";
import { Container } from "./styles";

export default function List({ data, index }) {
  const { move } = useContext(BoardContext);

  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button ">
            <MdAdd size={24} color="#fff" />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map((card, idx) => (
          <Card key={card.id} index={idx} data={card} moveFunc={move(index)} />
        ))}
      </ul>
    </Container>
  );
}
