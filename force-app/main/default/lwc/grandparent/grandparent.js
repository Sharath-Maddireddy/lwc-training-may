import { LightningElement } from 'lwc';

export default class Grandparent extends LightningElement {

    handleChildEvent(event) {
        // event - object
        let detail = event.detail;
        console.log(' Grand Parent Component ');
        console.log(JSON.stringify(detail));
        console.log(detail.accountName);
        console.log(detail.accountId);
    }

}