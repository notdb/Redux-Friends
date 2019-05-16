import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addFriends } from "../actions";
class AddFriendForm extends React.Component {
  state = {
    name: "",
    age: "",
    email: "",
    id: Date.now()
  };

  addFriend = e => {
    e.preventDefault();
    this.props.addFriends(this.state);
  };
  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="friendForm">
        <p>Add Friend Form</p>
        <form onSubmit={this.addFriend}>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            name="age"
            placeholder="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <input
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <button>Add new user</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  adding_friend: state.adding_friend
});

export default connect(
  mapStateToProps,
  { addFriends }
)(AddFriendForm);
