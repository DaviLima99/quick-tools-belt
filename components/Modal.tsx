import { useState } from 'react';

interface ModalProps {
    /**
     * Indica se o modal está aberto ou não.
     */
    isOpen: boolean;
  
    /**
     * Função chamada quando o usuário fecha o modal.
     */
    onClose: () => void;
  
    /**
     * Conteúdo do modal.
     */
    children: React.ReactNode;
  }

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition"
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;