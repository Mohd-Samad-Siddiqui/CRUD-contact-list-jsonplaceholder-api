import React, { useState } from "react";
import "./UserList.css";
import {
  FaArrowRight,
  FaArrowLeft,
  FaUserCircle,
  FaTrash,
  FaPen,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaUserTag,
} from "react-icons/fa";

const UserList = ({ user, onDelete, onEdit }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const handleDelete = (userID) => {
    onDelete(userID);
  };

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEdit(user.id, e.target.name.value);
    setIsEdit(false);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`}>
      {!isFlipped ? (
        <div className="front-side">
          <FaUserCircle size={55} color={"#29298A"} />
          {isEdit ? (
            <form onSubmit={handleEditSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Enter new name here..."
                defaultValue={user.name}
              />
              <br />
              <button className="edit-btn">Update</button>
            </form>
          ) : (
            <div>
              <h2>{user.name}</h2>
            </div>
          )}
          <div className="corner">
            <div className="arrow" onClick={handleFlip}>
              <FaArrowRight size={18} />
            </div>
          </div>
          <div className="bottom">
            <div className="delete-icon" onClick={() => handleDelete(user.id)}>
              <FaTrash />
            </div>
            <div className="edit-icon" onClick={() => handleEdit()}>
              <FaPen />
            </div>
          </div>
        </div>
      ) : (
        <div className="back-side">
          <div className="corner">
            <div className="arrow" onClick={handleFlip}>
              <div className="left-arrow">
                {" "}
                <FaArrowLeft size={18} />
              </div>
            </div>
          </div>

          <div className="card-detail">
            <div className="upper-part">
              <h2>
                <FaUserTag size={25} /> {user.username}
              </h2>
            </div>

            <div className="lower-part">
              <p>
                <FaPhone size={13} />
                <span> Phone: </span>
                <a href={"tel:" + user.phone}>{user.phone}</a>
              </p>

              <p>
                <FaEnvelope size={13} />
                <span> Email: </span>
                <a href={"mailto:" + user.email}>{user.email}</a>
              </p>

              <p>
                <FaGlobe size={15} />
                <span> Website: </span>
                <a href={user.website}>{user.website}</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserList;
