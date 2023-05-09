import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../assets/styles/components/views/Landing.module.css"

function LandingPage() {
  return (
    <div>
      <div>Esto es la Landing Page</div>

      <Link to = "/home">
      <button>go home</button>
      </Link>
    </div>
  )
}

export default LandingPage
