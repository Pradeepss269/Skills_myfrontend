import { Component, OnInit } from '@angular/core';
import { initialData } from './../../../store/forms-data';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { AddForm } from "./../../../store/forms.actions"
import { formReducer }from "./../../../store/forms.reducer"
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  forms!: Observable<any[]>;

  constructor(private store: Store<{forms: any[]}>) {
    // store.pipe(select('forms').subscribe(values => {
    //   this.forms = values;
    // }))
  }

  ngOnInit(): void {
  }

}
