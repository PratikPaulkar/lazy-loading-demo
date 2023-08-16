import { Component, ElementRef, ComponentFactoryResolver, ViewContainerRef, HostListener, OnInit } from '@angular/core';
import { Component6Component } from '../component6/component6.component';
import { Component7Component } from '../component7/component7.component';

@Component({
  selector: 'app-component5',
  templateUrl: './component5.component.html',
  styleUrls: ['./component5.component.scss'],
})
export class Component5Component implements OnInit {
  // Track if the components are loaded
  areComponentsLoaded = false;

  constructor(private el: ElementRef, private resolver: ComponentFactoryResolver, private vcr: ViewContainerRef) {}

  ngOnInit(): void {}

  // @HostListener('window:scroll', ['$event']) 
  //   scrollHandler(event: Event) {
  //     console.log("Scroll Event");
  //   }
  
  // @HostListener('window:scroll', ['$event'])
  // checkScroll(event: Event) {
  //   console.log('Scroll event detected.');
  //   // Rest of the logic
  // }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition = window.scrollY;
    const elementPosition = this.el.nativeElement.offsetTop;

    if (!this.areComponentsLoaded && scrollPosition > elementPosition) {
      // Load the lazy-loaded components
      console.log('Lazy loading components...');
      // this.areComponentsLoaded = true;
      // import('./../component6/component6.component').then((comp6) => {
      //   // Now you can use comp6.Component6Component to access the component
      // });
      // import('./../component7/component7.component').then((comp7) => {
      //   // Now you can use comp7.Component7Component to access the component
      // });

      // Load and insert Component6
      const comp6Factory = this.resolver.resolveComponentFactory(Component6Component);
      const comp6Ref = this.vcr.createComponent(comp6Factory);

      // Load and insert Component7
      const comp7Factory = this.resolver.resolveComponentFactory(Component7Component);
      const comp7Ref = this.vcr.createComponent(comp7Factory);

      this.areComponentsLoaded = true;
      
    }
  }
}
