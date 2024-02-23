import React from "react";
import Checklist from "../components/checklist";

function App() {
  const items = [
    { id: 1, text: "Item 1", checked: false },
    { id: 2, text: "Item 2", checked: false },
    { id: 3, text: "Item 3", checked: false },
    { id: 4, text: "Item 4", checked: false },
    // Add more items as needed
  ];

  return (
    <div>
      <Checklist title="Task List lokesh " initialItems={items} />
    </div>
  );
}

export default App;
