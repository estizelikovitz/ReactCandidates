import React, { Component } from 'react';
import { Route } from 'react-router';
import Home from './Pages/Home';
import AddCandidate from './Pages/AddCandidate';
import Refused from './Pages/Refused';
import Layout from './Layout';
import Confirmed from './Pages/Confirmed';
import Pending from './Pages/Pending';
import PendingDetails from './Pages/PendingDetails';
import { ContextComponent } from './Context';



export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <ContextComponent>
                <Layout>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/addcandidate' component={AddCandidate} />
                    <Route exact path='/refused' component={Refused} />
                    <Route exact path='/confirmed' component={Confirmed} />
                    <Route exact path='/pending' component={Pending} />
                    <Route exact path='/pendingdetails/:id/' component={PendingDetails} />
                </Layout>
            </ContextComponent>
        );
    }
}