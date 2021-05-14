import React, { useState } from "react";
import ReactFlow, { Background, removeElements } from "react-flow-renderer";
import { Button } from "react-bootstrap";

const initialElements = [
  {
    id: "1",
    type: "input", // input node
    data: { label: "Input Node" },
    position: { x: 300, y: 25 },
  },
  {
    id: "2",
    type: "default",
    data: { label: "Mid Node 1" },
    position: { x: 100, y: 125 },
  },
  {
    id: "3",
    type: "default",
    data: { label: "Mid Node 2" },
    position: { x: 300, y: 125 },
  },
  {
    id: "4",
    type: "default",
    data: { label: "Mid Node 3" },
    position: { x: 500, y: 125 },
  },
  {
    id: "5",
    type: "output", // output node
    data: { label: "Output Node" },
    position: { x: 300, y: 250 },
  },
  // animated edge
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e1-4", source: "1", target: "4" },
  { id: "e2-5", source: "2", target: "5" },
  { id: "e3-5", source: "3", target: "5" },
  { id: "e4-5", source: "4", target: "5" },
];

const ExampleTwo = () => {
  const [elements, setElements] = useState(initialElements);
  const [selectedElement, setSelectedElement] = useState(null);

  const onElementsRemove = (elementsToRemove) => {
    // console.log(elementsToRemove);
    // setElements((els) => removeElements(elementsToRemove, els));
    return;
  };

  const onSelectionChange = (element) => {
    setSelectedElement(element);
  };

  const onDelete = () => {
    if (selectedElement) {
      console.log(selectedElement);
      setElements((els) => removeElements(selectedElement, els));
    }
  };

  const onClone = () => {
    if (selectedElement) {
      let [node] = selectedElement;
      node.id = Math.random().toString(36).substr(5, 7);
      node.position.x += 200;
      setElements([...elements, node]);
    }
  };

  return (
    <div className="wrapper">
      <h3>Clone & Delete</h3>
      <ReactFlow
        defaultZoom={1.5}
        elements={elements}
        onElementsRemove={onElementsRemove}
        onSelectionChange={onSelectionChange}
        connectionMode="loose"
      >
        <Background color="#aaa" gap={16} />
      </ReactFlow>

      <div className="action-buttons">
        <Button variant="primary" onClick={onClone}>
          Clone
        </Button>{" "}
        <Button variant="danger" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ExampleTwo;
