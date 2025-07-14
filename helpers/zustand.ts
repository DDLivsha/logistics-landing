import { create } from "zustand";

interface ModalState {
   isModalOpen: boolean;
   isSuccessModalOpen: boolean;
   open: () => void;
   close: () => void;
   openSuccessModal: () => void;
   closeSuccessModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
   isModalOpen: false,
   isSuccessModalOpen: false,
   open: () => set({ isModalOpen: true }),
   close: () => set({ isModalOpen: false }),
   openSuccessModal: () => set({ isSuccessModalOpen: true }),
   closeSuccessModal: () => set({ isSuccessModalOpen: false }),
}))