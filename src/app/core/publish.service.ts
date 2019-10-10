import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { BaseReference } from './model/base-reference';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
    providedIn: 'root'
})
export class PublishService {
    
    private _publishedText = new BehaviorSubject('');
    
    public get publishedTextChanges$(): Observable<string> {
        return this._publishedText.asObservable();
    }
    
    public publishReferenceList(baseReferences: BaseReference[]) {
        //this._publishedText.next(this.convertToText(baseReferences));
    }   

    
}