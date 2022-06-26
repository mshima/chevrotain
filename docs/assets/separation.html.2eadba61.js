import{_ as s,r,o as a,c as i,a as t,b as n,e}from"./app.ca20ebd6.js";const c={},_=t("h1",{id:"separation-of-grammar-and-semantics",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#separation-of-grammar-and-semantics","aria-hidden":"true"},"#"),e(" Separation of Grammar and Semantics")],-1),l=e("Chevrotain is not limited like many other parsing libraries to only embedding actions inside the grammar, It can also "),h=t("strong",null,"automatically",-1),d=e(" create a "),m={href:"https://chevrotain.io/docs/guide/concrete_syntax_tree.html",target:"_blank",rel:"noopener noreferrer"},p=t("strong",null,"C",-1),u=e("oncrete "),g=t("strong",null,"S",-1),f=e("yntax "),b=t("strong",null,"T",-1),k=e("ree"),x=e(" Which can later be traversed using the "),v={href:"https://en.wikipedia.org/wiki/Visitor_pattern",target:"_blank",rel:"noopener noreferrer"},S=e("visitor pattern"),w=e("."),y=e("This implements the design principle of "),C={href:"https://en.wikipedia.org/wiki/Separation_of_concerns",target:"_blank",rel:"noopener noreferrer"},V=e("Separation of Concerns"),T=e(" which enables "),B=t("strong",null,"re-use",-1),E=e(" of the same "),I=t("strong",null,"pure",-1),N=e(" grammar for multiple purposes."),j=t("p",null,"See example of two identical mathematical expression grammars:",-1),L=e("Firstly using "),F={href:"https://github.com/chevrotain/chevrotain/blob/master/examples/grammars/calculator/calculator_embedded_actions.js",target:"_blank",rel:"noopener noreferrer"},G=e("embedded actions"),W=e(" for semantics."),q=e("Secondly using "),z={href:"https://github.com/chevrotain/chevrotain/blob/master/examples/grammars/calculator/calculator_pure_grammar.js",target:"_blank",rel:"noopener noreferrer"},A=e("Separated semantics"),D=e(" with a CST Visitor.");function H(J,K){const o=r("ExternalLinkIcon");return a(),i("div",null,[_,t("p",null,[l,h,d,t("a",m,[p,u,g,f,b,k,n(o)]),x,t("a",v,[S,n(o)]),w]),t("p",null,[y,t("a",C,[V,n(o)]),T,B,E,I,N]),j,t("ul",null,[t("li",null,[L,t("a",F,[G,n(o)]),W]),t("li",null,[q,t("a",z,[A,n(o)]),D])])])}var O=s(c,[["render",H],["__file","separation.html.vue"]]);export{O as default};
