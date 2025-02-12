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
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/2">
        <div className="flex justify-end mb-4">
          <button
            className="text-gray-600 hover:text-gray-900 transition"
            onClick={onClose}
          >
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;