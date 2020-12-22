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
  fieldName:any = 'Show'; //to show the selected field on click

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // storing and declaring the fields of form
    this.dynamicForm = this.formBuilder.group({
      fieldType: [''],
      placeholder: [''],
    });
  }

  add() {
     // storing he value of dynamic form in array
    this.formValue = this.dynamicForm.value;

    //to values getting added in an array through user input
    this.formArray.push({
      fieldType: this.formValue.fieldType,
      placeholder: this.formValue.placeholder,
    });   
    
    // checking the formValue array storage with dropdown's fieldtype if correct or not
    if(this.formValue.fieldType == "textField") {
      this.fieldName = "Show";
    }

    if(this.formValue.fieldType == "numberField"){ 
      this.fieldName = "Show";
    }

    if(this.formValue.fieldType == "radioButton") {
      this.fieldName = "Show";
    }

    if(this.formValue.fieldType == "checkBox") {
      this.fieldName = "Show";
    }

    if(this.formValue.fieldType == "textarea") {
      this.fieldName = "Show";
    }

    if(this.formValue.fieldType == "button") {
      this.fieldName = "Show";
    }
  } 
}