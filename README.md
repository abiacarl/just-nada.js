## just-nada.js

The script that does absolutely nothing. Document and design your database in javascript.

- Create.
- Do nothing.
- Repeat.

That's it!

## Structure

``` javascript
export  class  MyClass  extends  Base {
	model = 'My';
	columns = {};
	relationships = {};
}
```

## Example

``` javascript
export  class  UserClass  extends  Base {
	model = 'User';

	columns = {
		id: 'integer',
		name: 'string'
	};

	relationships = {
		roles: this.belongsToMany(RoleClass)
	};
}
```

## Contributing

If you see areas for improvement, please open an issue or submit a PR or just do nothing.

## License

Licensed under the [MIT license](https://opensource.org/licenses/MIT).
