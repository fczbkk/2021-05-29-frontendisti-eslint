/**
 * @fileoverview Ensure Lodash import
 * @author fczbkk
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/lodash-import"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("lodash-import", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "import { fill, get as getNestedProperty } from 'lodash'",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
