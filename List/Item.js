import React, { useEffect, useRef, useCallback } from "react";

const Item = ({ character, focus, index, setFocus }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (focus) {
      ref.current.focus();
    }
  }, [focus]);

  const handleSelect = useCallback(() => {
    alert(`${character}`);
    // setting focus to that element when it is selected
    setFocus(index);
  }, [character, index, setFocus]);

  return (
    <li
      tabIndex={focus ? 0 : -1}
      role="button"
      ref={ref}
      onClick={handleSelect}
      onKeyPress={handleSelect}
    >
      {character}
    </li>
  );
};

export default Item;
