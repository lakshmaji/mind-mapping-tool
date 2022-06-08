import React, { useCallback } from "react";
import ReactFlow, { Node, NodeTypes } from "react-flow-renderer";

import useStore, { NodeData } from "../state/store";
import { getUniqueId } from "../utils";
import InputNode from "./InputNode";

const nodeTypes: NodeTypes = {
    customInput: InputNode,
};

const Wrapper = () => {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect, addNode } =
    useStore();

  const addNewNode = useCallback(() => {
    const newNode: Node<NodeData> = {
      id: `${getUniqueId(10)}`,
      data: { color: `red` },
      type: "customInput",
      position: {
        x: 100,
        y: 100,
      },
      style: {
        width: 150,
      },
    };
    addNode(newNode);
  }, [addNode]);

  return (
    <div style={{ height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodeTypes={nodeTypes}
      />
      <button
        type="button"
        onClick={addNewNode}
        style={{
          position: "absolute",
          display: "flex",
          borderColor: "#000000e3",
          padding: 10,
          left: 10,
          bottom: 10,
          background: "#000000e3",
          color: "#fff",
          zIndex: 10
        }}
      >
        Add Node
      </button>
    </div>
  );
};

export default Wrapper;
