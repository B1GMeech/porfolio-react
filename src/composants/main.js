import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Acceuil from './acceuil';
import cv from './cv';
import contact from './contact';
import projet from './projet';
const Main = () => (
    <Switch>
        <Route exact path="/" component={Acceuil}></Route> 
        <Route exact path="/projets" component={projet}></Route> 
        <Route exact path="/contact" component={contact}></Route> 
        <Route exact path="/cv" component={cv}></Route> 
    </Switch>
);

export default Main;