import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './question-base';
import { PasswordQuestion } from './question-password';

@Injectable()
export class QuestionControlService {

  toFormGroup(questions: QuestionBase<string>[] ) {
    const group: any = {};

    questions.forEach(question => {
      if(this.isPasswordQuestion(question))
      group[question.key] = question.required ? new FormControl(question.value || '', [Validators.required, Validators.pattern(question.pattern)])
                                              : new FormControl(question.value || '',[Validators.pattern(question.pattern)]);
    else
    group[question.key] = question.required ? new FormControl(question.value || '', [Validators.required])
                                              : new FormControl(question.value || '',[]);
    });
    return new FormGroup(group);
  }


  isPasswordQuestion(question: QuestionBase<string>): question is PasswordQuestion {
    return (question as PasswordQuestion).pattern !== undefined;
}

}
