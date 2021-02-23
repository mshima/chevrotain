(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{396:function(t,e,a){"use strict";a.r(e);var n=a(43),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"creating-custom-parsing-apis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-custom-parsing-apis"}},[t._v("#")]),t._v(" Creating Custom Parsing APIs")]),t._v(" "),a("p",[t._v("Chevrotain can be used as the underlying engine for other parsing libraries.")]),t._v(" "),a("p",[t._v("The general flow is:")]),t._v(" "),a("ol",[a("li",[t._v("Creating a GAST (Grammar AST) data structure.")]),t._v(" "),a("li",[t._v("Resolving and validating the GAST Structure.")]),t._v(" "),a("li",[t._v("Generating the parser code and executing.\n"),a("ul",[a("li",[t._v('Can be done "in memory" without writing to file in certain runtime envs.')])])])]),t._v(" "),a("h3",{attrs:{id:"tldr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tldr"}},[t._v("#")]),t._v(" TLDR")]),t._v(" "),a("p",[t._v("Skip to "),a("a",{attrs:{href:"https://github.com/chevrotain/chevrotain/tree/master/examples/custom_apis/",target:"_blank",rel:"noopener noreferrer"}},[t._v("runnable examples"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"gast-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gast-structure"}},[t._v("#")]),t._v(" GAST Structure")]),t._v(" "),a("p",[t._v("The structure of the GAST is made up of the following classes:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://chevrotain.io/documentation/7_1_2/classes/rule.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rule"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chevrotain.io/documentation/7_1_2/classes/terminal.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Terminal"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chevrotain.io/documentation/7_1_2/classes/nonterminal.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("NonTerminal"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chevrotain.io/documentation/7_1_2/classes/alternation.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Alternation"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chevrotain.io/documentation/7_1_2/classes/option.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Option"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chevrotain.io/documentation/7_1_2/classes/repetition.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Repetition"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chevrotain.io/documentation/7_1_2/classes/repetitionwithseparator.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("RepetitionWithSeparator"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chevrotain.io/documentation/7_1_2/classes/repetitionmandatory.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("RepetitionMandatory"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chevrotain.io/documentation/7_1_2/classes/repetitionmandatorywithseparator.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("RepetitionMandatoryWithSeparator"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chevrotain.io/documentation/7_1_2/classes/alternative.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Alternative"),a("OutboundLink")],1),t._v(" (sequence)")])]),t._v(" "),a("p",[t._v("For example to define a grammar rule for a fully qualified name:")]),t._v(" "),a("div",{staticClass:"language-antlr extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("fqn : Ident (Dot Ident)\n")])])]),a("p",[t._v("Is equivalent to:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createToken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Rule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Terminal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Repetition "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chevrotain"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Ident "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ident"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pattern"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/[a-zA-Z]\\w+/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Dot "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createToken")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Dot"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pattern"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\./")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fqn "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Rule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fqn"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  definition"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Terminal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" terminalType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ident "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Repetition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      definition"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Terminal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" terminalType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Dot "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Terminal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" terminalType"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ident "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Important to note that:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("By default the definition array for each GAST class acts as a sequence,\nHowever in the case of Alternation each element in the definition array represents a different\nalternative which should be wrapped in the "),a("code",[t._v("Alternative")]),t._v(" class.")]),t._v(" "),a("p",[t._v("e.g:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Alternative"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Alternation "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"chevrotain"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" gastAlts "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Alternation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  definition"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// first alternative")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Alternative")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      definition"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*...*/")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// second alternative")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Alternative")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      definition"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*...*/")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// third alternative")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Alternative")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      definition"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*...*/")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"grammar-validations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grammar-validations"}},[t._v("#")]),t._v(" Grammar Validations")]),t._v(" "),a("p",[t._v("Chevrotain exposes three functions for Grammar(GAST) Validation purposes:")]),t._v(" "),a("ol",[a("li",[a("p",[a("a",{attrs:{href:"https://chevrotain.io/documentation/7_1_2/globals.html#resolvegrammar",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("resolveGrammar")]),a("OutboundLink")],1),t._v("\nNonTerminals are often referenced by their name as cyclic references will make\na direct object reference impossible, for example with right recursion:")]),t._v(" "),a("div",{staticClass:"language-antlr extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("   rule1: A (rule1)?\n")])])]),a("p",[t._v('The resolveGrammar function will resolve (mutate the input rules) such "name only" references\nto the actual Rule instance.')]),t._v(" "),a("p",[t._v("For any reference that cannot be resolved an error object will be outputted,\nthis object will contain an error message which can be customized by providing\na custom implementation of "),a("a",{attrs:{href:"https://chevrotain.io/documentation/7_1_2/interfaces/igrammarresolvererrormessageprovider.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("IGrammarResolverErrorMessageProvider"),a("OutboundLink")],1),t._v(".\nThe "),a("a",{attrs:{href:"https://chevrotain.io/documentation/7_1_2/globals.html#defaultgrammarresolvererrorprovider",target:"_blank",rel:"noopener noreferrer"}},[t._v("default implementation"),a("OutboundLink")],1),t._v(" also exported as part of the public API.")])])]),t._v(" "),a("ol",[a("li",[a("p",[a("a",{attrs:{href:"https://chevrotain.io/documentation/7_1_2/globals.html#validategrammar",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("validateGrammar")]),a("OutboundLink")],1),t._v("\nChevrotain expose a set of checks on the grammar structure that it is "),a("strong",[t._v("highly recommended")]),t._v(" to execute.\nThese checks will detect ambiguous alternatives, left recursion, conflicting Terminals & NonTerminal names and more...")]),t._v(" "),a("p",[t._v("validateGrammar is side effect free and like resolveGrammar will return an array of error objects.\nThe error messages in these objects can once again be customized by providing a "),a("a",{attrs:{href:"https://chevrotain.io/documentation/7_1_2/interfaces/igrammarvalidatorerrormessageprovider.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("IGrammarResolverErrorMessageProvider"),a("OutboundLink")],1),t._v("\noptionally based on the "),a("a",{attrs:{href:"https://chevrotain.io/documentation/7_1_2/globals.html#defaultgrammarvalidatorerrorprovider",target:"_blank",rel:"noopener noreferrer"}},[t._v("default implementation"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://chevrotain.io/documentation/7_1_2/globals.html#assignoccurrenceindices",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("assignOccurrenceIndices")]),a("OutboundLink")],1),t._v('\nChevrotain has certain constraint on the "shape" of the generated code. The relevant one in this case is the '),a("a",{attrs:{href:"https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES",target:"_blank",rel:"noopener noreferrer"}},[t._v("unique numerical suffixes"),a("OutboundLink")],1),t._v(" for the DSL methods.\nThe assignOccurrenceIndices function will take care of this requirement by mutating the idx property on the GAST classes accordingly.")])])]),t._v(" "),a("h3",{attrs:{id:"a-note-on-custom-error-messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-note-on-custom-error-messages"}},[t._v("#")]),t._v(" A Note on Custom Error Messages")]),t._v(" "),a("p",[t._v("As mentioned earlier "),a("strong",[t._v("validateGrammar")]),t._v(" "),a("strong",[t._v("assignOccurrenceIndices")]),t._v(" optionally accept\na "),a("a",{attrs:{href:"https://chevrotain.io/documentation/7_1_2/globals.html#validategrammar",target:"_blank",rel:"noopener noreferrer"}},[t._v("errMsgProvider"),a("OutboundLink")],1),t._v(" option.\nNote that all custom error message builders receive a GAST instance as input. What this means is that\nthe GAST classes created by the implementor of the custom API can be augmented with additional information to enable\nproducing better error messages. e.g:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("A Parser Generator style API using an EBNF notation in a "),a("strong",[t._v("separate file")]),t._v(".\nmay add location (line/column/offset) information to be able to link to locations in the original EBNF styled file.")])]),t._v(" "),a("li",[a("p",[t._v("A Parser combinator API may attempt to reconstruct the original text of its API invocations to give better hints\nto assist in locating the original error.")])])]),t._v(" "),a("h2",{attrs:{id:"code-generation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-generation"}},[t._v("#")]),t._v(" Code Generation")]),t._v(" "),a("p",[t._v("There are two APIs for code generation and execution.")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://chevrotain.io/documentation/7_1_2/globals.html#generateparsermodule",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("generateParserModule")]),a("OutboundLink")],1),t._v("\nThis will generate the string literal of a "),a("a",{attrs:{href:"https://github.com/umdjs/umd",target:"_blank",rel:"noopener noreferrer"}},[t._v("UMD"),a("OutboundLink")],1),t._v(" module.\nThis UMD pattern is consumable in all standard JS runtimes & module implementations.\nThe approach is to generate the string literal and write it to a file for later consumption.\nHowever for development purposes or under certain runtimes it is possible to skip the file creation\nFor example see the "),a("a",{attrs:{href:"https://github.com/floatdrop/require-from-string",target:"_blank",rel:"noopener noreferrer"}},[t._v("require-from-string"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://chevrotain.io/documentation/7_1_2/globals.html#generateparserfactory",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("generateParserFactory")]),a("OutboundLink")],1),t._v("\nThis API skips string literal and directly evals (new Function(...)) the code and returns\na factory that can be used to create Parser instances.")]),t._v(" "),a("p",[t._v("This can be useful for development and testing purposes but be wary\nas certain execution environments disallow the use of eval/new Function.\nSpecifically web pages with content security policy enabled and browser extensions.\nHowever if the custom API is targeting only a node.js runtime this can be very\nuseful for example for a combinator style API in which code generation is best\navoided.")])])]),t._v(" "),a("h2",{attrs:{id:"runnable-examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#runnable-examples"}},[t._v("#")]),t._v(" Runnable Examples")]),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://github.com/chevrotain/chevrotain/tree/master/examples/custom_apis/combinator",target:"_blank",rel:"noopener noreferrer"}},[t._v("Combinator Style"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://github.com/rdking/chevrotain-ebnf",target:"_blank",rel:"noopener noreferrer"}},[t._v("EBNF Style with optional code generation"),a("OutboundLink")],1),t._v(" "),a("strong",[t._v("external")]),t._v(" project by @rdking.")])])]),t._v(" "),a("h2",{attrs:{id:"limitations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limitations"}},[t._v("#")]),t._v(" Limitations")]),t._v(" "),a("p",[t._v("The Following features are currently unsupported.")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Embedded actions")]),t._v(", which means the only way to get output from the parser is by enabling automatic "),a("a",{attrs:{href:"https://chevrotain.io/docs/guide/concrete_syntax_tree.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Concrete Syntax Tree"),a("OutboundLink")],1),t._v(" creation.")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/chevrotain/chevrotain/blob/master/examples/parser/predicate_lookahead/predicate_lookahead.js",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("Gates/Predicates")]),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/chevrotain/chevrotain/blob/master/examples/parser/parametrized_rules/parametrized.js",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("Parameterized Rules")]),a("OutboundLink")],1),t._v(".")])])])}),[],!1,null,null,null);e.default=r.exports}}]);