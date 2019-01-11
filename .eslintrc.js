module.exports = {
    "env": {
        "browser": true,
        // "es6": false
    },
    // "extends": "eslint:recommended",//适用推荐的
    "parserOptions": {
        "ecmaVersion": 2015,
        "sourceType": "module"
    },
    "rules": {
        "no-alert": 2,
        "no-undef": 2,
        "no-unused-vars": [2, {"vars": "all", "args": "after-used"}], //定义未使用
    }
};