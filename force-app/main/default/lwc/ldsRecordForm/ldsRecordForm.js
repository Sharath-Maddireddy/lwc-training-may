import { LightningElement, track } from 'lwc';
import NAME_FIELDS from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

export default class LdsRecordForm extends LightningElement {

    @track fields = [
        { objectApiName: 'Account', fieldApiName: 'Type' },
        INDUSTRY_FIELD,
        NAME_FIELDS,
        { objectApiName: 'Account', fieldApiName: 'Rating' },
    ];

    handleSuccess(event) {
        event.preventDefault();
        alert('Record Saved!');
        console.log(JSON.stringify(event.detail));
    }
    handleError(event) {
        event.preventDefault();
        console.error(JSON.stringify(event.detail));
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log('Record Submitted');
        console.log(JSON.stringify(event.detail));

        let fields = event.detail.fields;
        fields.ParentId = '';
        this.template.querySelector('lightning-record-form').submit(fields);
    }
    handleCancel(event) {

    }
    handleLoad(event) {
        console.log('Record Loaded')
    }
}