/* eslint-disable no-unused-expressions */
import React, {Component, Fragment} from 'react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/navBar/NavBar';
import { Container } from 'semantic-ui-react';
import { Route, Switch, withRouter } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import EventDetailPage from '../../features/events/EventDetailed/EventDetailedPage';
import EventForm from '../../features/events/EventForm/EventForm';
import SettingsDashboard from '../../features/user/Settings/SettingDashboard'
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage'
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard'
import TestComponent from '../../features/testarea/TestComponent';
import ModalManager from '../../features/modals/ModalManager';

class App extends Component{
  render(){
    return (
        <Fragment>
            <ModalManager />
            <Route exact path='/' component={HomePage} />
            <Route 
              path='/(.+)'
              render={()=>(
              <Fragment>
                <NavBar/>
                <Container className="main">
                  <Switch key={this.props.location.key}>
                  <Route exact path='/events' component={EventDashboard} />
                  <Route path='/events/:id' component={EventDetailPage} />
                  <Route path='/people' component={PeopleDashboard} />
                  <Route path='/profile/:id' component={UserDetailedPage} />
                  <Route path='/settings' component={SettingsDashboard} />
                  <Route path={['/createEvent', '/manage/:id']} component={EventForm} />
                  <Route path='/test' component={TestComponent} />
                  </Switch>
                  
                </Container>
              </Fragment>
              )}/>
       </Fragment> 
    );
  }

}

export default withRouter(App);
