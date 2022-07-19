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
    const { xStart, xEnd, yStart, yEnd } = land.coordinates;
    const width = ((xEnd - xStart) * graphRef.current.width) / 100;
    const height = ((yEnd - yStart) * graphRef.current.height) / 100;
    // poor man's border- fill up whole square
    ctx.fillStyle = "#000";
    ctx.fillRect(
      (xStart / 100) * graphRef.current.width,
      (yStart / 100) * graphRef.current.height,
      width - 2,
      height - 2
    );
    // Draw land
    ctx.fillStyle = LAND_COLOR_MAPPING[land.terrain];

    ctx.fillRect(
      (xStart / 100) * graphRef.current.width + 1,
      (yStart / 100) * graphRef.current.height + 1,
      width - 2,
      height - 2
    );
    // Draw text on top of land
    const fontSizePixels = 16;
    const fontFamily = "sans-serif";
    const textStartX = (xStart / 100) * graphRef.current.width + 10;
    const textStartY = (yStart / 100) * graphRef.current.height;
    ctx.font = `${fontSizePixels}px ${fontFamily}`;
    ctx.fillStyle = "#000";
    ctx.fillText(
      `${land.terrain} ${land.id}`,
      textStartX,
      +fontSizePixels,
      width - 2
    );
    ctx.fillText(
      `Invaders:`,
      textStartX,
      textStartY + fontSizePixels * 2,
      width - 2
    );
    ctx.fillText(
      `- Explorers:`,
      textStartX,
      textStartY + fontSizePixels * 3,
      width - 2
    );
    ctx.fillText(
      `- Towns:`,
      textStartX,
      textStartY + fontSizePixels * 4,
      width - 2
    );
    ctx.fillText(
      `- Cities:`,
      textStartX,
      textStartY + fontSizePixels * 5,
      width - 2
    );

    ctx.fillText(
      `Dahan: 0`,
      textStartX,
      textStartY + fontSizePixels * 6,
      width - 2
    );
    ctx.fillText(
      `Presence: 0`,
      textStartX,
      textStartY + fontSizePixels * 7,
      width - 2
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
