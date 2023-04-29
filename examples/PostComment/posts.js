import { Base } from '../../src';
import { CommentClass } from './comments';

export class PostClass extends Base {
    model = 'Post';

    columns = {
        id: 'id',
        user_id: 'unsignedBigInteger',
        title: 'string',
        description: 'text',
    };

    relationships = {
        comments: this.hasMany(CommentClass), // this.hasMany(CommentClass, 'foreign_key', 'local_key')
    };
}
