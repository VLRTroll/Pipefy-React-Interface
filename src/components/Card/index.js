import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

import BoardContext from "../Board/context";

import { Container, Label } from "./styles";

export default function Card({ data, index, moveFunc: move }) {
  const ref = useRef();

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: "CARD", index },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  const [, dropRef] = useDrop({
    accept: "CARD",
    hover(item, monitor) {
      const draggedIndex = item.index;
      const targetIndex = index;
      if (draggedIndex === targetIndex)
        return; /* Se estiver por cima do mesmo card */

      const {
        height,
        top
      } = ref.current.getBoundingClientRect(); /* get target screen position */
      const targetVertCenter = top + height / 2;
      const { y: draggedTopOffSet } = monitor.getClientOffset();

      if (
        targetIndex - draggedIndex === -1 &&
        draggedTopOffSet > targetVertCenter
      )
        return; /* se está abaixo do meio do card estritamente anterior */

      if (
        targetIndex - draggedIndex === 1 &&
        draggedTopOffSet < targetVertCenter
      )
        return; /* se está abaixo do meio do card estritamente posterior */

      move(draggedIndex, targetIndex);
      item.index = targetIndex; /* Atualiza o indice do card durante o arrasto */
    }
  });

  dragRef(dropRef(ref)); /* define a referência */
  return (
    <Container ref={ref} dragging={isDragging}>
      <header>
        {data.labels.map(label => (
          <Label key={label} color={label} />
        ))}
      </header>

      <p>{data.content}</p>

      {/* http://avatars.adorable.io/ -> gerador de avatares */}
      {data.user && <img src={data.user} alt="" />}
    </Container>
  );
}
