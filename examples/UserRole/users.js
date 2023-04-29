import { Base } from '../../src';
import { RoleClass } from './roles';

export class UserClass extends Base {
    model = 'User';

    columns = {
        id: 'integer',
        name: 'string',
    };

    relationships = {
        roles: this.belongsToMany(RoleClass), // this.belongsToMany(RoleClass, 'role_user', 'user_id', 'role_id')
    };
}
