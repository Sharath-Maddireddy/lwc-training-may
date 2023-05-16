import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {

    users = [
        { name: "Amit Singh" },
        { name: "Rohit Goel" }
    ]

    handleClick = (event) => {
        event.preventDefault();
        /*
            public class AccountTriggerHandler{
                public void handleBeforeInsert(){

                }
            }
        */
        let childElement = this.template.querySelector('c-child');// First Element Only
        if (childElement) {
            let allValid = childElement.handleValidate(2, 3);
            if (allValid) {
                console.log('All Valid')
            }
        }
        /*
            AccountWrapper wraper = new Account();
            wraper.createAccount(2,3);
        */
    }

    handleUrlClick(evt) {
        evt.preventDefault();
        // Logic
    }
}