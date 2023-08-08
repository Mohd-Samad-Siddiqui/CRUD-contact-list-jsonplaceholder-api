import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ cancel, close, onAdd }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (
      name.length === 0 ||
      username.length === 0 ||
      phone.length === 0 ||
      email.length === 0 ||
      website.length === 0
    ) {
      alert("All the fields are mandatory");
    } else {
      const newContact = {
        name,
        username,
        email,
        phone,
        website,
      };
      onAdd(newContact);
      cancel();
    }
  };
  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-header">
          <span>
            <h2>Add details for new contact</h2>
          </span>
          <span onClick={() => cancel()}>&times;</span>
        </div>

        <div className="modal-content">
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="number"
              className="form-control"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Website url"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </form>
        </div>
        <div className="modal-footer">
          <div>
            <button
              className="btn submit-btn"
              onClick={(e) => {
                submit(e);
              }}
            >
              Submit
            </button>
            <button className="btn close-btn" onClick={() => close()}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
