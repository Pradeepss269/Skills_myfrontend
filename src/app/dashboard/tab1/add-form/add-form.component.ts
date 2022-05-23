import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { LoaderserviceService } from 'src/app/services/loaderservice.service';
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  myForm!: FormGroup;
  constructor(private forms: FormBuilder, private commonService: CommonServiceService , private loaderService: LoaderserviceService) { }

  ngOnInit(): void {
    this.myForm = this.forms.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  onSubmit(data:FormGroup){
    if(data.valid){
      this.loaderService.loading();
      console.log(data);
      let self = this;
      setTimeout(() => {
        self.loaderService.loading();
      }, 2000);
    }
  }

}
