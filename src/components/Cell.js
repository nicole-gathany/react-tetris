import React from "react";
import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../tetrominos";

const Cell = ({ type }) => (
  <StyledCell type={"L"} color={TETROMINOS["L"].color}>
    cell
  </StyledCell>
);

//I have to say styled components is a really interesting way of styling. it's almost like i'm creating my own library

export default Cell;
