import React, { useContext } from "react";
import ContactContext from "../../context/contacts/contactContext";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;
  const { id, name, email, type, phone } = contact;
  const onDelete = () => {
    deleteContact(id);
    clearCurrent();
  };
  const onEdit = () => {
    setCurrent(contact);
  };
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left m-1 p-0">
        {name}{" "}
        <span
          className={
            "badge " +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="far fa-envelope"></i>
            {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone-alt"></i>
            {phone}
          </li>
        )}
      </ul>
      <p>
        <button className="btn btn-primary btn-sm m-2" onClick={onEdit}>
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

export default ContactItem;
