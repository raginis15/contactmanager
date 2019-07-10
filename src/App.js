import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './Component/contacts/Contacts';
import Header from './Component/layout/Header';
import About from './Component/pages/About';
import Test from './Component/test/Test';
import NotFound from './Component/pages/NotFound';
import AddContact from './Component/contacts/AddContact';
import EditContact from './Component/contacts/EditContact';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './Context';

class App extends Component {
	render() {
		return (
			<Provider>
				<Router>
					<div className="App">
						<Header />
						<div className="container">
							<Switch>
								<Route exact path="/" component={Contacts} />
								<Route exact path="/contact/add" component={AddContact} />
								<Route exact path="/contact/edit/:id" component={EditContact} />
								<Route exact path="/about" component={About} />
								<Route exact path="/test" component={Test} />
								<Route component={NotFound} />
							</Switch>
						</div>
					</div>
				</Router>
			</Provider>
		);
	}
}
export default App;
