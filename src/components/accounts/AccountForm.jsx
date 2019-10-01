import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { AccountConsumer } from '../../providers/AccountProvider';

class AccountForm extends Component {
  // getting this from below ConnectedAccountForm 
  state = { 
    username: this.props.username, 
    membershipLevel: this.props.membershipLevel }

  // handleChange = (e) => {
  //   const { name, value } = e.target
  //   this.setState({ [name]: value})
  // }

  handleChange = (e, { name, value }) => this.setState({ [name]: value})

  handleSubmit = (e) => {
    e.preventDefault();
    const account = { ...this.state }
    this.props.updateAccount(account)

  }

  render() {
    const { username, membershipLevel, } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="New Username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <Form.Select
          label="Membership Level"
          name="membershipLevel"
          value={membershipLevel}
          onChange={this.handleChange}
          options={membershipOptions}
        />
        <Form.Button color="blue">Save</Form.Button>
      </Form>
    )
  }
}

const ConnectedAccountForm = (props) => {
  return (
    <AccountConsumer>
      { value => (
        <AccountForm 
          { ...props }
          username={value.username}
          membershipLevel={value.membershipLevel}
          updateAccount={value.updateAccount}
        />
      )}
    </AccountConsumer>
  )
}

const membershipOptions = [
  { key: "b", text: "Bronze", value: "Bronze", },
  { key: "s", text: "Silver", value: "Silver", },
  { key: "g", text: "Gold", value: "Gold", },
  { key: "p", text: "Platinum", value: "Platinum", },
];

export default ConnectedAccountForm;