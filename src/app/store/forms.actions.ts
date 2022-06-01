import { createAction, Action } from '@ngrx/store';
import { formAction } from './forms.enum';

// export const formDate = createAction('myform');
export class ActionParent implements Action {
  type: any;
  data:any;
}

export class AddForm implements ActionParent{
  type!: formAction.Add;
  constructor( public data:any){}
}
