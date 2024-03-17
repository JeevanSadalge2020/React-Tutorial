import { useState } from "react";

let Items = [
  { id: 1, checked: false, item: "Item 1" },
  { id: 2, checked: false, item: "Item 2" },
  { id: 3, checked: false, item: "Item 3" },
];

function Main() {
  let [items, setItems] = useState(Items);

  return (
    <main>
      <ul>
        {items.map((ele) => {
          const { id, item, checked } = ele;
          return (
            <li>
              <input type="checkbox" id={id} key={id} checked={checked} />
              <label htmlFor={id}>{item}</label>
              <button>Delete</button>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Main;
