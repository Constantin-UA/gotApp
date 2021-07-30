import React, { Component } from 'react';
import { Col, Row, Container, Button } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

export default class App extends Component {
	state = {
		randomVisible: true,
		selectedChar: null,
	};

	toggle = () => {
		this.setState((state) => {
			return { randomVisible: !state.randomVisible };
		});
	};

	onCharSelected = (id) => {
		this.setState({
			selectedChar: id,
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
							<ItemList onCharSelected={this.onCharSelected} />
						</Col>
						<Col md="6">
							<CharDetails charId={this.state.selectedChar} />
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}
