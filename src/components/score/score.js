import React from "react";
import "./score.css";

const score = props => <h2 className="score"> {props.name}: {props.score}</h2>;

export default score;
