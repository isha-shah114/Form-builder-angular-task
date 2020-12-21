import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-fields',
  templateUrl: './add-fields.component.html',
  styleUrls: ['./add-fields.component.scss']
})
export class AddFieldsComponent implements OnInit {
  dynamicForm: FormGroup;
  submitted = false;
  formValue: any = [];
  fieldName:any = 'Show';
  replacePlaceHolder: string;
  textPlaceHolder: string;
  numberPlaceHolder: string;
  radioButtonValue: string;
  checkBoxValue: string;
  textareaPlaceHolder: string;
  buttonValue: string;
  showTextField:boolean = false;
  showNumberField:boolean = false;
  showRadioButton:boolean = false;
  showCheckBox:boolean = false;
  showTextarea:boolean = false;
  showSubmitButton:boolean = false;

  // formArray: any[] = [{
  //   textField: '',
  //   numberField: '',
  //   radioButton: '',
  //   checkBox: '',
  //   textarea: '',
  //   submitButton: '',
  //   replacePlaceHolder: '',
  // }];

  formArray: any[] = [{
    fieldType: '',
    placeholder: '',
  }];

  constructor(private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dynamicForm = this.formBuilder.group({
      fieldType: [''],
      placeholder: [''],
    });
  }

  add() {
    // this.formArray = new formArray();
    // this.dataArray.push(this.formArray);
    
    this.formValue = this.dynamicForm.value;

    this.formArray.push({
      fieldType: this.formValue.fieldType,
      placeholder: this.formValue.placeholder,
    });   
    // this.userService.addUser(this.formValue);
    
    if(this.formValue.fieldType == "textField") {
      // if(this.formArray.length <= 2){
      this.textPlaceHolder= this.formValue.placeholder;
      // }

      // if(this.formArray.length > 2){
        // this.replacePlaceHolder = this.formValue.placeholder;
        // console.log(this.replacePlaceHolder);
      // }
    }
        if(this.formValue.fieldType == "numberField") {
          this.showNumberField = !this.showNumberField;
          this.fieldName = "Show";
          this.numberPlaceHolder= this.formValue.placeholder;
        }

        if(this.formValue.fieldType == "radioButton") {
          this.showRadioButton = !this.showRadioButton;
          this.fieldName = "Show";
          this.radioButtonValue= this.formValue.placeholder;
          console.log(this.radioButtonValue);
        }

        if(this.formValue.fieldType == "checkBox") {
          this.showCheckBox = !this.showCheckBox;
          this.fieldName = "Show";
          this.checkBoxValue= this.formValue.placeholder;
          console.log(this.checkBoxValue);
        }

        if(this.formValue.fieldType == "textarea") {
          this.showTextarea = !this.showTextarea;
          this.fieldName = "Show";
          this.textareaPlaceHolder= this.formValue.placeholder;
        }

        if(this.formValue.fieldType == "button") {
          this.showSubmitButton = !this.showSubmitButton;
          this.fieldName = "Show";
          this.buttonValue= this.formValue.placeholder;
        }
      }

      onSubmit()
      {
        console.log(this.formArray);
      }    
    }