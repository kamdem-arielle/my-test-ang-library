import {
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
  viewChild,
} from '@angular/core';
import { faAnglesRight,faAnglesLeft,} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgClass} from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'arielle-drawer',
  imports: [NgClass,FontAwesomeModule,RouterLink,RouterLinkActive ],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.scss',
})
export class DrawerComponent {
  @Input() position = 'left';
  @Input() mode = 'side';
  @Input() width!: number;
  @Input() default!: boolean;
  @Input() navBarLinks:any = [];
  collapsed!: boolean;
  iconCollapse!: boolean;
  faAnglesRight = faAnglesRight;
  faAnglesLeft = faAnglesLeft;
  classActive :any;
  showMenu:string='';
  @ViewChild('drawerContainer', { static: false }) drawerContainer!: ElementRef;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.navBarLinks = [
      {
        name: 'Home',
        route: 'home',
        icon: 'ic_home',
        sublinks: []
      },
      {
        name: 'Profile',
        route: 'profile',
        icon: 'ic_profile',
        sublinks: [
          { name: 'Settings',route: 'settings', icon: 'ic_settings' },
          { name: 'Logout',route: 'logout', icon: 'ic_logout' }
        ]
      },
      // Add more links as needed
    ];


    if (window.innerWidth>991) {
      console.log("button left ")
      this.iconCollapse=false;
    }else{
      console.log("button right")
      this.iconCollapse=true
    }
  }


  ngAfterViewInit() {
    if (this.position == 'right') {
      this.renderer.setAttribute(this.el.nativeElement, 'positionRight', '');
      this.faAnglesRight = faAnglesLeft;
      this.faAnglesLeft = faAnglesRight;
      const targetElement = document.querySelector('.main-layout');
      if (targetElement) {
        this.renderer.addClass(targetElement, 'highlight'); // Add the class to the target component
      }
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
      this.iconCollapse = false;
    } else if (window.innerWidth < 991) {
      this.iconCollapse = true;
    }
    sidebar!.classList.remove('openSideBar');
    sidebar!.classList.remove('closeSideBarLargeScreen');
    collapsing_shadow!.classList.remove('openSideBar');
  }

  onActive(event: Event) {
    let element = event.target as HTMLElement;
    var sidebar =document.querySelector(".drawer-container");
    if (window.innerWidth < 991 && !sidebar!.classList.contains("openSideBar")) {
      this.toggleCollapsed()
    }
    if (window.innerWidth > 991 && sidebar!.classList.contains("closeSideBarLargeScreen")) {
      this.toggleCollapsed()
    }
    //ElementRef
    if (this.classActive) {
      // last activated menu
      if (this.classActive === element) {
        this.classActive!.classList.toggle("active"); //toggle off
        this.classActive = null;
        return; //exit
      }
      this.classActive.classList.toggle("active"); //toggle off last activated menu
    }
    element.classList.toggle("active"); // activated new menu
    this.classActive = element;
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = "0";
    } else {
      this.showMenu = element;
    }
  }
}
