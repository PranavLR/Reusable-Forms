import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-group',
  templateUrl: './address-group.component.html',
  styleUrls: ['./address-group.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, {skipSelf: true})
    }
  ]
})
export class AddressGroupComponent implements OnInit, OnDestroy{

  @Input({ required: true }) controlKey = '';
  @Input() label = '';
  parentContainer = inject(ControlContainer);
  
  get parentFormGroup() {
    return this.parentContainer.control as FormGroup; 
  }
  
  ngOnInit(): void {
    this.parentFormGroup.addControl(this.controlKey, 
    new FormGroup({
      zipCode: new FormControl(''),
      street: new FormControl(''),
    }),
    )
  }
  
  ngOnDestroy(): void {
    this.parentFormGroup.removeControl(this.controlKey);
  }


}