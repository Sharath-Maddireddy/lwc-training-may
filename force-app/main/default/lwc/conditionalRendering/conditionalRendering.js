import { LightningElement, track } from 'lwc';

export default class ConditionalRendering extends LightningElement {

    showTom = true;
    showJerry = true;

    @track users = [
        { name: 'Amit Singh', email: 'infor@gmail.com' },
        { name: 'Rohit Goel', email: 'infor@gmail.com' },
        { name: 'Admin User', email: 'infor@gmail.com' },
    ]

    /*
        for(Account acc: accountList){
            System.debug(acc.Id);
        }
    */

    handleClick() {
        this.showTom = false;
        this.users.push(
            { name: 'Admin User 1234', email: 'infor@gmail.com' },
        )
    }
}