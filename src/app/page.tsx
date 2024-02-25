'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { Component, useState } from "react";
import Link from 'next/link'

export default function Home() {
 const [count ,setCount]=useState(0)
  
  return (
    <main className={styles.main}>

      <div>next js project{count}</div>
      <button onClick={()=>{setCount(count +1)}}>add one</button>
      <button onClick={()=>{setCount(count -1)}}>subtrac one</button>
      <Link href="/dashboard">Dashboard</Link>
    </main>
  );
}
