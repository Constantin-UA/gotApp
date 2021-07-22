import React, { Component } from 'react';
//import './charDetails.css';
import styled from 'styled-components';

const CharDetailsWrapper = styled.div`
	border-radius: 0.25rem !important;
	background-color: #fff;
	padding: 25px 25px 15px 25px;
	margin-bottom: 40px;
`;

const CharDetailsTitle = styled.h4`
	margin-bottom: 20px;
	text-align: center;
	font-size: 1.5rem;
	font-weight: 500;
	line-height: 1.2;
`;

/* const SelectError = styled.div `
    color: #fff;
    text-align: center;
    font-size: 26px;
` */

const ListGroupe = styled.ul`
	display: flex;
	flex-direction: column;
	padding-left: 0;
	margin-bottom: 0;
	margin-top: 0;
	border-radius: 0;
`;

const ListItem = styled.li`
	display: flex !important;
	justify-content: space-between !important;
	position: relative;
	padding: 0.75rem 1.25rem;
	background-color: #fff;
	border: 1px solid rgba(0, 0, 0, 0.125);
	border-width: 0 0 1px;
`;

const SpanTerm = styled.span`
	font-weight: bold;
`;

export default class CharDetails extends Component {
	render() {
		return (
			<CharDetailsWrapper>
				<CharDetailsTitle>John Snow</CharDetailsTitle>
				<ListGroupe>
					<ListItem>
						<SpanTerm>Gender</SpanTerm>
						<span>male</span>
					</ListItem>
					<ListItem>
						<SpanTerm>Born</SpanTerm>
						<span>1783</span>
					</ListItem>
					<ListItem>
						<SpanTerm>Died</SpanTerm>
						<span>1820</span>
					</ListItem>
					<ListItem>
						<SpanTerm>Culture</SpanTerm>
						<span>First</span>
					</ListItem>
				</ListGroupe>
			</CharDetailsWrapper>
		);
	}
}
