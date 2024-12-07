/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { Modal } from "antd";
import { AppContext } from "../context/buble";

const ModalComponent = ({
  buttonText = "Open Modal",
  modalTitle = "Basic Modal",
  children,
  onOk,
  onCancel,
  buttonColor = "green", 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { incrementActionCount } = useContext(AppContext);

  const showModal = () => {
    setIsModalOpen(true);
    incrementActionCount()
  };

  const handleOk = () => {
    if (onOk) onOk();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
    setIsModalOpen(false);
  };

 
  const buttonStyles = {
    green: "px-3 py-1 border border-green-700 text-center text-white bg-green-500 hover:bg-green-700 rounded-lg font-semibold",
    blue: "px-3 py-1 border border-blue-700 text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold",
  };

  return (
    <>
      <button
        onClick={showModal}
        className={buttonStyles[buttonColor] || buttonStyles.green} 
      >
        {buttonText}
      </button>

      <Modal
        title={modalTitle}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalComponent;
