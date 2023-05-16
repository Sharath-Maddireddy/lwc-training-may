import { LightningElement, track, api } from 'lwc';

export default class Child extends LightningElement {

    @api records;

    @track userList = [];
    name = 'LWC';

    accountName;


    get users() {
        return this.userList;
    }
    @api
    set users(value) {
        console.log(JSON.stringify(value));
        this.userList = value;
    }

    handleClick(event) {
        event.preventDefault();
        this.name = 'Rohit Goel';
        this.users = [{}];
    }

    handleSlotChange() {
        console.log('Slot change');
    }

    handleChange(event) {
        this.accountName = event.target.value;
    }

    @api
    clickMe() {
        console.log('Child Method Clicked.... ');
    }

    @api
    handleValidate(value, value1) {

        let allInputs = this.template.querySelectorAll('lightning-input', 'lighting-combobox', 'lighting-textarea');
        const allValid = [...allInputs,].reduce((validSoFar, inputCmp) => {
            inputCmp.reportValidity(); // required= ture
            return validSoFar && inputCmp.checkValidity();
        }, true);
        return allValid;
        /*
        Iteration #1 - Valid Input
            reportValidity - False
            inputCmp.checkValidity() - True
            validSoFar = True && True => True
        */
        /*
            Iteration #2 - InValid Input
                reportValidity - True
                inputCmp.checkValidity() - False
                validSoFar = True && False => False
         */
    }

}