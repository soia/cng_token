import React, { Fragment } from 'react';
import FirstScreen from './first-screen';
import Advantages from './advantages';
import WorkPrinciples from './work-principles';
import Referals from './referals';
import AirDrop from './airDrop';

const HomePage = () => (
    <Fragment>
        <FirstScreen />
        <Advantages />
        <WorkPrinciples />
        <Referals />
        <AirDrop />
    </Fragment>
);

export default HomePage;
