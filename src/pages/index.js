import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../../comps/Navbar'
import Link from 'next/link'
import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdb-react-ui-kit';

export const getStaticProps = async () => {
  const resp = await fetch('https://api.sampleapis.com/coffee/hot');
  const json = await resp.json();

  return {
    props: {coffees:json}
  }
}

export default function Home({coffees}) {
  return (
    <div>
    <div className='container p-0'>
    <MDBCarousel showIndicators>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://mdbootstrap.com/img/new/slides/041.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://mdbootstrap.com/img/new/slides/042.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/new/slides/043.jpg'
        alt='...'
      />
    </MDBCarousel>
    </div>
    <div className='container'>
    <div className='d-flex justify-content-between'>
      <div>Flash Sale</div>
      <div>Shop all</div>
    </div>
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>
            T-Shirt</MDBCardTitle>
            <div className='d-flex'>
              <h2 className='mb-0'>100</h2>
              <small className='text-muted mt-auto'><s>200</s></small>
            </div>
          </MDBCardBody>
          <MDBCardFooter className='d-flex justify-content-center'>
            <MDBBtn rounded className='mx-2' color='info'>
            View Item <MDBIcon fas icon="chevron-right" size='md' className='ms-1'/>
            </MDBBtn>
            <MDBBtn rounded className='mx-2' color='info'>
            Add to cart <MDBIcon fas icon="cart-plus" size='md' className='ms-1'/>
            </MDBBtn>

          </MDBCardFooter>
        </MDBCard>
      </MDBCol>



















      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/043.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This card has supporting text below as a natural lead-in to additional content.
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter >
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100'>
          <MDBCardImage
            src='https://mdbootstrap.com/img/new/standard/city/042.webp'
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              This is a wider card with supporting text below as a natural lead-in to
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </MDBCardFooter>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
    
    <h1>{coffees[0].title}</h1>
    <Link href='/newfolder/new'>New</Link>
    
    </div>
      
  )
}
