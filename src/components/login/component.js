import React from "react";
import {findDOMNode} from "react-dom";
import bembam from "bembam";
import Screen from "../screen";
import Arrow from "../arrow";
import Button from "../button";
import UserList from "../user-list";
import UserListItem from "../user-list-item";
import UserListForm from "../user-list-form";
import ConfirmModal from "../confirm-modal";
import AlertModal from "../alert-modal";

export default class Login extends React.Component {
  static propTypes = {
    users: React.PropTypes.array,
    userNames: React.PropTypes.array,
    onCreateUser: React.PropTypes.func,
    onDeleteUser: React.PropTypes.func,
    onSelectUser: React.PropTypes.func,
    onSubmit: React.PropTypes.func,
    currentUser: React.PropTypes.string,
    maxUserCount: React.PropTypes.number
  };

  static defaultProps = {
    maxUserCount: Infinity
  };

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      userToDelete: null,
      duplicateUserNameModal: false,
      maxUsersModal: false
    };
  }

  componentDidMount() {
    const {selectedUserListItem} = this.refs;
    if(selectedUserListItem) {
      findDOMNode(selectedUserListItem).scrollIntoView();
    }
  }

  hideDuplicateUserNameModal() {
    this.setState({duplicateUserNameModal: false});
    this.refs.userListForm.focus();
  }

  hidemaxUsersModal() {
    this.setState({maxUsersModal: false});
    this.refs.userListForm.focus();
  }

  showDeleteModal(userToDelete) {
    this.setState({userToDelete});
  }

  hideDeleteModal() {
    this.setState({userToDelete: null});
  }

  updateUsername(event) {
    this.setState({
      username: event.target.value
    });
  }

  selectUser(id) {
    const {onSelectUser} = this.props;
    if(onSelectUser) {
      onSelectUser(id);
    }
  }

  deleteUser(id) {
    const {onDeleteUser} = this.props;
    if(onDeleteUser) {
      onDeleteUser(id);
      this.hideDeleteModal();
    }
  }

  createUser() {
    const {maxUserCount, onCreateUser, users} = this.props;
    const username = this.state.username.trim();

    if(users.some((user) => user.name === username)) {
      this.setState({
        duplicateUserNameModal: true
      });
      this.refs.userListForm.blur();
    } else if(this.props.users.length >= maxUserCount) {
      this.setState({
        maxUsersModal: true
      });
      this.refs.userListForm.blur();
    } else if(onCreateUser) {
      onCreateUser(this.state.username);
      this.setState({
        username: ""
      });
    }
  }

  submit() {
    const {currentUser, onSubmit} = this.props;
    if(currentUser && onSubmit) {
      onSubmit();
    }
  }

  render() {
    const {users, userNames, userIndex, currentUser, onSubmit, maxUserCount, className} = this.props;
    const {selectedUserId, username, userToDelete, duplicateUserNameModal, maxUsersModal} = this.state;
    const cn = bembam("Login", className);

    return (
      <Screen {...this.props} className={cn} onSubmit={null}>
        <div className={cn.el("header")}>
          <div className={cn.el("header-text")}>Create Up to {maxUserCount} Users</div>
        </div>
        <div className={cn.el("form-container")}>
          <UserListForm
            ref="userListForm"
            value={username}
            onChange={this.updateUsername.bind(this)}
            onSubmit={this.createUser.bind(this)}
            autofocus
          />
        </div>
        <div className={cn.el("user-list")}>
          <UserList>
            {userNames.map((userName) => {
              const user = userIndex[userName];
              const selected = user.id === currentUser;
              return (
                <UserListItem
                  key={user.id}
                  selected={selected}
                  onClick={this.selectUser.bind(this, user.id)}
                  onRemoveClick={this.showDeleteModal.bind(this, user)}
                  ref={selected ? "selectedUserListItem" : null}
                >
                  {user.name}
                </UserListItem>
              );
            })}
          </UserList>
        </div>
        <div className={cn.el("footer")}>
          <Arrow className={cn.el("login-button")} onClick={this.submit.bind(this)} disabled={!currentUser}>
            Continue
          </Arrow>
        </div>

        <ConfirmModal
          open={!!userToDelete}
          onConfirm={userToDelete && this.deleteUser.bind(this, userToDelete.id)}
          onCancel={this.hideDeleteModal.bind(this)}
        >
          Are you sure you want to delete the user <strong>{userToDelete && userToDelete.name}</strong>?<br/>
          This action cannot be undone.
        </ConfirmModal>

        <AlertModal open={duplicateUserNameModal} onClose={this.hideDuplicateUserNameModal.bind(this)}>
          A user with that name already exists.
        </AlertModal>

        <AlertModal open={maxUsersModal} onClose={this.hidemaxUsersModal.bind(this)}>
          You have reached the maximum number of users.
        </AlertModal>
      </Screen>
    );
  }
}
