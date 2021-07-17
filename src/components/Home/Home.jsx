import React from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
const Home = () => {
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch()
  const handleDelete = (id) => {
      dispatch({type:"Remove_Contact",payload:id});
      toast.success("Contact deleted successfully !")
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 d-flex justify-content-end my-5">
          <Link to="/add" className="btn btn-outline-dark">
            Add Contact
          </Link>
        </div>
      </div>

      <Table striped bordered hover size="sm">
        <thead className="bg-dark text-white">
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td> {contact.name} </td>
              <td> {contact.email} </td>
              <td> {contact.number} </td>
              <td>
                <Link to={`/edit/${contact.id}`} className="btn btn-primary mx-2">Edit</Link>
                <Button variant="danger" onClick={()=>handleDelete(contact.id)}>
                  Delete
                </Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
