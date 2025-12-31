import { useState } from "react";

export default function App() {
  const [nodes, setNodes] = useState([
    { id: "start", type: "start", label: "Start" }
  ]);

  const addNode = (type) => {
    setNodes((prev) => [
      ...prev,
      { id: Date.now().toString(), type, label: type.toUpperCase() }
    ]);
  };

  const updateLabel = (id, value) => {
    setNodes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, label: value } : n))
    );
  };

  const deleteNode = (id) => {
    if (id === "start") return;
    setNodes((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <div className="app">
      <h2>Workflow Builder UI</h2>

      <div className="controls">
        <button onClick={() => addNode("action")}>Add Action</button>
        <button onClick={() => addNode("end")}>Add End</button>
      </div>

      <div className="canvas">
        {nodes.map((node) => (
          <div key={node.id} className={`node ${node.type}`}>
            <input
              value={node.label}
              onChange={(e) => updateLabel(node.id, e.target.value)}
            />
            {node.id !== "start" && (
              <button onClick={() => deleteNode(node.id)}>🗑</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
