import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBtn,
  MDBBadge
} from 'mdb-react-ui-kit';
import Link from 'next/link'

const Navbar = () => {
    const [showNavText, setShowNavText] = useState(false);
    return ( 
        <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer>
        
          
                <Link href='/'>
                  <div className="nav-link ps-0"> <img
              src='https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp'
              height='30'
              alt=''
              loading='lazy'
            /></div>
                </Link>
          

          <MDBNavbarToggler
            type='button'
            data-target='#navbarText'
            aria-controls='navbarText'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavText(!showNavText)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavText}>
            <MDBNavbarNav className='mr-auto mb-2 me-2 mb-lg-0 justify-content-end'>
              <MDBNavbarItem>
                <Link href='/shop'>
                  <div className="nav-link">Shop</div>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link href='/about'>
                  <div className="nav-link">About</div>
                </Link>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <Link href='/contact'>
                  <div className="nav-link">Contact Us</div>
                </Link>
              </MDBNavbarItem>
              <Link href='/account'>
                  <div className="nav-link">Account</div>
                </Link>
            </MDBNavbarNav>

            <div className='position-relative d-inline-block'>
              <Link href='/cart'><MDBIcon fas icon="shopping-cart" size='lg' /></Link>
                
                <MDBBadge color='danger' light pill className='position-absolute translate-middle'
                style={{display:"none"}} >
                {"1"}            
                </MDBBadge>
            </div>
        
          </MDBCollapse>
          
        </MDBContainer>
      </MDBNavbar>
     );
}
 
export default Navbar;