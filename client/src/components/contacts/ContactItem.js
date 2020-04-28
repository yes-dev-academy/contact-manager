import React from "react";

const ContactItem = ({ contact }) => {
  const { id, name, email, type, phone } = contact;

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
    {type.charAt(0).toUpperCase()+ type.slice(1)}
        </span>
      </h3>
      <ul className='list'>
      {email &&(<li>
        <i className="fas fa-envelope"></i>{email}
      </li>)}
      {phone &&(<li>
        <i className="fas fa-phone"></i>{phone}
        </li>)}
      </ul>
      <p>
      <button className='btn btn-primary btn-sm m-2'>Edit</button>
      <button className='btn btn-danger btn-sm'>Delete</button>
      </p>
    </div>
  );
};

export default ContactItem;
