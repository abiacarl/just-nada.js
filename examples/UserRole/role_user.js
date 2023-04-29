import { Base } from '../../src';

export class RoleUserClass extends Base {
    columns = {
        user_id: 'integer',
        role_id: 'integer',
    };
}
