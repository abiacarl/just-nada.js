import { noop } from './utils';

export default class Model {
    as(...args) {
        noop(args);
        return this;
    }

    one(...args) {
        noop(args);
        return this;
    }

    hasOne(...args) {
        noop(args);
        return this;
    }

    hasOneThrough(...args) {
        noop(args);
        return this;
    }

    hasMany(...args) {
        noop(args);
        return this;
    }

    hasManyThrough(...args) {
        noop(args);
        return this;
    }

    belongsTo(...args) {
        noop(args);
        return this;
    }

    belongsToMany(...args) {
        noop(args);
        return this;
    }

    morphTo(...args) {
        noop(args);
        return this;
    }

    morphToMany(...args) {
        noop(args);
        return this;
    }

    morphedByMany(...args) {
        noop(args);
        return this;
    }

    morphOne(...args) {
        noop(args);
        return this;
    }

    morphMany(...args) {
        noop(args);
        return this;
    }

    orderBy(...args) {
        noop(args);
        return this;
    }

    ofMany(...args) {
        noop(args);
        return this;
    }

    latestOfMany(...args) {
        noop(args);
        return this;
    }

    oldestOfMany(...args) {
        noop(args);
        return this;
    }

    withPivot(...args) {
        noop(args);
        return this;
    }

    withDefault(...args) {
        noop(args);
        return this;
    }

    withTimestamps(...args) {
        noop(args);
        return this;
    }

    where(...args) {
        noop(args);
        return this;
    }

    orderByPivot(...args) {
        noop(args);
        return this;
    }

    wherePivot(...args) {
        noop(args);
        return this;
    }

    wherePivotIn(...args) {
        noop(args);
        return this;
    }

    wherePivotNotIn(...args) {
        noop(args);
        return this;
    }

    wherePivotBetween(...args) {
        noop(args);
        return this;
    }

    wherePivotNotBetween(...args) {
        noop(args);
        return this;
    }

    wherePivotNull(...args) {
        noop(args);
        return this;
    }

    wherePivotNotNull(...args) {
        noop(args);
        return this;
    }

    using(...args) {
        noop(args);
        return this;
    }
}
