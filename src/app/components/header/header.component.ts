import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationStart, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgClass,
    NgTemplateOutlet
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  ghLink: string = 'https://github.com/subsam99'
  inLink: string = 'https://linkedin.com/in/syahmiaimanm'

  menuOpen: boolean = false

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.resetState();
      }
    })
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen
  }

  resetState() {
    this.menuOpen = false;
  }
}
