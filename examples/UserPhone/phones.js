import { Base } from '../../src';
import { UserClass } from './users';

export class PhoneClass extends Base {
    model = 'Phone';

    columns = {
        id: 'id',
        number: 'string|nullable',
    };

    relationships = {
        user: this.belongsTo(UserClass),
    };
}
