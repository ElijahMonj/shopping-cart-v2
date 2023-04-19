import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../../comps/Navbar'
import Link from 'next/link'
import React from 'react'


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
    
    <h1>{coffees[0].title}</h1>
    <Link href='/newfolder/new'>New</Link>
    
    </div>
      
  )
}
