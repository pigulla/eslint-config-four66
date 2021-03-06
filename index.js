'use strict';

/* eslint-env node */
/* eslint-disable array-bracket-newline */

module.exports = {
    parserOptions: {
        'ecmaVersion': 7
    },
    env: {
        'browser': false,
        'node': false,
        'commonjs': false,
        'shared-node-browser': false,
        'es6': true,
        'worker': false,
        'amd': false,
        'mocha': false,
        'jasmine': false,
        'jest': false,
        'phantomjs': false,
        'protractor': false,
        'qunit': false,
        'jquery': false,
        'prototypejs': false,
        'shelljs': false,
        'meteor': false,
        'mongo': false,
        'applescript': false,
        'nashorn': false,
        'serviceworker': false,
        'atomtest': false,
        'embertest': false,
        'webextensions': false,
        'greasemonkey': false
    },

    'rules': {
        // Possible Errors (http://eslint.org/docs/rules/#possible-errors)
        'for-direction': 'error',
        'getter-return': 'error',
        'no-await-in-loop': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': ['error', 'except-parens'],
        'no-console': 'error',
        'no-constant-condition': 'error',
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty': 'error',
        'no-empty-character-class': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-parens': 'off',
        'no-extra-semi': 'error',
        'no-func-assign': 'error',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-obj-calls': 'error',
        'no-prototype-builtins': 'off',
        'no-regex-spaces': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'use-isnan': 'error',
        'valid-jsdoc': 'off',
        'valid-typeof': 'error',

        // Best Practices (http://eslint.org/docs/rules/#best-practices)
        'accessor-pairs': [
            'error',
            {
                'getWithoutSet': false,
                'setWithoutGet': true
            }
        ],
        'array-callback-return': 'error',
        'block-scoped-var': 'error',
        'class-methods-use-this': 'error',
        'complexity': ['error', 20],
        'consistent-return': 'error',
        'curly': 'error',
        'default-case': 'error',
        'dot-location': ['error', 'property'],
        'dot-notation': 'error',
        'eqeqeq': 'error',
        'guard-for-in': 'error',
        'no-alert': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-div-regex': 'off',
        'no-else-return': 'off',
        'no-empty-function': 'error',
        'no-empty-pattern': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-global-assign': [
            'error',
            {
                'exceptions': []
            }
        ],
        'no-implicit-coercion': [
            'error',
            {
                'boolean': false,
                'number': true,
                'string': false
            }
        ],
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-invalid-this': 'off',
        'no-iterator': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-magic-numbers': 'off',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': [
            'error',
            {
                'props': false
            }
        ],
        'no-proto': 'error',
        'no-redeclare': 'error',
        'no-restricted-properties': 'off',
        'no-return-assign': ['error', 'except-parens'],
        'no-return-await': 'error',
        'no-script-url': 'error',
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unused-expressions': 'error',
        'no-unused-labels': 'error',
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        'no-useless-escape': 'error',
        'no-useless-return': 'error',
        'no-void': 'error',
        'no-warning-comments': 'off',
        'no-with': 'error',
        'radix': 'error',
        'prefer-promise-reject-errors': 'error',
        'require-await': 'error',
        'vars-on-top': 'off',
        'wrap-iife': ['error', 'inside', {
            'functionPrototypeMethods': true
        }],
        'yoda': ['error', 'never'],

        // Strict Mode (http://eslint.org/docs/rules/#strict-mode)
        'strict': ['error', 'global'],

        // Variables (http://eslint.org/docs/rules/#variables)
        'init-declarations': 'off',
        'no-catch-shadow': 'error',
        'no-delete-var': 'error',
        'no-label-var': 'error',
        'no-restricted-globals': 'error',
        'no-shadow': 'error',
        'no-shadow-restricted-names': 'error',
        'no-undef': 'error',
        'no-undef-init': 'error',
        'no-undefined': 'off',
        'no-unused-vars': [
            'error',
            {
                'ignoreRestSiblings': true,
                'args': 'none'
            }
        ],
        'no-use-before-define': ['error', 'nofunc'],

        // Node.js and CommonJS (http://eslint.org/docs/rules/#nodejs-and-commonjs)
        'callback-return': 'error',
        'global-require': 'error',
        'handle-callback-err': 'error',
        'no-buffer-constructor': 'error',
        'no-mixed-requires': [
            'error',
            {
                'grouping': true,
                'allowCall': true
            }
        ],
        'no-new-require': 'error',
        'no-path-concat': 'error',
        'no-process-env': 'error',
        'no-process-exit': 'error',
        'no-restricted-modules': 'off',
        'no-sync': 'off',

        // Stylistic Issues (http://eslint.org/docs/rules/#stylistic-issues)
        'array-bracket-newline': [
            'error',
            {
                'multiline': true
            }
        ],
        'array-bracket-spacing': ['error', 'never'],
        'array-element-newline': 'off',
        'block-spacing': ['error', 'always'],
        'brace-style': [
            'error',
            '1tbs',
            {
                'allowSingleLine': true
            }
        ],
        'camelcase': 'off',
        'capitalized-comments': 'off',
        'comma-dangle': ['error', 'never'],
        'comma-spacing': [
            'error',
            {
                'before': false,
                'after': true
            }
        ],
        'comma-style': ['error', 'last'],
        'computed-property-spacing': ['error', 'never'],
        'consistent-this': ['error', 'self'],
        'eol-last': 'error',
        'func-call-spacing': [2, 'never'],
        'func-names': 'off',
        'func-name-matching': 'off',
        'function-paren-newline': ['error', 'consistent'],
        'func-style': ['error', 'declaration'],
        'id-blacklist': 'error',
        'id-length': 'off',
        'id-match': 'off',
        'implicit-arrow-linebreak': ['error', 'beside'],
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1,
                'VariableDeclarator': 1
            }
        ],
        'jsx-quotes': ['error', 'prefer-double'],
        'key-spacing': [
            'error',
            {
                'beforeColon': false,
                'afterColon': true
            }
        ],
        'keyword-spacing': [
            'error',
            {
                'before': true,
                'after': true
            }
        ],
        'line-comment-position': 'off',
        'linebreak-style': ['error', 'unix'],
        'lines-around-comment': 'off',
        'lines-between-class-members': [
            'error',
            'always',
            {
                exceptAfterSingleLine: true
            }
        ],
        'max-depth': ['error', 5],
        'max-len': [
            'error',
            {
                'code': 120,
                'tabWidth': 4,
                'comments': 120,
                'ignoreComments': false,
                'ignoreRegExpLiterals': true,
                'ignoreStrings': false,
                'ignoreTemplateLiterals': false,
                'ignoreTrailingComments': true,
                'ignoreUrls': false
            }
        ],
        'max-lines': [
            'error',
            {
                'max': 500,
                'skipBlankLines': true,
                'skipComments': true
            }
        ],
        'max-nested-callbacks': ['error', 5],
        'max-params': ['error', 6],
        'max-statements': [
            'error',
            25,
            {
                'ignoreTopLevelFunctions': true
            }
        ],
        'max-statements-per-line': [
            'error',
            {
                'max': 1
            }
        ],
        'multiline-comment-style': 'off',
        'multiline-ternary': 'off',
        'new-cap': [
            'error',
            {
                'newIsCap': true,
                'capIsNew': true,
                'properties': true
            }
        ],
        'new-parens': 'error',
        'newline-per-chained-call': 'off',
        'no-array-constructor': 'error',
        'no-bitwise': 'error',
        'no-continue': 'off',
        'no-inline-comments': 'off',
        'no-lonely-if': 'error',
        'no-mixed-operators': 'off',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-assign': 'error',
        'no-multiple-empty-lines': 'error',
        'no-negated-condition': 'off',
        'no-nested-ternary': 'off',
        'no-new-object': 'error',
        'no-plusplus': 'off',
        'no-restricted-syntax': ['error', 'WithStatement'],
        'no-tabs': 'error',
        'no-ternary': 'off',
        'no-trailing-spaces': ['error', {
            'skipBlankLines': false,
            'ignoreComments': true
        }],
        'no-underscore-dangle': 'off',
        'no-unneeded-ternary': 'error',
        'no-whitespace-before-property': 'error',
        'nonblock-statement-body-position': 'off',
        'object-curly-newline': 'off',
        'object-curly-spacing': ['error', 'always'],
        'object-property-newline': [
            'error',
            {
                'allowAllPropertiesOnSameLine': true
            }
        ],
        'one-var': 'off',
        'one-var-declaration-per-line': ['error', 'initializations'],
        'operator-assignment': ['error', 'always'],
        'operator-linebreak': ['error', 'before'],
        'padded-blocks': ['error', 'never'],
        'padding-line-between-statements': ['error',
            {
                'blankLine': 'always',
                'prev': 'directive',
                'next': '*'
            }
        ],
        'quote-props': 'off',
        'quotes': [
            'error',
            'single',
            {
                'avoidEscape': true
            }
        ],
        'require-jsdoc': 'off',
        'semi': 'error',
        'semi-spacing': [
            'error',
            {
                'before': false,
                'after': true
            }
        ],
        'sort-keys': 'off',
        'sort-vars': 'off',
        'space-before-blocks': 'off',
        'space-before-function-paren': [
            'error',
            {
                'anonymous': 'always',
                'named': 'never',
                'asyncArrow': 'always'
            }
        ],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'space-unary-ops': [
            'error',
            {
                'words': true,
                'nonwords': false
            }
        ],
        'spaced-comment': [
            'error',
            'always',
            {
                'block': {
                    'balanced': true
                }
            }
        ],
        'switch-colon-spacing': [
            'error',
            {
                'after': true,
                'before': false
            }
        ],
        'template-tag-spacing': ['error', 'never'],
        'unicode-bom': ['error', 'never'],
        'wrap-regex': 'off',

        // ECMAScript 6 (http://eslint.org/docs/rules/#ecmascript-6)
        'arrow-body-style': ['error', 'as-needed'],
        'arrow-parens': ['error', 'as-needed'],
        'arrow-spacing': [
            'error',
            {
                'before': true,
                'after': true
            }
        ],
        'constructor-super': 'error',
        'generator-star-spacing': [
            'error',
            {
                'before': false,
                'after': true
            }
        ],
        'no-class-assign': 'error',
        'no-confusing-arrow': ['error', {
            'allowParens': true
        }],
        'no-const-assign': 'error',
        'no-dupe-class-members': 'error',
        'no-duplicate-imports': 'error',
        'no-new-symbol': 'error',
        'no-restricted-imports': 'error',
        'no-this-before-super': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'no-var': 'error',
        'object-shorthand': 'error',
        'prefer-arrow-callback': 'off',
        'prefer-const': 'error',
        'prefer-destructuring': ['off'],
        'prefer-numeric-literals': 'error',
        'prefer-rest-params': 'off',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'require-yield': 'error',
        'rest-spread-spacing': ['error', 'never'],
        'sort-imports': 'off',
        'symbol-description': 'error',
        'template-curly-spacing': ['error', 'never'],
        'yield-star-spacing': ['error', 'before']
    }
};
