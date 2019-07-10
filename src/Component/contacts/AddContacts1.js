import React, { Component } from "react";
//uncontrolled components using props
class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.addressInput = React.createRef();
  }
  onSubmit = e => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      address: this.addressInput.current.value
    };
    console.log(contact);
  };
  static defaultProps = {
    name: "Brad pitt",
    email: "brad@gmail.com",
    address: "USA"
  };
  render() {
    const { name, email, address } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control form-cntrol-lg"
                placeholder="enter Name"
                name="name"
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Name</label>
              <input
                type="email"
                className="form-control form-cntrol-lg"
                placeholder="enter email"
                name="email"
                defaultValue={email}
                ref={this.emailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Name</label>
              <input
                type="text"
                className="form-control form-cntrol-lg"
                placeholder="enter address"
                name="address"
                defaultValue={address}
                ref={this.addressInput}
              />
            </div>
            <input
              type="submit"
              value="Add contact"
              className="btn btn-block btn-light"
            />
          </form>
        </div>
      </div>
    );
  }
}
export default AddContact;
