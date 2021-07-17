import React from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.email === email && email
    );

    const checkNumber = contacts.find(
      (contact) => contact.number === number && number
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
      id: contacts.length+1,
      name,
      email,
      number,
    };

    dispatch({ type: "Add_Contact", payload: data });
    toast.success("Contact Create Successfully");
    history.push("/")
  };

  return (
    <div className="container">
      <h1 className="display-3 my-5 text-center">Add Contact</h1>
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
                type="text"
                className="mb-3"
                placeholder="Phone Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <div className="d-grid gap-2">
                <Button variant="dark" type="submit">
                  Submit
                </Button>
              </div>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
