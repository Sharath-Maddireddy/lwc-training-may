import { LightningElement, track } from 'lwc';

export default class Account extends LightningElement {

    contactRecord = {};
    message;
    @track options = [
        { label: 'New', value: 'new' },
        { label: 'In Progress', value: 'inProgress' },
        { label: 'Finished', value: 'finished' },
    ];

    handleChange(event) {
        event.preventDefault();
        // const / let /var
        let element = event.target; // event.currentTarget
        let value = element.value;
        let name = element.name; // Field Api Name
        if (name === 'Completed__c') {
            this.contactRecord[name] = element.checked;
        } else {
            this.contactRecord[name] = value;
        }
    }

    handleCreateAccount(event) {
        event.preventDefault();
        let button = event.target;
        console.log(JSON.stringify(this.contactRecord)); // JSON
    }

    handleClick(event) {
        event.preventDefault();
    }
}