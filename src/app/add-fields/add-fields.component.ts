import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-fields',
  templateUrl: './add-fields.component.html',
  styleUrls: ['./add-fields.component.scss']
})
export class AddFieldsComponent implements OnInit {
  dynamicForm: FormGroup;
  submitted = false;
  formValue: any = {};
  user: any = {};
  users:any = [];
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

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dynamicForm = this.formBuilder.group({
      fieldType: [''],
      placeholder: [''],
    });
  }

  onSubmit()
      {
        this.user = Object.assign(this.user, this.dynamicForm.value);
        this.addUser(this.user);
        if(this.user.fieldType == "textField") {
          this.showTextField = !this.showTextField;
          this.textPlaceHolder= this.user.placeholder;
          this.users = [this.user, ...this.users];
          // localStorage.clear();
          console.log(this.users);
        } 
      } 
      
      addUser(user)
      {
        if(localStorage.getItem('Users')){
          this.users = JSON.parse(localStorage.getItem('Users'));
          // if(this.user.fieldType == "textField") {
          //     this.showTextField = !this.showTextField;
          //     this.textPlaceHolder= this.user.placeholder;
          //     this.users = [user, ...this.users];
          //     console.log(this.users);
          //   } 
        }
        
        localStorage.setItem('Users', JSON.stringify(this.users));
      }
    }

  // add() {
    // this.formArray = new formArray();
    // this.dataArray.push(this.formArray);
    
   

    // this.formArray.push({
    //   fieldType: this.formValue.fieldType,
    //   placeholder: this.formValue.placeholder,
    //   // replacePlaceHolder: this.replacePlaceHolder,
    // });   
    // this.formValue = JSON.parse(localStorage.getItem('Users'));
   
    
    // if(this.formValue.fieldType == "textField") {
    //   this.showTextField = !this.showTextField;
    //   // if(this.formArray.length <= 2){
    //   this.textPlaceHolder= this.formValue.placeholder;
    //   // }

    //   // if(this.formArray.length > 2){
    //     // this.replacePlaceHolder = this.formValue.placeholder;
    //     // console.log(this.replacePlaceHolder);
    //   // }
    // }
        // if(this.formValue.fieldType == "numberField") {
        //   this.showNumberField = !this.showNumberField;
        //   this.fieldName = "Show";
        //   this.numberPlaceHolder= this.formValue.placeholder;
        // }

        // if(this.formValue.fieldType == "radioButton") {
        //   this.showRadioButton = !this.showRadioButton;
        //   this.fieldName = "Show";
        //   this.radioButtonValue= this.formValue.placeholder;
        //   console.log(this.radioButtonValue);
        // }

        // if(this.formValue.fieldType == "checkBox") {
        //   this.showCheckBox = !this.showCheckBox;
        //   this.fieldName = "Show";
        //   this.checkBoxValue= this.formValue.placeholder;
        //   console.log(this.checkBoxValue);
        // }

        // if(this.formValue.fieldType == "textarea") {
        //   this.showTextarea = !this.showTextarea;
        //   this.fieldName = "Show";
        //   this.textareaPlaceHolder= this.formValue.placeholder;
        // }

        // if(this.formValue.fieldType == "button") {
        //   this.showSubmitButton = !this.showSubmitButton;
        //   this.fieldName = "Show";
        //   this.buttonValue= this.formValue.placeholder;
        // }
      // }