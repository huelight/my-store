import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import CartIcon from '../../cart-icon/cart-icon.components';
import CartDropDown from '../../cart-dropdown/cart-dropdown.components';
import { ReactComponent as MyStoreLogo } from '../../../assets/google-my-business-logo.svg';
import {UserContext} from '../../../context/user.context';
import { CartContext } from '../../../context/card.context';
import {signOutUser} from '../../../utilities/firebase/firebase.utilities'
import './navigation.styles.scss';


const Navigation =()=>{
    const {currentUser, } = useContext(UserContext);

    const {isCartOpen} = useContext(CartContext);

    // console.log(currentUser);
    return(
      <Fragment>
        <div className='navigation'>
            <Link className='nav-logo' to ='/'>
          <MyStoreLogo className='logo' />
          </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
                Shop
            </Link>
            {currentUser ? (
                <span className='nav-link' onClick={signOutUser}>Sign Out</span>
              ) : (
                <Link className='nav-link' to='/auth'>
                Sign In
            </Link>
              )}
            <CartIcon />
          </div>
          {isCartOpen && <CartDropDown />}
        </div>
        <Outlet />
      </Fragment>
    )
  };

  export default Navigation;