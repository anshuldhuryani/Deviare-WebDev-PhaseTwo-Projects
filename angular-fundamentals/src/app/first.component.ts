import { Component } from "@angular/core";

@Component({
    selector: 'app-first',
    template: `<h2>First Component</h2>
        <p>This is my first Component.</p>`,
    styles: [`h2{ color:navy; } 
        p{color:red; font-weight:bold;} `]
})

export class FirstComponent {

    // logics will be written here..

}