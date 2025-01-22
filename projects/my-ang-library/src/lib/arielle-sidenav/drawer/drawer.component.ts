import { Component, ElementRef, Input, Renderer2, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'arielle-drawer',
  imports: [],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss'
})
export class DrawerComponent {

  @Input() position = 'left';
  @Input() mode = 'side';
  @Input() width!:number;
  @ViewChild('drawerContainer',{static : false}) drawerContainer!: ElementRef;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngAfterViewInit() {
    if(this.position == 'right') {
      this.renderer.setAttribute(this.el.nativeElement, 'positionRight', '');
    }else {
      this.renderer.setAttribute(this.el.nativeElement, 'positionLeft', '');
    }

    if (this.width) {
      this.renderer.setStyle(this.drawerContainer.nativeElement, 'width', `${this.width}px`);
      
    }
  
   
  }
}
