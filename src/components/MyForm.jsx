import React, { Component } from 'react';
import { Form, Text } from 'informed';

const MyForm = (props) => {
	let { title, question, response, field } = props.currentQuestion;
	return (
		<div>
			<h1>{title}</h1>

			<Form
				onChange={props.handleChange}
				onSubmit={props.handleSubmit}
			>

				<label>{question + "   "}
					<Text 
						field={field}
						value={response}
					/>
				</label>
			</Form>
		</div>
	);
};

export default MyForm;
