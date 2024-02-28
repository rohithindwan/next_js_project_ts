'use client'
import Link from 'next/link'
import styles from "../page.module.css";

export default function Login() {
  function handleform (e :any){
    // e
    const form = e.target
    let formData = new FormData(form)
    const formObj =Object.fromEntries(formData.entries())
    console.log(formObj)
  }

  return (
    <main className={styles.main}>

      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleform} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="form-group">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </main>
  );
}
