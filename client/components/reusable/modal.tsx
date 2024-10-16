// Modal.js
import { useState } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isModalOpen: (isOpen: boolean) => void;
  content: React.ReactNode;
}

const Modal = ({ isModalOpen, content }: ModalProps) => {
  return (
<<<<<<< HEAD
    <div className="fixed z-[9999] inset-[-100px] bg-[#76898A99] flex items-center justify-center ">
=======
    <div className="fixed z-[100] inset-[-100px] bg-[#76898A99] flex items-center justify-center ">
>>>>>>> a2473ccc5aec94931ec42e010a6f0586ff8cc5de
      <div className="bg-[#FFFFFF] rounded-md">{content}</div>
    </div>
  );
};

export default Modal;
