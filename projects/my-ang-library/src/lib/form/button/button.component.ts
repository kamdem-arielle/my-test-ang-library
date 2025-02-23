import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  input,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'arielle-form-button',
  standalone: false,

  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent implements AfterViewInit {
  @Input() label = 'Accept';
  @Input() width:any;
  @Input() primary: boolean = false;
  @Input() alert: boolean = false;
  @Input() callModal: boolean = false;
  @Input() enableModal: boolean = false;
  @Input() primary2: boolean = false;
  @Input() rippleEffect: boolean = true;
  @Input() buttonMinimalist: boolean = false;
  @Input() buttonExtended : boolean = false;
  displayStyle: string = 'none';
  isRippleActive: boolean = false;
  @ViewChild('FormButtonRef', { static: true }) buttonRef!: ElementRef; // Reference to the button element
  @ViewChild('ButtonSpanRef', { static: true }) buttonSpanRef!: ElementRef; // Reference to the span ripple element

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    // Add attributes to the button component depending on the input values

    if (this.primary) {
      this.renderer.setAttribute(this.buttonRef.nativeElement, 'primary', '');
    }
    if (this.alert) {
      this.renderer.setAttribute(this.buttonRef.nativeElement, 'alert', '');
    }
    if (this.callModal) {
      this.renderer.setAttribute(this.buttonRef.nativeElement, 'callModal', '');
    }
    if (this.enableModal) {
      this.renderer.setAttribute(
        this.buttonRef.nativeElement,
        'enableModal',
        ''
      );
    }
    if (this.primary2) {
      this.renderer.setAttribute(this.buttonRef.nativeElement, 'primary2', '');
    }
    if (this.buttonMinimalist) {
      this.renderer.setAttribute(this.buttonRef.nativeElement, 'buttonMinimalist', '');
    }
    if (this.buttonExtended) {
      this.renderer.setAttribute(this.buttonRef.nativeElement, 'buttonExtended', '');
    }
  }

  addRippleEffect(e: any) {
    if (this.rippleEffect) {
      if (this.isRippleActive) return;

      this.isRippleActive = true;

      // Get the horizontal position of mouse relative to the button
      let x = e.clientX - e.currentTarget.offsetLeft;

      // Get the vertical position of the mouse relative to the button
      let y = e.clientY - e.currentTarget.offsetTop;

      // set the position of the ripple effect to the mouse position
      this.renderer.setStyle(
        this.buttonSpanRef.nativeElement,
        'left',
        `${x}px`
      );
      this.renderer.setStyle(this.buttonSpanRef.nativeElement, 'top', `${y}px`);

      this.displayStyle = 'inline';

      setTimeout(() => {
        this.displayStyle = 'none';
        this.isRippleActive = false;
      }, 1000);
    }
  }
}
