import useSwr from "swr";
import fetcher from "@/libs/fetcher";
import { create } from "zustand";

export interface modalStoreInterface {
  movieId?: string;
  isOpen: boolean;
  openModal: (movieId: string) => void;
  closeModal: () => void;
}

const useInfoModal = create<modalStoreInterface>((set) => ({
  movieId: undefined,
  isOpen: false,
  openModal: (movieId: string) => set({ movieId, isOpen: true }),
  closeModal: () => set({ movieId: undefined, isOpen: false }),
}));

export default useInfoModal;
