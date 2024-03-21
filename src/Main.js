import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

let Items = [
  { id: 1, checked: false, item: "Item 1" },
  { id: 2, checked: true, item: "Item 2" },
  { id: 3, checked: false, item: "Item 3" },
];

function Main() {
  let [items, setItems] = useState(Items);

  function handleChange(id) {
    let newItems = items.map((item) => {
      if (Number(id) === item.id) {
        if (item.checked) item.checked = false;
        else item.checked = true;
      }
      return item;
    });
    setItems(newItems);
  }

  return (
    <main>
      <ul>
        {items.map((el) => {
          const { id, item, checked } = el;
          return (
            <li className="item" key={id}>
              <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={(e) => {
                  handleChange(id);
                }}
              />
              <label htmlFor={id}>{item}</label>
              <FaTrashAlt role="button" tabIndex="0" />
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Main;
