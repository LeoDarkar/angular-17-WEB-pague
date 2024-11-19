import { Component,Output, EventEmitter } from '@angular/core';
import Section1Component from '../../../business/sections/section1/section1.component';
import Section2Component from '../../../business/sections/section2/section2.component';
import Section3Component from '../../../business/sections/section3/section3.component';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [Section1Component,Section2Component,Section3Component],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {
  
  @Output() toggleSidebar = new EventEmitter<void>();

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
}
