import React, { useCallback, useMemo } from "react";
import axios from "axios";

import useCurrentUser from "@/hooks/useCurrentUser";
// import useFavorites from '@hooks/useFavorites'

interface FavoritesButtonProps {
  movieId: string;
}

const FavoritesButton: React.FC<FavoritesButtonProps> = ({ movieId }) => {
  return <div>FavoritesButton</div>;
};

export default FavoritesButton;
