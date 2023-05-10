import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../../comps/NavigationBar'
import Link from 'next/link'
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

export const getStaticProps = async () => {
  const resp = await fetch('https://api.sampleapis.com/coffee/hot');
  const json = await resp.json();

  return {
    props: {coffees:json}
  }
}

export default function Home({coffees}) {
  return (
    <div className='container'>
    <Carousel>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="https://c4.wallpaperflare.com/wallpaper/348/12/872/sunset-mountains-minimal-4k-wallpaper-preview.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src="https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-thumb.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
      
        <img
          className="d-block w-100"
          src="https://c4.wallpaperflare.com/wallpaper/929/329/169/artwork-digital-art-landscape-sunset-wallpaper-preview.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
    <div className='d-flex justify-content-between mt-3 mb-1'>
      <h5 className='my-auto'>Flash Sale</h5>
      <Link href='/shop' className='btn btn-light'>View All</Link>
    </div>
    <Row xs={2} md={2} lg={4} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
        <Link href={'/'+idx} passHref>
        <Card>
            <Card.Img variant="top" src="https://asset.promod.com/product/150067-gz-1678227484.jpg?auto=webp&quality=80&width=1920" />
            <Card.Body>
              <Card.Title className='text-dark'>Card title</Card.Title>
              <Card.Text className='price mb-0 text-dark'>
                PHP 1,000
              </Card.Text>
              <Card.Text className='d-flex text-secondary'>
                <s className='me-1'>
                  1500
                </s>
                <small className=''>
                  -33%
                </small>
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
         
        </Col>
      ))}
    </Row>
    
    <h1>{coffees[0].title}</h1>
    <Link href='/newfolder/new' className=''>New</Link>
    
    </div>
      
  )
}
