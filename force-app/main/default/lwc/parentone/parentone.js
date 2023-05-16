import { LightningElement } from 'lwc';

export default class Parentone extends LightningElement {

    users = [
        {},
        {},
        {}
    ]

    handleClick() {
        // Find The child element
        let childComponent = this.template.querySelector('c-childone');
        if (childComponent) {
            // Call the method
            childComponent.handleClick();
        }
    }

    handleChildEvent(event) {
        // event - object
        let detail = event.detail;
        console.log(' Parent Component ');
        console.log(JSON.stringify(detail));
        console.log(detail.accountName);
        console.log(detail.accountId);
        const successEvent = new CustomEvent('success', {
            detail: {
                accountId: detail.accountId
            },
            bubbles: true,
            composed: false
        });
        this.dispatchEvent(successEvent);
        // Fire Event
        /*
            public class AccountWrapper{
                public String accountName;
            }
            AccountWrapper obj = new AccountWrapper();
            obj.accountName;
        */
    }
}