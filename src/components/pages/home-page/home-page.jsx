import React, { Fragment } from 'react';
import FirstScreen from './first-screen';
import Advantages from './advantages';
import WorkPrinciples from './work-principles';
import TokenImplementation from './token-implementation/token-implementation';
import SmartContract from './smart-contract';
import Referals from './referals';
import AirDrop from './airDrop';

const HomePage = () => (
    <Fragment>
        <FirstScreen />
        <Advantages />
        <WorkPrinciples />
        <TokenImplementation />
        <SmartContract />
        <Referals />
        <AirDrop />
    </Fragment>
);

export default HomePage;
