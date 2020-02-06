import React, { useRef, useContext } from "react";
import { useDrag, useDrop } from "react-dnd";

import BoardContext from "../Board/context";
import { Container, Label } from "./styles";

export default function Card({ data, index, listIndex }) {
  const ref = useRef();
  const { move } = useContext(BoardContext);

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: "CARD", index, listIndex },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  const [, dropRef] = useDrop({
    accept: "CARD",
    hover(item, monitor) {
      const draggedList = item.listIndex;
      const targetList = listIndex;
      const draggedIndex = item.index;
      const targetIndex = index;
      if (draggedIndex === targetIndex && draggedList === targetList)
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

      move(draggedList, targetList, draggedIndex, targetIndex);
      item.index = targetIndex; /* Atualiza o indice do card durante o arrasto */
      item.listIndex = targetList; /* atualiza o indice da lista do card que está sendo arrastado */
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
