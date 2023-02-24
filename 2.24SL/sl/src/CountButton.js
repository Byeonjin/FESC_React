import React, {useState, useEffect} from "react";
import "./CountButton.css"

export function CountButton () {
  const [count, updateCount] = useState(404);
  console.log(count);

  useEffect(() => {
    const reactLogo = document?.querySelector('svg');
    const reactLogoGroup = reactLogo?.querySelector('g');

    reactLogoGroup.style.fill = 'white';
  }) 

  return <button onDoubleClick={() => {
    console.log('더블클릭');
    updateCount(count + 10);
}}>{count}</button>
}

export default CountButton