# Introductory React Project

The purpose of this project is to get a basic project up and running using a mixture of
- React
- Informed
- Redux
- Reach Router
- Material-UI

## Part 1: React Wizard
Create a wizard using React!
- [x] At least three steps
- [x] Navigate using 'Next' and 'Previous' buttons
- [x] Maintain states between navigations

## Part 2: Informed and validation
- [ ] Replace each Form element with an Informed Form	
	- [ ] EITHER use the base Informed fields OR use custom fields that have been linked into the Informed Form
- [ ] Add validation for a field.
	- [ ] Use Informed's "validation" option (e.g. ensure that a phone number is formatted properly or that a number is above a certain value)

## Part 3: Redux
- [ ] Add Redux to your wizard
	- [ ] Move the state into Redux
	- [ ] Store the state so that when you navigate between different steps, the state is preserved

(It will likely be helpful to use Informed's "FormState" to dehydrate and rehydrate the forms)

## Part 4: Reach Router
- [ ] Add Reach Router to your application, so that each child can provide a "path" prop and steps through the wizard change the URL

## Part 5: Material-UI
- [ ] Replace some of your components with Material-UI components

## General To-Do
- [ ] Generalize the component so that any component can act as a 'step'
- [ ] Make it so that focus is automatically moved to the input on each new Form
- [ ] Clean up the aesthetics
