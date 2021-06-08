import { Customer } from './models/customer';
import { Component } from "@angular/core";

@Component({
    selector: 'customer-main',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']
})

export class CustomerComponent {

    message: string = "Customer Management System";

    customerObj: any = {
        custCode: 1001,
        custName: 'King Kochhar',
        custAmount: 12000
    };

    custObj: Customer = {
        CustomerCode: 1002,
        CustomerName: 'Bhawna Gunwani',
        CustomerAmount: 32000

    }

}