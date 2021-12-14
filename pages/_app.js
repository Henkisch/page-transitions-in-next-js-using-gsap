import '../styles/globals.css';
import React  from 'react';
import Head from 'next/head';
import { SwitchTransition, Transition } from 'react-transition-group';
import PageEnter from "../components/Animations/PageEnter";
import PageExit from "../components/Animations/PageExit";
import Header from '../components/Header';

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Page transitions using Next JS and GSAP</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <SwitchTransition>
        <Transition
          key={router.asPath}
          timeout={625}
          onEnter={PageEnter}
          onExit={PageExit}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <main className="flex flex-1 justify-center items-center px-6">
            <Component {...pageProps} />
          </main>
        </Transition>
      </SwitchTransition>
    </div>
  )
}

export default MyApp;
