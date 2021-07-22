import React, { Component } from 'react';
import { Col, Row, Container, Button } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

export default class App extends Component {
	state = {
		randomVisible: true,
	};

	toggle = () => {
		this.setState({
			randomVisible: !this.state.randomVisible,
		});
	};
	render() {
		const { randomVisible } = this.state;
		const randomBlock = randomVisible ? <RandomChar /> : null;
		return (
			<>
				<Container>
					<Header />
				</Container>
				<Container>
					<Row>
						<Col lg={{ size: 5, offset: 0 }}>{randomBlock}</Col>
					</Row>
					<Row>
						<Col>
							<Button className="random-block" color="primary" size="sm" onClick={this.toggle}>
								ToggleRandomButton
							</Button>
						</Col>
					</Row>
					<Row>
						<Col md="6">
							<ItemList />
						</Col>
						<Col md="6">
							<CharDetails />
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}
