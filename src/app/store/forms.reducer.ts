import { createReducer, on } from "@ngrx/store";
// import { formDate } from "./forms.actions";
import { initialForm } from "./forms.state";
import { formAction } from "./forms.enum";
import { ActionParent } from "./forms.actions";
import { initialData } from "./forms-data";

export const initialState :any[] = [
  {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: ''
  }
]

export function formReducer(state:any,action:any){
  switch(state.type){
    default: return state;
  }
 }
// const _formReducer = createReducer(initialForm, on(formDate, (state) =>{
//   return{
//     ...state,

//   }
// }));

// export function formReducer(state:any,action:any){
//  return _formReducer(state,action);
// }
