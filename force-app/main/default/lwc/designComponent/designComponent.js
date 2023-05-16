import { LightningElement, api } from 'lwc';

export default class DesignComponent extends LightningElement {

    @api objectApiName;
    @api recordId; // String // Id undefined
    @api fieldApiNames; // String Name,Id,Rating let fields = this.fieldApiNames.split(',');
    @api noOfRecords;

    @api selectedRecordId;


    handleClick() {
        if (this.fieldApiNames) {
            let fields = this.fieldApiNames.split(',');
        }
    }
}