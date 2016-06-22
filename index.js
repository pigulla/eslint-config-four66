module.exports = {
    "parserOptions": {
        "ecmaVersion": 6
    },

    "env": {
        "browser": false,
        "node": false,
        "commonjs": false,
        "shared-node-browser": false,
        "es6": true,
        "worker": false,
        "amd": false,
        "mocha": false,
        "jasmine": false,
        "jest": false,
        "phantomjs": false,
        "protractor": false,
        "qunit": false,
        "jquery": false,
        "prototypejs": false,
        "shelljs": false,
        "meteor": false,
        "mongo": false,
        "applescript": false,
        "nashorn": false,
        "serviceworker": false,
        "atomtest": false,
        "embertest": false,
        "webextensions": false,
        "greasemonkey": false
    },

    "rules": {
        "comma-dangle": [2, "never"],
        "no-cond-assign": [2, "except-parens"],
        "no-console": 2,
        "no-constant-condition": 2,
        "no-control-regex": 2,
        "no-debugger": 2,
        "no-dupe-args": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-empty": 2,
        "no-empty-character-class": 2,
        "no-ex-assign": 2,
        "no-extra-boolean-cast": 2,
        "no-extra-parens": 0,
        "no-extra-semi": 2,
        "no-func-assign": 2,
        "no-inner-declarations": 2,
        "no-invalid-regexp": 2,
        "no-irregular-whitespace": 2,
        "no-negated-in-lhs": 2,
        "no-obj-calls": 2,
        "no-prototype-builtins": 0,
        "no-regex-spaces": 2,
        "no-sparse-arrays": 2,
        "no-unexpected-multiline": 2,
        "no-unreachable": 2,
        "no-unsafe-finally": 2,
        "use-isnan": 2,
        "valid-jsdoc": 0,
        "valid-typeof": 2,

        "accessor-pairs": [2, {
            "getWithoutSet": false,
            "setWithoutGet": true
        }],
        "array-callback-return": 2,
        "block-scoped-var": 2,
        "complexity": [2, 20],
        "consistent-return": 2,
        "curly": 2,
        "default-case": 2,
        "dot-location": [2, "property"],
        "dot-notation": 2,
        "eqeqeq": 2,
        "guard-for-in": 2,
        "no-alert": 2,
        "no-caller": 2,
        "no-case-declarations": 2,
        "no-div-regex": 0,
        "no-else-return": 0,
        "no-empty-pattern": 2,
        "no-eq-null": 2,
        "no-eval": 2,
        "no-extend-native": 2,
        "no-extra-bind": 2,
        "no-extra-label": 2,
        "no-fallthrough": 2,
        "no-floating-decimal": 2,
        "no-implicit-coercion": [2, {
            "boolean": false,
            "number": true,
            "string": false
        }],
        "no-implicit-globals": 2,
        "no-implied-eval": 2,
        "no-invalid-this": 0,
        "no-iterator": 2,
        "no-labels": 2,
        "no-lone-blocks": 2,
        "no-loop-func": 2,
        "no-magic-numbers": 0,
        "no-multi-spaces": 2,
        "no-multi-str": 2,
        "no-native-reassign": 2,
        "no-new": 2,
        "no-new-func": 2,
        "no-new-wrappers": 2,
        "no-octal": 2,
        "no-octal-escape": 2,
        "no-param-reassign": [2, {
            "props": false
        }],
        "no-proto": 2,
        "no-redeclare": 2,
        "no-return-assign": [2, "except-parens"],
        "no-script-url": 2,
        "no-self-assign": 2,
        "no-self-compare": 2,
        "no-sequences": 2,
        "no-throw-literal": 2,
        "no-unmodified-loop-condition": 2,
        "no-unused-expressions": 2,
        "no-unused-labels": 2,
        "no-useless-call": 2,
        "no-useless-concat": 2,
        "no-useless-escape": 2,
        "no-void": 2,
        "no-warning-comments": 0,
        "no-with": 2,
        "radix": 2,
        "vars-on-top": 0,
        "wrap-iife": [2, "inside"],
        "yoda": [2, "never"],

        "strict": [2, "global"],

        "init-declarations": 0,
        "no-catch-shadow": 2,
        "no-delete-var": 2,
        "no-label-var": 2,
        "no-restricted-globals": [2],
        "no-shadow": 2,
        "no-shadow-restricted-names": 2,
        "no-undef": 2,
        "no-undef-init": 2,
        "no-undefined": 0,
        "no-unused-vars": [2, {
            "vars": "local",
            "args": "none"
        }],
        "no-use-before-define": [2, "nofunc"],

        "callback-return": 2,
        "global-require": 2,
        "handle-callback-err": 2,
        "no-mixed-requires": [2, {
            "grouping": true,
            "allowCall": true
        }],
        "no-new-require": 2,
        "no-path-concat": 2,
        'no-process-env': 2,
        "no-process-exit": 2,
        "no-restricted-modules": 0,
        "no-sync": 0,

        "array-bracket-spacing": [2, "never"],
        "block-spacing": [2, "always"],
        "brace-style": [2, "1tbs", {
            "allowSingleLine": true
        }],
        "camelcase": [2, {
            "properties": "never"
        }],
        "comma-spacing": [2, {
            "before": false,
            "after": true
        }],
        "comma-style": [2, "last"],
        "computed-property-spacing": [2, "never"],
        "consistent-this": [2, "self"],
        "eol-last": 2,
        "func-names": 0,
        "func-style": [2, "declaration"],
        "id-blacklist": [2],
        "id-length": 0,
        "id-match": 0,
        "indent": [2, 4, {
            "SwitchCase": 1,
            "VariableDeclarator": 1
        }],
        "jsx-quotes": [2, "prefer-double"],
        "key-spacing": [2, {
            "beforeColon": false,
            "afterColon": true
        }],
        "keyword-spacing": [2, {
            "before": true,
            "after": true
        }],
        "linebreak-style": [2, "unix"],
        "lines-around-comment": 0,
        "max-depth": [2, 5],
        "max-len": [2, 120],
        "max-lines": [2, {
            "max": 500,
            "skipBlankLines": true,
            "skipComments": true
        }],
        "max-nested-callbacks": [2, 5],
        "max-params": [2, 6],
        "max-statements": [2, 25, {
            "ignoreTopLevelFunctions": true
        }],
        "max-statements-per-line": [2, {
            "max": 1
        }],
        "new-cap": [2, {
            "newIsCap": true,
            "capIsNew": true,
            "properties": true
        }],
        "new-parens": 2,
        "newline-after-var": [2, "always"],
        "newline-before-return": 0,
        "newline-per-chained-call": [2, {
            "ignoreChainWithDepth": 2
        }],
        "no-array-constructor": 2,
        "no-bitwise": 2,
        "no-continue": 0,
        "no-inline-comments": 0,
        "no-lonely-if": 2,
        "no-mixed-operators": 2,
        "no-mixed-spaces-and-tabs": 2,
        "no-multiple-empty-lines": 2,
        "no-negated-condition": 0,
        "no-nested-ternary": 2,
        "no-new-object": 2,
        "no-plusplus": 0,
        "no-restricted-syntax": [2, "WithStatement"],
        "no-spaced-func": 2,
        "no-ternary": 0,
        "no-trailing-spaces": 2,
        "no-underscore-dangle": 0,
        "no-unneeded-ternary": 2,
        "no-whitespace-before-property": 2,
        "object-curly-newline": [2, {
            "multiline": true
        }],
        "object-curly-spacing": [2, "always"],
        "object-property-newline": 2,
        "one-var": 0,
        "one-var-declaration-per-line": [2, "always"],
        "operator-assignment": [2, "always"],
        "operator-linebreak": [2, "after"],
        "padded-blocks": [2, "never"],
        "quote-props": 0,
        "quotes": [2, "single"],
        "require-jsdoc": [2, {
            "require": {
                "FunctionDeclaration": true,
                "MethodDefinition": true,
                "ClassDeclaration": true
            }
        }],
        "semi": 2,
        "semi-spacing": [2, {
            "before": false,
            "after": true
        }],
        "sort-vars": 0,
        "space-before-blocks": 0,
        "space-before-function-paren": [2, {
            "anonymous": "always",
            "named": "never"
        }],
        "space-in-parens": [2, "never"],
        "space-infix-ops": 2,
        "space-unary-ops": [2, {
            "words": true,
            "nonwords": false
        }],
        "spaced-comment": [2, "always"],
        "unicode-bom": [2, "never"],
        "wrap-regex": 0,

        "arrow-body-style": [2, "as-needed"],
        "arrow-parens": [2, "as-needed"],
        "arrow-spacing": [2, {
            "before": true,
            "after": true
        }],
        "constructor-super": 2,
        "generator-star-spacing": [2, {
            "before": false,
            "after": true
        }],
        "no-class-assign": 2,
        "no-confusing-arrow": [2, { "allowParens": true }],
        "no-const-assign": 2,
        "no-dupe-class-members": 2,
        "no-duplicate-imports": 2,
        "no-new-symbol": 2,
        "no-restricted-imports": [0],
        "no-this-before-super": 2,
        "no-useless-computed-key": 2,
        "no-useless-constructor": 2,
        "no-useless-rename": 2,
        "no-var": 0,
        "object-shorthand": 2,
        "prefer-arrow-callback": 0,
        "prefer-const": 2,
        "prefer-reflect": 0,
        "prefer-rest-params": 0,
        "prefer-spread": 2,
        "prefer-template": 2,
        "require-yield": 2,
        "rest-spread-spacing": [2, "never"],
        "sort-imports": [2, {
            "ignoreCase": false,
            "ignoreMemberSort": false,
            "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
        }],
        "template-curly-spacing": [2, "never"],
        "yield-star-spacing": [2, "before"]
    }
};