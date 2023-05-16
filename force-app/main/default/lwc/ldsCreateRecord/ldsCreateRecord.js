import { LightningElement } from 'lwc';
/* Create the Record */
import { createRecord } from 'lightning/uiRecordApi';
/* Account Object */
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
//import NAME_FIELD from '@salesforce/schema/Account.Name';

/* Contact Object */
import CONTACT_OBJECT from '@salesforce/schema/Contact'
//import FIRST_NAME_FIELD from '@salesforce/schema/Contact.FirstName'
//import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName'
//import EMAIL_FIELD from '@salesforce/schema/Contact.Email'
import ACCOUNT_ID_FIELD from '@salesforce/schema/Contact.AccountId';

export default class LdsCreateRecord extends LightningElement {

    accountRecordFields = {}; // API Name => Value
    contactRecordFields = {};

    handleClick(event) {
        event.preventDefault();
        console.log(JSON.stringify(ACCOUNT_OBJECT));

        let allValid = this.handleValidate();
        if (!allValid) {
            return;
        }

        let fields = this.accountRecordFields;
        console.log(JSON.stringify(fields));
        const recordInput = {
            apiName: ACCOUNT_OBJECT.objectApiName, // Account
            fields
        }

        createRecord(recordInput) // Promise, then, catch, finally
            .then((result) => { // result ~= Any
                if (result) {
                    let accountId = result.id;
                    console.log(accountId);
                    this.handleContactCreate(accountId);
                }
            })
            .catch((error) => {
                console.error(JSON.stringify(error));
            })
            .finally(() => {
                // will execute always
                // cleanup logic
            });
    }

    handleContactCreate(accountId) {

        console.log(JSON.stringify(ACCOUNT_ID_FIELD));
        let fields = this.contactRecordFields;
        fields[ACCOUNT_ID_FIELD.fieldApiName] = accountId;
        fields['Phone'] = '34546676575';
        fields['Fax'] = '34546676575';
        const recordInput = {
            apiName: CONTACT_OBJECT.objectApiName,
            fields
        }

        createRecord(recordInput) // Promise, then, catch, finally
            .then((result) => { // result ~= Any
                if (result) {
                    let contactId = result.id;
                    console.log(contactId);
                }
            })
            .catch((error) => {
                console.error(JSON.stringify(error));
            })
            .finally(() => {
                // will execute always
                // cleanup logic
            });
    }

    handleAccountInputChange(event) {
        event.preventDefault();
        let { name, value } = event.target;
        this.accountRecordFields[name] = value;
        //console.log(value);
    }
    handleContactInputChange(event) {
        event.preventDefault();
        let { name, value } = event.target;
        this.contactRecordFields[name] = value;
    }
    /*
        Account accRecord = new Account(Name = 'Salesforce.com', Phone = '8787345');
        accRecord.Name = 'Salesforce.com';
        insert accRecord;

        Contact contactRecord = new Contact(AccountId = accRecord.Id);
        contactRecord.FirstName = 'Jason'
        insert contactRecord;
    */

    handleValidate() {
        const allValid = [
            ...this.template.querySelectorAll('lightning-input', 'lightning-combobox', 'lightning-textarea', 'lightning-input-name'),
        ].reduce((validSoFar, inputCmp) => {
            inputCmp.reportValidity();
            return validSoFar && inputCmp.checkValidity();
        }, true);
        return allValid;
    }
}