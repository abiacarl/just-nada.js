import { Base } from '../../src';
import { PhoneClass } from './phones';

export class UserClass extends Base {
    model = 'User';

    columns = {
        id: 'id',
        first_name: 'string',
        middle_name: 'string|nullable',
        last_name: 'string',
        email: 'string|unique()',
        email_verified_at: 'timestamp|nullable',
        rememberToken() {},
        timestamps() {},
        softDeletes() {},
    };

    relationships = {
        phone: this.hasOne(PhoneClass),
    };
}
