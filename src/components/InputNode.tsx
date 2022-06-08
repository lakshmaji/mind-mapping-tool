import React from "react";
import { Handle, Position } from "react-flow-renderer";

const InputNode = ({ data }: any) => {
  return (
    <div style={{ background: "#9ca8b3", padding: "10px" }}>
      <Handle
        type="target"
        position={Position.Left}
        id={`${data.id}.left`}
      />
      <div id={data.id}>{data.text}</div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${data.id}.right1`}
      />
    </div>
  );
};

export default InputNode;
