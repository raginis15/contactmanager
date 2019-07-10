import React, { Component } from "react";
import { Consumer } from "../../Context";
//import uuid from "uuid";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";


//controlled components
class AddContact extends Component {
  state = {
    name: "",
    email: "",
    address: "",
    errors: {}
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, address } = this.state;
    //check for errors
    if (name === "") {
      this.setState({
        errors: {
          name: "Name is required"
        }
      });
      return;
    }
    if (email === "") {
      this.setState({
        errors: {
          email: "Email is required"
        }
      });
      return;
    }
    if (address === "") {
      this.setState({
        errors: {
          address: "Address is required"
        }
      });
      return;
    }
    const newContact = {
      name: name,
      email: email,
      address: address
    };
    const res= await axios.post('https://jsonplaceholder.typicode.com/users',newContact)
    dispatch({ type: "ADD_CONTACT", payload: res.data });


    //clear state//
    this.setState({
      name: "",
      email: "",
      address: "",
      errors: {}
    });
    this.props.history.push("/")
  };

  render() {
    const { name, email, address, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="enter name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="enter email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Address"
                    name="address"
                    placeholder="enter address"
                    value={address}
                    onChange={this.onChange}
                    error={errors.address}
                  />

                  <input
                    type="submit"
                    value="Add contact"
                    className="btn btn-block btn-light"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default AddContact;
