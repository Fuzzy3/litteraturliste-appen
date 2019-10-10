import { Component } from '@angular/core';
import { PublishService } from './core/publish.service';
import { BaseReference } from './core/model/base-reference';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  referenceList: BaseReference[] = [];
  title = 'litteratur-liste-appen';
  reference: BaseReference = {};

  constructor(private publishService: PublishService) {
  }

  public onSubmit() {
    this.referenceList.push(this.reference);
    this.resetForm();
  }

  public resetForm() {
    this.reference = {};
  }

  public publishReferenceList() {
    this.publishService.publishReferenceList(this.referenceList);
  }

}


