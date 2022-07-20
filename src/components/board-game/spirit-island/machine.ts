import { createMachine } from "xstate";
import { Board } from "./constants/boards";
import BaseSpirit from "./constants/spirits";

interface GameState {
  selectedBoard: Board;
  selectedSpirits: BaseSpirit[];
}

const gameMachine = createMachine<GameState>({
  id: "spirit-island-game-loop",
  initial: "init",
  states: {
    init: {
      on: {
        PERFORM_SETUP: "ready",
      },
    },
    ready: {
      on: {
        START_GAMELOOP: "gameloop",
      },
    },
    gameloop: {
      initial: "growth",
      states: {
        growth: {
          on: {
            ADVANCE: "cardSelection",
          },
        },
        cardSelection: {
          on: {
            ADVANCE: "fastPowers",
          },
        },
        fastPowers: {
          on: {
            ADVANCE: "invaderPhase",
          },
        },
        invaderPhase: {
          on: {
            ADVANCE: "slowPowers",
          },
        },
        slowPowers: {
          on: {
            ADVANCE: "timePasses",
          },
        },
        timePasses: {
          on: {
            ADVANCE: "growth",
          },
        },
      },
      always: [
        { target: "win", cond: "didPlayerWin" },
        { target: "loss", cond: "didPlayerLose" },
      ],
    },
    win: {
      type: "final",
    },
    loss: {
      type: "final",
    },
  },
});
