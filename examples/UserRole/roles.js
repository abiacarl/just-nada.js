import { Base } from '../../src';
import { UserClass } from './users';

export class RoleClass extends Base {
    model = 'Role';

    columns = {
        id: 'integer',
        name: 'string',
    };

    relationships = {
        users: this.belongsToMany(UserClass),
    };
}
