import {Component, Input} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {QuestionBase} from './question-base';
import { PasswordQuestion } from './question-password';

@Component({
  standalone: true,
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  imports: [CommonModule, ReactiveFormsModule],
})
export class DynamicFormQuestionComponent {
  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;

  

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }

  get isValidPattern() {
     if (this.form.controls[this.question.key].errors?.['pattern']) return false;
     return true ;
  }

  get isRequired(){
    if (this.form.controls[this.question.key].errors?.['required'] 
    && this.form.controls[this.question.key].touched
    &&this.question.required) return true;
    return false ;
  }


  isPasswordQuestion(question: QuestionBase<string>): question is PasswordQuestion {
    return (question as PasswordQuestion).pattern !== undefined;
}


  

}
