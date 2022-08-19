import{_ as o,r as a,o as r,c as i,a as e,b as t,e as s,d as l}from"./app.19e89400.js";const c={},p=e("h1",{id:"customizable-error-messages",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#customizable-error-messages","aria-hidden":"true"},"#"),s(" Customizable Error Messages")],-1),_=e("p",null,"Chevrotain allows users to customize both the parser and lexer error messages. This can be accomplished by implementing the following interfaces:",-1),u={href:"https://chevrotain.io/documentation/10_2_0/interfaces/IParserErrorMessageProvider.html",target:"_blank",rel:"noopener noreferrer"},d=s("IParserErrorMessageProvider"),h={href:"https://chevrotain.io/documentation/10_2_0/interfaces/ILexerErrorMessageProvider.html",target:"_blank",rel:"noopener noreferrer"},m=s("ILexerErrorMessageProvider"),v=e("p",null,"See executable examples:",-1),f={href:"https://github.com/chevrotain/chevrotain/blob/master/examples/parser/custom_errors/custom_errors.js",target:"_blank",rel:"noopener noreferrer"},b=s("Custom Parser Errors"),g=s("."),k={href:"https://github.com/chevrotain/chevrotain/blob/master/examples/lexer/custom_errors/custom_errors.js",target:"_blank",rel:"noopener noreferrer"},E=s("Custom Lexer Errors"),x=s("."),S=l(`<p>In addition it is also possible to directly provide strings values to be used in errors for specific parsing DSL methods, for example:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>$<span class="token punctuation">.</span><span class="token constant">RULE</span><span class="token punctuation">(</span><span class="token string">&quot;myStatement&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  $<span class="token punctuation">.</span><span class="token constant">CONSUME</span><span class="token punctuation">(</span>SemiColon<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token constant">ERR_MSG</span><span class="token operator">:</span> <span class="token string">&quot;expecting semiColon at end of myStatement&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <strong>ERR_MSG</strong> config property is available for the following DSL methods:</p>`,3),C={href:"https://chevrotain.io/documentation/10_2_0/classes/CstParser.html#CONSUME",target:"_blank",rel:"noopener noreferrer"},P=s("CONSUME"),L={href:"https://chevrotain.io/documentation/10_2_0/classes/CstParser.html#OR",target:"_blank",rel:"noopener noreferrer"},N=s("OR"),T={href:"https://chevrotain.io/documentation/10_2_0/classes/CstParser.html#AT_LEAST_ONE",target:"_blank",rel:"noopener noreferrer"},M=s("AT_LEAST_ONE"),O={href:"https://chevrotain.io/documentation/10_2_0/classes/CstParser.html#AT_LEAST_ONE_SEP",target:"_blank",rel:"noopener noreferrer"},A=s("AT_LEAST_ONE_SEP");function I(R,j){const n=a("ExternalLinkIcon");return r(),i("div",null,[p,_,e("ul",null,[e("li",null,[e("a",u,[d,t(n)])]),e("li",null,[e("a",h,[m,t(n)])])]),v,e("ul",null,[e("li",null,[e("a",f,[b,t(n)]),g]),e("li",null,[e("a",k,[E,t(n)]),x])]),S,e("ul",null,[e("li",null,[e("a",C,[P,t(n)])]),e("li",null,[e("a",L,[N,t(n)])]),e("li",null,[e("a",T,[M,t(n)])]),e("li",null,[e("a",O,[A,t(n)])])])])}var q=o(c,[["render",I],["__file","custom_errors.html.vue"]]);export{q as default};