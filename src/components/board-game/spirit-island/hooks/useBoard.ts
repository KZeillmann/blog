import { useEffect, useRef } from "react";
import { AVAILABLE_BOARDS, Land, Terrain } from "../constants/boards";

type LandColorMapping = {
  [key in Terrain]: string;
};

const LAND_COLOR_MAPPING: LandColorMapping = {
  SANDS: "rgb(225,182,100)",
  MOUNTAIN: "rgb(119,120,121)",
  JUNGLE: "rgb(83,144,79)",
  WETLAND: "rgb(185,230,229)",
};

const useBoard = () => {
  const graphRef = useRef(null);

  const drawLand = (ctx: CanvasRenderingContext2D, land: Land): void => {
    ctx.fillStyle = LAND_COLOR_MAPPING[land.terrain];
    const { xStart, xEnd, yStart, yEnd } = land.coordinates;
    const width = ((xEnd - xStart) * graphRef.current.width) / 100;
    const height = ((yEnd - yStart) * graphRef.current.height) / 100;
    ctx.fillRect(
      (xStart / 100) * graphRef.current.width,
      (yStart / 100) * graphRef.current.height,
      width,
      height
    );
  };

  // TODO: Take from state
  const chosenBoard = AVAILABLE_BOARDS[0];

  // TODO: Move all canvas stuff to different file
  useEffect(() => {
    const graph = graphRef.current;
    if (graph) {
      const ctx = graph.getContext("2d");
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, graph.width, graph.height);
      chosenBoard.lands.forEach((land) => {
        drawLand(ctx, land);
      });
    }
  }, [graphRef]);

  return {
    graphRef,
  };
};

export default useBoard;
