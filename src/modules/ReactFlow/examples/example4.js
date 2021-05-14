import React, { useState } from "react";
import ReactFlow, { Background, removeElements } from "react-flow-renderer";

const initialElements = [
  {
    id: "1",
    type: "input", // input node
    data: { label: "Input Node" },
    position: { x: 300, y: 25 },
  },
];

const ExampleFour = () => {
  const [elements, setElements] = useState(initialElements);
  // eslint-disable-next-line
  const [selectedElement, setSelectedElement] = useState(null);

  const onElementsRemove = (elementsToRemove) => {
    console.log(elementsToRemove);
    setElements((els) => removeElements(elementsToRemove, els));
  };

  const onSelectionChange = (element) => {
    setSelectedElement(element);
  };

  // const onDelete = () => {
  //   if (selectedElement) {
  //     console.log(selectedElement);
  //     setElements((els) => removeElements(selectedElement, els));
  //   }
  // };

  // const onClone = () => {
  //   if (selectedElement) {
  //     let [node] = selectedElement;
  //     node.id = Math.random().toString(36).substr(5, 7);
  //     node.position.x += 200;
  //     setElements([...elements, node]);
  //   }
  // };

  return (
    <div className="wrapper">
      <h3>Loop</h3>
      <ReactFlow
        defaultZoom={1.5}
        elements={elements}
        onElementsRemove={onElementsRemove}
        onSelectionChange={onSelectionChange}
      >
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default ExampleFour;
