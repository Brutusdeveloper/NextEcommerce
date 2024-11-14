'use client';
import React, { Children } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from '@/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import LoadingPage from './Spinner';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return( 
    <Provider store={store}>
      <PersistGate loading={<LoadingPage/>} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}

export default Layout
