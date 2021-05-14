import React, { useState } from "react";
import ReactFlow, { Background, removeElements } from "react-flow-renderer";

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

const ExampleOne = () => {
  const [elements, setElements] = useState(initialElements);

  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));

  return (
    <div className="wrapper">
      <h3>Mutliplex & Demultiplex</h3>
      <ReactFlow
        defaultZoom={1.5}
        elements={elements}
        onElementsRemove={onElementsRemove}
      >
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default ExampleOne;
