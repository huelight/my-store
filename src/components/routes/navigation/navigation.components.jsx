import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as MyStoreLogo } from '../../../assets/google-my-business-logo.svg';
import {UserContext} from '../../../context/user.context';
import {signOutUser} from '../../../utilities/firebase/firebase.utilities'
import './navigation.styles.scss';


const Navigation =()=>{
    const {currentUser, } = useContext(UserContext);

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

          </div>
        </div>
        <Outlet />
      </Fragment>
    )
  };

  export default Navigation;