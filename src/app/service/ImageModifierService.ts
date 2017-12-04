import {ElementRef, Injectable, OnInit, Renderer2} from '@angular/core';
import {AvailableImageActionService} from './AvailableImageActionService';

@Injectable()
export class ImageModifierService implements OnInit {

  private styles = {};
  private availableActions = [];
  public renderer2: Renderer2;

  constructor(private availableActService: AvailableImageActionService) {
  }

  ngOnInit(): void {
    this.availableActions = this.availableActService.availableActions;
  }

  applyTransformation(actions, el: ElementRef) {
    this.styles = {'transform': '', 'opacity': ''};
    for (const eachAction of actions) {
      this.setStylesFromAction(eachAction);
    }

    for (const key of Object.keys(this.styles)) {
      this.renderer2.setStyle(el.nativeElement, key, this.styles[key]);
    }
  }

  private setStylesFromAction(actionObj) {
    switch (actionObj.action.toLowerCase()) {
      case 'rotate' :
        this.styles['transform'] += ('rotate(' + actionObj['value'] + 'deg)');
        break;
      case 'translatex' :
        this.styles['transform'] += ('translateX(' + actionObj['value'] + 'px)');
        break;
      case 'scale' :
        this.styles['transform'] += ('scale(' + actionObj['value'] + ')');
        break;
      case 'opacity' :
        this.styles['opacity'] += ('opacity(' + actionObj['value'] + ')');
        break;
      default :
        throw Error('Unrecognizable action passed');
    }
  }
}

