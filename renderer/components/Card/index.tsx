import React from "react";
import { CardType } from "./type";

const Card = ({ className, children }: CardType) => {
  return <div className={className}>{children}</div>;
};

export default Card;
