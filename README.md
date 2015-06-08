# jQuery Reshow Modal

### Take a control of modal popup depend on number of page has been visited

## Usage

1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="dist/jquery.reshowmodal.min.js"></script>
	```

3. Call the plugin:

	```javascript
	$("#element").ReshowModal({
		propertyName: "a custom value"
	});
	```

## Structure

The basic structure of the project is given in the following way:

```
├── demo/
│   └── index.html
├── dist/
│   ├── jquery.reshowmodal.js
│   └── jquery.reshowmodal.min.js
│   └── jquery.reshowmodal.css
├── src/
│   ├── jquery.reshowmodal.less
│   └── jquery.reshowmodal.js
├── .editorconfig
├── .gitignore
├── .jshintrc
├── .travis.yml
├── boilerplate.jquery.json
├── Gruntfile.js
└── package.json
```
