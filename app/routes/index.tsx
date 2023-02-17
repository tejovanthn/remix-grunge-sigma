import { useEffect } from "react";
import Graph from "graphology";
import { SigmaContainer, useLoadGraph } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";
import { ClientOnly } from "remix-utils";

export const LoadGraph = () => {
  const loadGraph = useLoadGraph();

  useEffect(() => {
    const graph = new Graph();
    graph.addNode("first", {
      x: 0,
      y: 0,
      size: 15,
      label: "My first node",
      color: "#FA4F40",
    });
    loadGraph(graph);
  }, [loadGraph]);

  return null;
};

export const DisplayGraph = () => {
  return (
    <ClientOnly fallback={<p>Server Side</p>}>
      {() => (
        <SigmaContainer style={{ height: "500px", width: "500px" }}>
          <LoadGraph />
        </SigmaContainer>
      )}
    </ClientOnly>
  );
};

export default DisplayGraph;
