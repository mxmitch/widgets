import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const options = [
  {
    label: "The Color Red",
    value: "red"
  },
  {
    label: "The Color Green",
    value: "greed"
  },
  {
    label: "The Color Blue",
    value: "blue"
  }
];

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework."
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers."
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components."
  }
];

export default () => {
  const [selected, setSelected] = useState("");

  return (
    <div className="ui container">
      <div className="ui row">
        <Header />
        <Route path="/">
          <Accordion items={items} />
        </Route>
        <Route path="/list">
          <Search />
        </Route>
        <Route path="/dropdown">
          <Dropdown
            label="Select a color"
            options={options}
            selected={selected}
            onSelectedChange={setSelected}
          />
        </Route>
        <Route path="/translate">
          <Translate />
        </Route>
      </div>
    </div>
  );
};
