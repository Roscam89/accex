import { useState } from "react";
import "./index.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  const [icon, setIcon] = useState("+");

  function handleIcon() {
    if (icon === "+") {
      setIcon("-");
    } else if (icon === "-") {
      setIcon("+");
    }
  }

  return (
    <div className="App">
      <AccordionItem onHandleIcon={handleIcon} icon={icon} />
    </div>
  );
}

function AccordionItem({ onHandleIcon, icon }) {
  return (
    <div className="accordion">
      <ul>
        {faqs.map((n, i) => (
          <li key={i} className="content-box" style={{ listStyle: "none" }}>
            <div className="item ">
              <p className="number">0{i + 1}</p>
              <p className="title ">{n.title}</p>

              <p className="icon" onClick={onHandleIcon}>
                {icon}
              </p>
              <div className="content-box">
                <p className="text open">{n.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
