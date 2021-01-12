module.exports = { 
    "root": true,
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "node": true,
        "es6": false,
    },
    "extends": "eslint:recommended",
    "parser":"babel-eslint",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
