/**
 * @fileoverview Ensure Lodash import
 * @author fczbkk
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Ensure Lodash import",
            category: "Fill me in",
            recommended: false
        },
        fixable: 'code',  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function (context) {
      function isLodashImport(node) {
        return ["lodash", "lodash-es"].includes(node.source.value);
      }

      function convertLodashImport(node) {
        return node.specifiers
          .map((specifier) => {
            const imported = specifier.imported.name;
            const local = specifier.local.name;
            return `import ${local} from 'lodash-es/${imported}'`;
          })
          .join("\n");
      }

      return {
        ImportDeclaration(node) {
          if (isLodashImport(node)) {
            context.report({
              node,
              message: "Do not use template literals",
              fix(fixer) {
                return fixer.replaceText(node, convertLodashImport(node));
              }
            });
          }
        }
      };
    }
};
