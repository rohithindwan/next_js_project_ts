'use client'
import Link from 'next/link'
import styles from "../page.module.css";
import { useRouter } from 'next/navigation'

export default function Deshboard() {
    const router = useRouter()
    const nevigate =(name:string)=>{
        router.push(name)
    }


  return (
    <main className={styles.main}>

      <h1>this is Deshboard 11page</h1>
      <button onClick={()=>nevigate("/")}>home page</button>
    </main>
  );
}
