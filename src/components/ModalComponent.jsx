/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { Modal } from "antd";
import { AppContext } from "../context/buble";
import { FileText, WhatsappLogo, EnvelopeSimple } from "@phosphor-icons/react"; // Tambahkan ikon Email dari Phosphor Icons

const ModalComponent = ({
  modalTitle = "Basic Modal",
  children,
  onOk,
  onCancel,
  iconType = "file", // Properti untuk menentukan jenis ikon
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { incrementActionCount } = useContext(AppContext);

  const showModal = () => {
    setIsModalOpen(true);
    incrementActionCount();
  };

  const handleOk = () => {
    if (onOk) onOk();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
    setIsModalOpen(false);
  };

  // Pemetaan ikon berdasarkan `iconType`
  const iconMapping = {
    file: (
      <FileText
        size={25}
        weight="fill"
        className="text-blue-500 cursor-pointer"
      />
    ),
    whatsapp: (
      <WhatsappLogo
        size={25}
        weight="fill"
        className="text-green-500 cursor-pointer"
      />
    ),
    email: (
      <EnvelopeSimple
        size={25}
        weight="fill"
        className="text-blue-500 cursor-pointer"
      />
    ), // Ikon Email
  };

  

  return (
    <>
      {/* Ikon yang ditampilkan sesuai `iconType` */}
      <div onClick={showModal}>
        {iconMapping[iconType] || iconMapping.file}{" "}
        {/* Default ke file jika tidak ditemukan */}
      </div>

      <Modal
        title={modalTitle}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
         className="!w-[800px]"
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalComponent;
