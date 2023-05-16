import { LightningElement, api } from 'lwc';

export default class Childone extends LightningElement {

    @api
    handleClick() {
        let clickEvent = new CustomEvent('success', {
            detail: {
                accountName: 'Salesforce.com',
                accountId: '0019jhhjhjhj73874',
                contacts: [
                    { name: 'Amit' },
                    { name: 'Rohit' },
                    { name: 'Pankaj' }
                ]
            },
            bubbles: true,
            composed: false
        }); // bubble : false, composed : false
        this.dispatchEvent(clickEvent);
        //this.dispatchEvent(new CustomEvent('click'));
    }
}