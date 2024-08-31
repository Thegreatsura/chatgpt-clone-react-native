import { create } from "zustand";

type DialogState = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
};

export const useDialog = create<DialogState>((set) => ({
  isOpen: false,
  setIsOpen: (state) => {
    set({ isOpen: true });
  },
}));
