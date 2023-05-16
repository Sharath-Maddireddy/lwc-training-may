import { LightningElement, wire, track, api } from 'lwc';
import { getObjectInfo, getObjectInfos, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
export default class ObejctInfoApi extends LightningElement {

    @api objApiName = 'Account';
    @api fieldApiName = 'Type';
    @api recordTypeId = '012000000000000AAA';
    @api label;
    @api placeholder;
    @api required;
    @api showlabel;

    /*
    FINAL_FIELD = {
        objectApiName: 'Account',
        fieldApiName: 'Industry'
    }*/

    @track accountObjectInfo;

    @track industryOpt = [];

    @wire(getObjectInfo, { objectApiName: '$objApiName' })
    wiredAccountObjectInfo({ error, data }) {
        if (data) {
            console.log('INDUSTRY_FIELD', INDUSTRY_FIELD);
            console.log('Account Object Information ', data);
        } else if (error) {
            console.error('Error while fetching Account Object Information ', error);
        }
    }

    @wire(getPicklistValuesByRecordType, {
        objectApiName: '$objApiName',
        recordTypeId: '$recordTypeId'
    })
    wiredAccountIndustryFieldInfo({ error, data }) {
        if (data) {
            console.log('Account Object Picklist Information ', data);
            let picklistFieldValues = data.picklistFieldValues;
            if (picklistFieldValues && picklistFieldValues[this.fieldApiName]) {
                this.industryOpt = picklistFieldValues[this.fieldApiName].values;
            }
        } else if (error) {
            console.error('Error while fetching Account Object Picklist Information ', error);
        }
    }

    hanleChange(event) {
        event.preventDefault();
        let selectedEvent = new CustomEvent('picklistchanged', {
            detail: {
                objectApiName: this.objApiName,
                fieldApiName: this.fieldApiName,
                value: event.target.value
            }
        });
        this.dispatchEvent(selectedEvent);
    }

    /*@wire(getPicklistValues, {
        recordTypeId: '$recordTypeId',
        fieldApiName: '$FINAL_FIELD'
    })
    wiredAccountIndustryFieldInfo({ error, data }) {
        if (data) {
            console.log('Account Industry Information ', data);
            this.industryOpt = data.values;
        } else if (error) {
            console.error('Error while fetching Account Industry Information ', error);
        }
    }

    get options() {
        return [
            { label: 'Education', value: 'Education' },
            { label: 'Banking', value: 'Banking' },
            { label: 'Aparel', value: 'Aparel' },
            { label: 'Technology', value: 'Technology' },
            { label: 'Chemical', value: 'Chemical' },
        ]
    }*/
}