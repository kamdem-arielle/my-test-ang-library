import {
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
  viewChild,
} from '@angular/core';
import { faAnglesRight,faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgClass} from '@angular/common';


@Component({
  selector: 'arielle-drawer',
  imports: [NgClass,FontAwesomeModule ],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss',
})
export class DrawerComponent {
  @Input() position = 'left';
  @Input() mode = 'side';
  @Input() width!: number;
  @Input() default!: boolean;
  collapsed!: boolean;
  iconCollapse: boolean = false;
  faAnglesRight = faAnglesRight;
  faAnglesLeft = faAnglesLeft;
  @ViewChild('drawerContainer', { static: false }) drawerContainer!: ElementRef;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    if (this.position == 'right') {
      this.renderer.setAttribute(this.el.nativeElement, 'positionRight', '');
    } else {
      this.renderer.setAttribute(this.el.nativeElement, 'positionLeft', '');
    }
    if (this.width) {
      this.renderer.setStyle(
        this.drawerContainer.nativeElement,
        'width',
        `${this.width}px`
      );
    }
  }

  toggleCollapsed() {
    var sidebar = document.querySelector('.drawer-container');
    var collapsing_shadow = document.querySelector('.collapsing_shadow');
    //code block which add additionnal classes on sidenav on toggle with respect to windows size
    if (window.innerWidth < 991) {
      sidebar!.classList.toggle('openSideBar');
      sidebar!.classList.remove('closeSideBarLargeScreen');
      if (sidebar!.classList.contains('openSideBar')) {
        this.collapsed = true;
        collapsing_shadow!.classList.add('openSideBar');
      } else {
        this.collapsed = false;
      }
    } else {
      sidebar!.classList.toggle('closeSideBarLargeScreen');
      sidebar!.classList.remove('openSideBar');
    }

    //code block which changes sidebar toggle button with respect to windows size
    if (window.innerWidth > 991) {
      this.iconCollapse = false;
    } else if (window.innerWidth < 991) {
      this.iconCollapse = true;
    }
    //code block which changes sidebar toggle button with respect to sidebar additionnal classes
    if (sidebar!.classList.contains('openSideBar')) {
      this.iconCollapse = false;
    } else if (sidebar!.classList.contains('closeSideBarLargeScreen')) {
      this.iconCollapse = true;
    }
  }

  //function to remove all additional classes on sidebar on window resize
  onResize($event:any){
    var sidebar = document.querySelector('.drawer-container');
    var collapsing_shadow = document.querySelector('.collapsing_shadow');
    if (window.innerWidth > 991) {
      this.iconCollapse = true;
    } else if (window.innerWidth < 991) {
      this.iconCollapse = false;
    }
    sidebar!.classList.remove('openSideBar');
    sidebar!.classList.remove('closeSideBarLargeScreen');
    collapsing_shadow!.classList.remove('openSideBar');
  }
}
