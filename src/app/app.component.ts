import {Component, OnInit, Renderer2} from '@angular/core';
import {ImageModifierService} from './service/ImageModifierService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private renderer2: Renderer2, private imageModService: ImageModifierService) {
  }

  ngOnInit(): void {
    this.imageModService.renderer2 = this.renderer2;
  }
}
