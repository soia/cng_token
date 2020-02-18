import React, { Fragment } from 'react';
import FirstScreen from './first-screen';
import Advantages from './advantages';
import Referals from './referals';
import AirDrop from './airDrop';
// import HowToStart from './how-to-start';
// import Questions from './questions';
// import Orders from './orders/orders-container';

const HomePage = () => (
    <Fragment>
        <FirstScreen />
        <Advantages />
        <Referals />
        <AirDrop />
        {/*
        <WorkWith />
        <Orders />
        <HowToStart />
        <Questions />
        */ }
    </Fragment>
);

export default HomePage;
