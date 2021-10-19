import React from "react";
import Gle from "../toggle";
import "antd/dist/antd.css";


const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.address}</td>
      <td>{contact.phoneNumber}</td>
      <td>{contact.email}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
        edit
    

        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          del
        </button>
        <Gle/>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;