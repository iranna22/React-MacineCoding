import "./styles.css";
import { useState } from "react";

export default function App() {
  const [list1, setList1] = useState([
    { title: "item1", checked: false },
    { title: "item2", checked: false },
    { title: "item3", checked: false },
  ]);
  const [list2, setList2] = useState([
    { title: "itemA", checked: false },
    { title: "itemB", checked: false },
    { title: "itemC", checked: false },
  ]);
  function handleCheckedChange(idx) {
    const updatedlist1 = [...list1];
    updatedlist1[idx].checked = !updatedlist1[idx].checked;
    setList1(updatedlist1);
  }
  function handleSwap() {
    updatedList1 = [...list1];
    updatedList2 = [...list2];
    updatedList1.forEach((item, idx) => {
      if (item.checked) {
        const temp = updatedList1[idx].title;
        updatedList1[idx].title = updatedList2[idx].title;
        updatedList2[idx].title = temp;
      }
      updatedList1[idx].checked = false;
    });
    setList1(updatedList1);
    setList2(updatedList2);
  }
  return (
    <div className="App">
      <div>
        <h1>list1</h1>
        <ul>
          {list1.map((item, idx) => (
            <li key={idx}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheckedChange(idx)}
              />
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <h1>list2</h1>
      <div>
        {list2.map((item, idx) => (
          <li key={idx}>{item.title}</li>
        ))}
      </div>
      <button onClick={handleSwap}>Swap</button>
    </div>
  );
}
