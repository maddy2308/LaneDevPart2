import {Injectable, OnInit} from '@angular/core';

@Injectable()

export class AvailableImageActionService implements OnInit {

  availableActions: any[];

  constructor() {
    this.availableActions = [{action: 'Rotate', value: '45', name: 'Rotate By 45°'},
      {action: 'Translatex', value: '45', name: 'Translate in x by -40 px'},
      {action: 'Scale', value: '0.5', name: 'Scale by 0.5'},
      {action: 'Opacity', value: '0.5', name: 'Opacity to 0.5'}];
  }

  ngOnInit(): void {
  }
}

