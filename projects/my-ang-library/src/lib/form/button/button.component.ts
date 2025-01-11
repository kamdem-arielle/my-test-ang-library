import { Component, HostBinding, Input, input } from '@angular/core';

@Component({
  selector: 'arielle-form-button',
  standalone: false,
  
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
@Input() label = 'Accept';
@Input() width = '190px';
@Input() primary: boolean = false;
@Input() alert: boolean = false;
@Input() callModal: boolean = false;
@Input() enableModal: boolean = false;
@Input() primary2: boolean = false;

// Add `HostBinding` for attributes
@HostBinding('attr.primary') get isRaised() {
  return this.primary ? '' : null;
}

@HostBinding('attr.alert') get isFlat() {
  return this.alert ? '' : null;
}

@HostBinding('attr.call-modal') get isStroked() {
  return this.callModal ? '' : null;
}

@HostBinding('attr.enable-modal') get isWarn() {
  return this.enableModal ? '' : null;
}

@HostBinding('attr.primary2') get isDisabled() {
  return this.primary2 ? true : null;
}



}
