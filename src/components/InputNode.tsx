import React, { ChangeEvent, FC, useCallback } from "react";
import { Handle, Position, NodeProps } from "react-flow-renderer";
import useStore, { NodeData } from "../state/store";

const InputNode: FC<NodeProps<NodeData>> = ({ data, id }) => {
  const { updateNode } = useStore();
  const onChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      updateNode(id, evt.target.value);
    },
    [id, updateNode]
  );
  return (
    <div style={{ background: "#9ca8b3" }}>
      <Handle type="target" position={Position.Left} id={`${id}.left`} />
      <div style={{ display: "flex" }}>
        <input
          type="text"
          onChange={onChange}
          id={id}
          style={{ width: "100%", flex: 1 }}
        />
      </div>
      <Handle type="source" position={Position.Right} id={`${id}.right1`} />
    </div>
  );
};
export default InputNode;
