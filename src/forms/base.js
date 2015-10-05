function Field(name, {label, widget = 'input'} = {}) {
    // use the name for the label if its not present
    const fieldLabel = label ? label : name
    // return the data structure for the base field
    return {
        name,
        label: fieldLabel,
        widget,
    }
}

export function TextField(...args) {
    return Field(...args)
}

export function EmailField(...args) {

    return Field(...args)
}

export class Form {

    constructor(values) {
        // assign the initial values if they were given
        this.values = values
        // bind various functions
        this.get_fields = this.get_fields.bind(this)
        this.is_valid = this.is_valid.bind(this)
    }


    get_fields() {
        return this.constructor.fields
    }


    is_valid() {
        return true
    }

    set_value(values) {
        this.values = {...this.values, ...values}
    }
}


export function FormFactory(fields) {
    // the form class
    const form = Form
    // assign the fields to the form
    form.fields = fields
    // return the class
    return form
}


export default Form
