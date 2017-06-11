import {IKeyValue} from './key-value';

export interface IUserPrefs {
    RASI: IKeyValue[];
    STAR: IKeyValue[];
    RELIGION: IKeyValue[]; //Missing in user registration form
    MARITAL_STATUS: IKeyValue[];
    FAMILY_STATUS: IKeyValue[]; //Missing
    FAMILY_TYPE: IKeyValue[]; //Missing
    FAMILY_VALUES: IKeyValue[]; //Missing
}