import { Base } from '../../src';
import { PostClass } from './posts';

export class CommentClass extends Base {
    model = 'Comment';

    columns = {
        id: 'id',
        post_id: 'unsignedBigInteger', // 'foreignId|constrained|cascadeOnDelete',
        comment: 'text',
    };

    relationships = {
        post: this.belongsTo(PostClass), // this.belongsTo(PostClass, 'foreign_key', 'owner_key')
    };
}
