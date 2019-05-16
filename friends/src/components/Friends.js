import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { friendsFetcher } from "../actions";
import AddFriendForm from "./AddFriendForm";
class Friends extends React.Component {
  componentDidMount() {
    this.props.friendsFetcher();
  }
  render() {
    console.log(this.props.friends);
    return (
      <div className="friends">
        {this.props.friends.map(friend => (
          <p key={friend.id}>{friend.name}</p>
        ))}
        <details>
          <AddFriendForm />
          <summary> Open me to add a friend</summary>
        </details>
      </div>
    );
  }
}
const mapStateToProps = ({ fetching_friends, friends }) => ({
  fetching_friends,
  friends
});

export default withRouter(
  connect(
    mapStateToProps,
    { friendsFetcher }
  )(Friends)
);
