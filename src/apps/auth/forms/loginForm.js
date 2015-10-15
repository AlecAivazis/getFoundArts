// third party imports
import unviersalForms from 'universal-forms'

// grab the used objects from universal-forms
const {Form, fields} = unviersalForms
const {TextField, EmailField} = fields

// the form to handle user signups
export default class SignupForm extends Form {
    static fields = [
        TextField('username'),
        EmailField('password'),
    ]
}
