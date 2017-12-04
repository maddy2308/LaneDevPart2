import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AvailableImageActionService} from '../service/AvailableImageActionService';
import {ImageModifierService} from '../service/ImageModifierService';

@Component({
  selector: 'app-image-modifier',
  templateUrl: './image-modifier.component.html',
  styleUrls: ['./image-modifier.component.css']
})
export class ImageModifierComponent implements OnInit {

  availableActions = [];
  appliedActions = [];
  isFileUploaded = false;
  @ViewChild('appImgAction') imageElementRef: ElementRef;

  url = '../../assets/Placeholder.png';

  constructor(private availableActService: AvailableImageActionService,
              private imageModifierService: ImageModifierService) {
  }

  ngOnInit() {
    this.availableActions = this.availableActService.availableActions;
    this.appliedActions = [];
  }

  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      this.isFileUploaded = true;
      reader.onload = (ev: any) => {
        this.url = ev.target.result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  applyAction(action) {
    this.appliedActions = this.performPush(this.appliedActions, action);
    this.availableActions = this.performSplice(this.availableActions, action);
    this.imageModifierService.applyTransformation(this.appliedActions, this.imageElementRef);
  }

  removeAction(action) {
    this.availableActions = this.performPush(this.availableActions, action);
    this.appliedActions = this.performSplice(this.appliedActions, action);
    this.imageModifierService.applyTransformation(this.appliedActions, this.imageElementRef);
  }

  makeAllActionsAvailable() {
    this.ngOnInit();
    this.imageModifierService.applyTransformation(this.appliedActions, this.imageElementRef);
  }

  private performSplice(arrayToSplice, actionObj) {
    return arrayToSplice.filter(function (el) {
      return el.action.toLowerCase() !== actionObj.action.toLowerCase();
    });
  }

  private performPush(arrayToPush, actionObj) {
    const index = arrayToPush.findIndex(x => x.action.toLowerCase() === actionObj.action.toLowerCase());
    if (index === -1) {
      arrayToPush.push(actionObj);
    }
    return arrayToPush;
  }

}
