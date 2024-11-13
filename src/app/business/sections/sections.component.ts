import { Component } from '@angular/core';
import { Section1Component } from "./section1/section1.component";
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';

@Component({
  selector: 'app-sections',
  standalone: true,
  imports: [Section1Component, Section2Component, Section3Component],
  templateUrl: './sections.component.html',
  styleUrl: './sections.component.css'
})
export default class SectionsComponent {

}
