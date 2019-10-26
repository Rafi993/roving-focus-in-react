import React from "react";

import Item from "./Item";
import useRoveFocus from "./useRoveFocus";
import characters from "./onePunchManCharacters";

const List = () => {
  const [focus, setFocus] = useRoveFocus(characters.length);

  return (
    <>
      <ul>
        {characters.map((character, index) => (
          <Item
            key={character}
            setFocus={setFocus}
            index={index}
            focus={focus === index}
            character={character}
          />
        ))}
      </ul>
    </>
  );
};

export default List;
