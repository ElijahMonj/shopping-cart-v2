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

const Navbar = () => {
    const [showNavText, setShowNavText] = useState(false);
    return ( 
        <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer>
        <MDBNavbarBrand href='#'>
            <img
              src='https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp'
              height='30'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>

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
                <MDBNavbarLink active aria-current='page' href='#'>
                  Shop
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>About</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Contact Us</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Account</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <div className='position-relative d-inline-block'>
                <MDBIcon fas icon="shopping-cart" size='lg'/>
                <MDBBadge color='danger' light pill className='position-absolute translate-middle'>
                {"1"}            
                </MDBBadge>
            </div>
        
          </MDBCollapse>
          
        </MDBContainer>
      </MDBNavbar>
     );
}
 
export default Navbar;