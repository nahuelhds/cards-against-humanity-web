import React from "react";
import { STAGE_DRAW_BLACK_CARD } from "../constants";

import { ActionableBlackDeck, BlackDeck, BlackCard } from "./Cards";

export const BlackCardView = ({
  stage,
  isMyTurn,
  activeBlackCard,
  handleDrawBlackCard,
}) =>
  stage === STAGE_DRAW_BLACK_CARD && isMyTurn ? (
    <ActionableBlackDeck onClick={handleDrawBlackCard} />
  ) : activeBlackCard ? (
    <BlackCard text={activeBlackCard} />
  ) : (
    <BlackDeck />
  );
