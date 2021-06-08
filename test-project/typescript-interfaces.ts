
/**
 * Interface is an contract or structure in our application.
 * This contract has to be followed by all its subtypes.
 */

/*
interface Customer {
    code: number;
    name: string;
    age: number;
}

var custObj1: any = {
    custCode: 1001,
    custName: 'King'
}

var custObj2: Customer = {
    code: 101,
    name: 'Kochhar',
    age: 34
}

console.log(custObj1);
console.log(custObj2);
*/

/**
 * A class extends the another class.
 * A class implements the another interface
 */

interface BankAccount {
    deposit();
    withdraw();
    balance();
}

class SavingAccount implements BankAccount {

    deposit() {
        console.log('Deposit in Saving Account..')
    }
    withdraw() {
        console.log('Withdraw from Saving Account..')
    }
    balance() {
        console.log('Balance in Saving Account.');
    }

}

class CurrentAccount implements BankAccount {

    deposit() {
        console.log('Deposit in Current Account..')
    }
    withdraw() {
        console.log('Withdraw from Current Account..')
    }
    balance() {
        console.log('Balance in Current Account.');
    }

}

var saving = new SavingAccount();
saving.deposit();
saving.withdraw();
saving.balance();

var current = new CurrentAccount();
current.deposit();
current.withdraw();
current.balance();











