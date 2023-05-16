import { LightningElement, api } from 'lwc';

export default class GetterSetters extends LightningElement {

    @api opportunityRecord = {}; // From parent (read-only)

    welcomeMessae = 'Welcome to Salesforce world!';
    upperCase;
    loacalRecords = []; // Local Copy

    get options() {
        return [
            {},
            {},
            {}
        ];
    }

    get contactRecords() {
        return this.loacalRecords;
    }

    @api
    set contactRecords(value) {
        this.loacalRecords = value;
        this.loacalRecords.forEach(currentItem => {
            //TODO : currentItem
        });
    }

    get name() { // property/variable
        return this.upperCase;
    }

    set name(value) { // 'Amit Singh'
        // processing - Apex Class/ fetch method / business logic / uiRecordApi
        this.upperCase = value.toUpperCase();
    }

    // getters without a setter is readonly

    handleClick() {
        this.welcomeMessae = 'Welcome to LWC!';
        this.name = 'Amit Singh';
        this.contactRecords = [];
    }

}