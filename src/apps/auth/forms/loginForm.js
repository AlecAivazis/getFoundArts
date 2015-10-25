// third party imports
import unviersalForms from 'universal-forms'

// grab the used objects from universal-forms
const {Form, fields} = unviersalForms
const {EmailField, PasswordField} = fields


// the form to handle user signups
export default class SignupForm extends Form {
    static fields = [
        EmailField('email', {
            label: 'e-mail',
        }),
        PasswordField('password'),
    ]
}
