import React, { useState } from "react";
import { loadLists } from "../../services/api";
import BoardContext from "./context";
import produce from "immer";

import List from "../List";
import { Container } from "./styles";

const data = loadLists();

export default function Board() {
  const [lists, setLists] = useState(data);
  const move = (fromList, toList, from, to) => {
    setLists(
      produce(lists, draft => {
        let dragged = draft[fromList].cards[from];

        draft[fromList].cards.splice(from, 1);
        draft[toList].cards.splice(to, 0, dragged);
      })
    );
  };

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {lists.map((list, idx) => (
          <List key={list.title} index={idx} data={list} />
        ))}
      </Container>
    </BoardContext.Provider>
  );
}
