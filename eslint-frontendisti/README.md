# eslint-plugin-frontendisti

Ensure correct Lodash imports.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-frontendisti`:

```
$ npm install eslint-plugin-frontendisti --save-dev
```


## Usage

Add `frontendisti` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "frontendisti"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "frontendisti/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





