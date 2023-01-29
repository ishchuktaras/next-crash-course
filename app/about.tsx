import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <div className={styles.description}>
      <h1>About</h1>
    </div>
  )
}