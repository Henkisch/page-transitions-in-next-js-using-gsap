import '../styles/globals.css';
import React  from 'react';
import { SwitchTransition, Transition } from 'react-transition-group';
import pageEnter from "../components/pageEnter";
import pageExit from "../components/pageExit";
import Header from '../components/header';
import Layout from '../components/layout';

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <SwitchTransition>
        <Transition
          key={router.asPath}
          timeout={625}
          in={false}
          onEnter={pageEnter}
          onExit={pageExit}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <Layout>
            <Component
              {...pageProps}
              key={router.asPath}
            />
          </Layout>
        </Transition>
      </SwitchTransition>
    </div>
  )
}

export default MyApp
