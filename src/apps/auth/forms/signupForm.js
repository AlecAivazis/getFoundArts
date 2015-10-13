// third party imports
import unviersalForms from 'universal-forms'

const Form = unviersalForms.Form
const {TextField, EmailField} = unviersalForms.fields

// the form to handle user signups
export default class SignupForm extends Form {
    static fields = [
        TextField('name'),
        EmailField('email'),
        TextField('link'),
        TextField('message', {
            label: 'message (optional)',
            required: false,
            widget: {
                type: 'textarea',
            },
        }),
    ]
}
