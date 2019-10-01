import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { AccountConsumer } from '../../providers/AccountProvider';

const Navbar= () => (
  <AccountConsumer>
    {/* value is defined in the accountprovider as prop */}
    { value => (
         <Menu>
         <Link to='/'>
           <Menu.Item>
             Home
           </Menu.Item>
         </Link>
         <Link to='/account/profile'>
           <Menu.Item>
             {/* value is being passed down from accountprovider, and it's username */}
             { value.username }
           </Menu.Item>
         </Link>
       </Menu>
    ) }
  </AccountConsumer>
)
export default Navbar;