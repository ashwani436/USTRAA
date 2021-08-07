import React from 'react'
import ustra from '../Ustra/Image/ustra.jpg';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function Nav() {
    return (
        <div>
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand mx-5" href="/">
      <img src={ustra} alt="" width="100" height="60" style={{borderRadius:"5px"}} class="d-inline-block align-text-center bg-light"/>
            USTRAA
    </a>
    <form class="d-flex">
      
      <input class="form-control mx-5"  style={{width:"500px",height:"50px",background:"lightgray"}}type="search" placeholder="Search for a product" aria-label="Search"/>
      </form>
      <div className="mx-5">
      <a href="/">
      <NotificationsIcon className="mx-3"/>
      <ShoppingCartIcon className="mx-3"/>
      <AccountCircleIcon classame="mx-3"/>
      </a>
      </div>
  </div>
</nav>
        </div>
    )
}

export default Nav;
