import { QuestionBase } from './question-base';

export class PasswordQuestion extends QuestionBase<string> {

    // pattern!: string;   //only english
    // patternMsg!: string

    pattern: string;   //only english
    patternMsg: string

    override controlType = 'password';
   // override pattern = '^[a-zA-Z_0-9 ]+$';   
    //override patternMsg = 'only english'

    constructor(options: {
        value?: string;
        key?: string;
        label?: string;
        required?: boolean;
        order?: number;
        controlType?: string;
        type?: string;
        options?: { key: string, value: string }[];
    } = {},   pattern: string,
    patternMsg: string
       ) {
        super( options);
        this.pattern=pattern;
        this.patternMsg=patternMsg
       
    }


}
