import Model from './model';

export class Base extends Model {
    model = null;

    // Available Column Types (https://laravel.com/docs/10.x/migrations#available-column-types)
    columns = {};

    // Eloquent: Relationships (https://laravel.com/docs/10.x/eloquent-relationships)
    relationships = {};
}
