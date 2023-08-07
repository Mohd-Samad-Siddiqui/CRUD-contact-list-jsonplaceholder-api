import { useState } from "react";
import "./AddUser.css";
import Modal from "../modal/Modal";

const AddUser = ({ onAdd }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="add-modal">
      <button className="addUser-btn" onClick={() => setIsModalOpen(true)}>
        Add New Contact
      </button>
      {isModalOpen && (
        <Modal
          onAdd={onAdd}
          cancel={() => setIsModalOpen(false)}
          close={() => setIsModalOpen(false)}
        ></Modal>
      )}
    </div>
  );
};

export default AddUser;
