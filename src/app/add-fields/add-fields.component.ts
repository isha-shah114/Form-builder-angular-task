import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-fields',
  templateUrl: './add-fields.component.html',
  styleUrls: ['./add-fields.component.scss']
})
export class AddFieldsComponent implements OnInit {
  dynamicForm: FormGroup; //to store the value of form
  formValue: any = []; //to store the value of dynamic form
  formArray: any = []; //to add the value coming from user input
  optionValue: string;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // storing and declaring the fields of form
    this.dynamicForm = this.formBuilder.group({
      fieldType: [''],
      inputType: [''],
      placeholder: [''],
    });
  }

  add() {
     // storing he value of dynamic form in array
    this.formValue = this.dynamicForm.value;

    //to values getting added in an array through user input
    this.formArray.push({
      fieldType: this.formValue.fieldType,
      inputType: this.formValue.inputType,
      placeholder: this.formValue.placeholder,
    });
  }
}