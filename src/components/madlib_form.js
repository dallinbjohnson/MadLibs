import React, { Component } from 'react';
import {
	Col,
	Row,
	Card
} from 'reactstrap';
import _ from 'lodash';

function MadlibInput(props) {
	return (
		<Col md="3" className="input-wrapper">
			<Row>
				<Col md="2">
					<label htmlFor="" className="green-label">{props.index}</label>
				</Col>
				<Col md="10">
					<input type="text" placeholder={props.placeholder} value={props.state} onChange={props.handleChange} />
				</Col>
			</Row>
			<Row>
				<Col md="2"></Col>
				<Col md="10">
					<div className="input-description">{props.placeholder}</div>
				</Col>
			</Row>
		</Col>
	);
}

class MadlibForm extends Component {

	constructor(props) {
		super(props)

		this.state = {
			completedForm: false,
			color: '',
			PluralNoun: '',
			AdjectiveOne: '',
			CelebrityOne: '',

			adjectiveTwo: '',
			nounOne: '',
			numberOne: '',
			numberTwo: ''
		}
	}
	
	handleChange = function(props) {
		return function(event) {
			// console.log(`Value for input: ${props.inputTitle} is: ${event.target.value}`);
			this.setState({[props.inputTitle]: event.target.value});
			console.log(`Value for input: ${props.inputTitle} is: ${this.state[props.inputTitle]}`);
		}.bind(this);
	}

	handleSubmit = function(event) {
		this.setState({completedForm: true});
		event.preventDefault();
	}.bind(this);

	render() {

		this.inputData = [
			{placeholder: "Color", prop: "color", state: this.state.color},
			{placeholder: "Noun (Plural)", prop: "pluralNoun", state: this.state.pluralNoun},
			{placeholder: "Adjective", prop: "adjectiveOne", state: this.state.adjectiveOne},
			{placeholder: "Celebrity", prop: "celebrityOne", state: this.state.celebrityOne},

			{placeholder: "Adjective", prop: "adjectiveTwo", state: this.state.adjectiveTwo},
			{placeholder: "Noun", prop: "nounOne", state: this.state.nounOne},
			{placeholder: "Number", prop: "numberOne", state: this.state.numberOne},
			{placeholder: "Number", prop: "numberTwo", state: this.state.numberTwo},
		]

		return (
			
			<div className="card-wrapper">
				<Card>
					<form onSubmit={this.handleSubmit} id="madlib-form">
						<Row style={{textAlign: 'center', color: 'white'}}>
							{
								_.map(this.inputData, (data, indexKey) => {
									return <MadlibInput key={indexKey} state={data.state} index={indexKey + 1} placeholder={data.placeholder} handleChange={this.handleChange({ inputTitle: data.prop })} />
								})
							}
						</Row>
						<Row>
							<Col md="12" className="button-wrapper">
								<input type="submit" className="generate-button" value="Generate Mad Lib" />
							</Col>
						</Row>
					</form>
				</Card>
			</div>
		);
	}
}

export default MadlibForm;