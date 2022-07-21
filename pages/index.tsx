import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button, ToggleSwitch, PasswordInput } from 'cti-design'
import 'cti-design/dist/tailwind.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>CTI Design</title>
        <meta name="description" content="Design Library for creating awesome telephony apps in the browser." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Welcome to CTI Design!
        </h1>

        <p className={styles.description}>
          Look at the followind awesome components.
        </p>
        <p>
          <Button />
        </p>
        <p>
          <ToggleSwitch enabled={true} onChange={() => true} />
        </p>
        <p>
          <PasswordInput />
        </p>
      </main>
    </div>
  )
}

export default Home
