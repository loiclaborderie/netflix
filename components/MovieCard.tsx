import React from "react";
import { isEmpty } from "lodash";

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  return <div className="text-white">TEST</div>;
};
export default MovieCard;
