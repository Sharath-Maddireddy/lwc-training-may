import { LightningElement, api, track } from 'lwc';

export default class HelloWorld extends LightningElement {

    // Private Variables/properties
    welcomeMessage;
    message = 'Welcome to the world of Lighting Web Component!'; // String
    showLoading = true; // Boolean
    age = 124; // Integer
    salary = 2345.34; // Decimal
    records = []; // List/Array

    // Public Variables/properties
    @api __messsage = 'Welcome Amit!';
    // List<Account> accountList
    // List<User> userList
    @track users;
    // key : value
    // Map<Id, Account>
    @track accountMap = {
        abc: {
            Name: 'Salesforce.com'
        },
        xyz: {
            Name: 'Salesforce.com'
        },
        efg: {
            Name: 'Salesforce.com'
        },
        98834: [
            {

            },
            {

            }
        ]
    }
    // users.push( { name: 'Admin User', email: 'infor@gmail.com' } );

    @api
    get users() {
        return this.users;
    }

    set users(value) {
        this.users = value;
    }
}