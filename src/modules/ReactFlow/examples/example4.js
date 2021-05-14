import React, { useState, memo } from "react";
import ReactFlow, {
  Background,
  Handle,
  addEdge,
  removeElements,
  getMarkerEnd,
  getSmoothStepPath,
} from "react-flow-renderer";

const initialElements = [
  {
    id: "1",
    type: "loopNode", // input node
    data: { label: "Input Node" },
    position: { x: 300, y: 25 },
  },
  {
    data: { text: "Loop Edge" },
    id: "reactflow__edge-1null-1null",
    source: "1",
    sourceHandle: null,
    target: "1",
    targetHandle: null,
    type: "loopEdge",
  },
];

const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  data,
  arrowHeadType,
  markerEndId,
}) => {
  const edgePath = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    centerX: 400,
    centerY: 100,
  });
  const markerEnd = getMarkerEnd(arrowHeadType, markerEndId);

  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        // d={`M${sourceX},${sourceY} C ${sourceX} ${targetY} ${sourceX} ${targetY} ${targetX},${targetY}`}
        markerEnd={markerEnd}
      />
      <text>
        <textPath
          href={`#${id}`}
          style={{ fontSize: "12px" }}
          startOffset="50%"
          textAnchor="middle"
        >
          {data.text}
        </textPath>
      </text>
    </>
  );
};

const customNode = memo(({ data }) => {
  return (
    <>
      <div>Custom Loop Node</div>
      <Handle
        type="source"
        position="right"
        style={{ top: 10, background: "#555" }}
      />
      <Handle
        type="target"
        position="left"
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
    </>
  );
});

const nodeTypes = {
  loopNode: customNode,
};

const edgeTypes = {
  loopEdge: CustomEdge,
};

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

  const onConnect = (params) => {
    console.log(params);
    let data = addEdge(params, elements);
    data[1].type = "loopEdge";
    data[1].data = { text: "Loop Edge" };
    console.log(data);
    setElements(data);

    //setElements((els) => addEdge(params, els));
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
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
      >
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default ExampleFour;
