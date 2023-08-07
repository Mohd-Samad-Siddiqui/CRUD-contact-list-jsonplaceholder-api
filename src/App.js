import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import AddUser from "./components/addUsers/AddUser";
import UserList from "./components/userList/UserList";

export default function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => console.log(error));
  };

  const onDelete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    setUserData(userData.filter((user) => user.id !== id));
  };

  const onEdit = async (id, name, city, company) => {
    await axios
      .put(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((data) => {
        const updatedUser = userData.map((user) => {
          if (user.id === id) {
            user.name = name;
            user.address.city = city;
            user.company.name = company;
          }
          return user;
        });
        setUserData(updatedUser);
      })
      .catch((error) => console.log(error));
  };

  const onAdd = async (newContact) => {
    await axios
      .post("https://jsonplaceholder.typicode.com/users", newContact)
      .then((response) => {
        setUserData([...userData, response.data]);
      })
      .catch((error) => console.log(error));
    console.log(newContact);
  };

  return (
    <>
      <div className="App">
        {userData.map((user) => (
          <UserList
            key={user.id}
            user={user}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
      <AddUser onAdd={onAdd} />
    </>
  );
}
