'use client'
import Link from 'next/link'
import styles from "../page.module.css";
import {useRouter} from "next/navigation"
export default function Login() {
  const router = useRouter()
  function navigate (name : string){
    router.push(name)
  }
  
  return (
    <main className={styles.main}>

     <h1>StudentLogin and college login </h1>
     <button onClick={()=>{navigate('/login/studentlogin')}}>go to Student Login</button>
     <button onClick={()=>{navigate('/login/collegelogin')}}>go to college Login</button>

    </main>
  );
}
