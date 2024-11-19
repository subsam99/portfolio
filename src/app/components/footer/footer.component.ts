import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  repoLink: string = 'https://github.com/subsam99/portfolio'
  iconLink: string = 'https://www.flaticon.com/uicons'
}
