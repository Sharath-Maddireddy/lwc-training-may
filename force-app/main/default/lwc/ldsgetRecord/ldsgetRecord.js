import { LightningElement, api, track, wire } from 'lwc';
import { getRecord, getFieldValue, getFieldDisplayValue } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import Phone_FIELD from '@salesforce/schema/Account.Phone';
import Industry_FIELD from '@salesforce/schema/Account.Industry';
import Rating_FIELD from '@salesforce/schema/Account.Rating';
import AnnualRevenue_FIELD from '@salesforce/schema/Account.AnnualRevenue';
export default class LdsgetRecord extends LightningElement {

    @api recordId;
    @api objectApiName;

    accounRecord;
    @track errors;
    /*
        Account - Name, Industry, Rating, AnnualRevenue, Phone
    */

    @wire(getRecord, { recordId: '$recordId', fields: [NAME_FIELD, Phone_FIELD, Industry_FIELD, Rating_FIELD, AnnualRevenue_FIELD] })
    wiredAccountRecord({ error, data }) {
        if (data) {
            console.log('Data ', data);
            console.log(' Error ', error);
            this.accounRecord = data;
        } else if (error) {
            console.error('Error ', JSON.stringify(error));
            this.errors = error;
        }
    }
    /*  
        public void methodName(Parameters){

        }
        account = {
            error : {

            },
            data : ANY[object, array, string, integer, decimal]
        }
    */

    get industry() {
        console.log('Industry Executed!...');
        let industry = '';
        if (this.accounRecord) {
            industry = this.accounRecord.fields.Industry.value;
        }
        return industry;
    }

    set industry(value) {
        // logic
    }

    get name() {
        return getFieldValue(this.accounRecord, NAME_FIELD);
    }

    get annualRevenue() {
        return getFieldDisplayValue(this.accounRecord, AnnualRevenue_FIELD);
    }

}