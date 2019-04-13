import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-success-alert',
    template: `<div class="alert alert-success">
    <strong>Success!</strong> <p>DevOps Team is proud of You! Good job.</p>
    </div>`,
    styles: ['p {color: green;}']
})

export class SuccessAlertComponent {
    constructor() { }

}
