import React from "react";
import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { parse } from "commander";

const EditContact = () => {
  const { id } = useParams();
  const contacts = useSelector((state) => state);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );

  useEffect(() => {
    setName(currentContact.name);
    setEmail(currentContact.email);
    setNumber(currentContact.number);
  }, [currentContact]);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.email === email
    );

    const checkNumber = contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.number === number
    );

    if (!email || !number || !name) {
      return toast.warning("Please fill in all fields!");
    }

    if (checkEmail) {
      toast.error("This Email Already Exists!");
    }

    if (checkNumber) {
      toast.error("This Number Already Exists!");
    }

    const data = {
      id: parseInt(id),
      name,
      email,
      number,
    };

    dispatch({ type: "Update_Contact", payload: data });
    toast.success("Contact Updated Successfully");
    history.push("/");
  };

  return (
    <div className="container">
      {currentContact ? (
        <>
          <h1 className="display-3 my-5 text-center">Edit Contact {id}</h1>
          <div className="row ">
            <div className="col-md-6 shadow mx-auto p-5">
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    className="mb-3"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="email"
                    className="mb-3"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="number"
                    className="mb-3"
                    placeholder="Phone Number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Button variant="dark" type="submit">
                    Update
                  </Button>

                  <Link to="/" className="btn btn-danger mx-3">
                    Cancel
                  </Link>
                </Form.Group>
              </Form>
            </div>
          </div>
        </>
      ) : (
        <h1 className="display-3 my-5 text-center">
          {" "}
          Contact with id {id}is not exists
        </h1>
      )}
    </div>
  );
};

export default EditContact;
