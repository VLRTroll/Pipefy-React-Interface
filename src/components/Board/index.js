import React, { useState } from "react";
import { loadLists } from "../../services/api";
import BoardContext from "./context";
import produce from "immer";

import List from "../List";
import { Container } from "./styles";

const data = loadLists();

export default function Board() {
  const [lists, setLists] = useState(data);
  const move = fromList => (from, to) => {
    setLists(
      produce(lists, draft => {
        let list = draft[fromList].cards;

        const card = list[from];
        list[from] = list[to];
        list[to] = card;
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
