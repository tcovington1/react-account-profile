import React, { Component } from 'react';

//setup the initial context
const AccountContext = React.createContext();

//create a exportable consumer that can be used in other components
export const AccountConsumer = AccountContext.Consumer;

//define and ship out everything that needs to be global
class AccountProvider extends Component {
  state = {
    username: 'Fooman478',
    dateJoined: '12/12/12',
    membershipLevel: 'Silver',
    updateAccount: (account) => this.updateAccount(account),
  }

  updateAccount = (account) => {
    this.setState({ ...account })
  }

  render() {
    return (
      <AccountContext.Provider value={this.state}>
        { this.props.children }
      </AccountContext.Provider>
    )
  }
}

export default AccountProvider;