import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import CartIcon from '../../cart-icon/cart-icon.components';
import CartDropDown from '../../cart-dropdown/cart-dropdown.components';
import { ReactComponent as MyStoreLogo } from '../../../assets/google-my-business-logo.svg';
import {UserContext} from '../../../context/user.context';
import { CartContext } from '../../../context/card.context';
import {signOutUser} from '../../../utilities/firebase/firebase.utilities'
import {NavigationContainer, NavLinksContainer, NavLink, LogoContainer} from './navigation.styles.jsx';


const Navigation =()=>{
    const {currentUser, } = useContext(UserContext);

    const {isCartOpen} = useContext(CartContext);

    // console.log(currentUser);
    return(
      <Fragment>
        <NavigationContainer>
            <LogoContainer to ='/'>
          <MyStoreLogo className='logo' />
          </LogoContainer>
          <NavLinksContainer>
            <NavLink to='/shop'>
                Shop
            </NavLink>
            {currentUser ? (
                <NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>
              ) : (
                <NavLink to='/auth'>
                Sign In
            </NavLink>
              )}
            <CartIcon />
          </NavLinksContainer>
          {isCartOpen && <CartDropDown />}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
  };

  export default Navigation;