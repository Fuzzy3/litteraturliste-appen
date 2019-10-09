import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  referenceList = [];

  title = 'litteratur-liste-appen';

  referenceTitle: string = "";

  public onSubmit() {
    this.referenceList.push(this.referenceTitle);
    this.resetForm();
  }

  public resetForm() {
    this.referenceTitle = "";
  }

}


