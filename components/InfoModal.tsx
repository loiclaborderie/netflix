import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import PlayButton from "./PlayButton";
import FavoritesButton from "./FavoritesButton";
import useInfoModal from "@/hooks/useInfoModal";
import useMovie from "@/hooks/useMovie";

interface InfoModalProps {
  visible?: boolean;
  onClose: any;
}

const InfoModal: React.FC<InfoModalProps> = ({ visible, onClose }) => {
  const [isVisible, setisVisible] = useState(!!visible);
  const { movieId } = useInfoModal();
  const { data = {} } = useMovie(movieId);

  useEffect(() => {
    setisVisible(!!visible);
  }, [visible]);

  const handleClose = useCallback(() => {
    setisVisible(false);
    setTimeout(() => onClose(), 300);
  }, [onClose]);

  if (!visible) {
    return null;
  }
  return <div>InfoModal</div>;
};
export default InfoModal;
