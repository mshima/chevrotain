import{_ as o,r as p,o as l,c,a as n,b as a,e as s,d as t}from"./app.ca20ebd6.js";const i={},r=n("h1",{id:"custom-token-patterns",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#custom-token-patterns","aria-hidden":"true"},"#"),s(" Custom Token Patterns")],-1),u=n("h3",{id:"tldr",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tldr","aria-hidden":"true"},"#"),s(" TLDR")],-1),d=s("See: "),k={href:"https://github.com/chevrotain/chevrotain/blob/master/examples/lexer/custom_patterns/custom_patterns.js",target:"_blank",rel:"noopener noreferrer"},m=n("strong",null,"Runnable example",-1),h=s(" for quick starting."),v=t(`<h2 id="background" tabindex="-1"><a class="header-anchor" href="#background" aria-hidden="true">#</a> Background</h2><p>Normally a Token&#39;s pattern is defined using a JavaScript regular expression:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> IntegerToken <span class="token operator">=</span> <span class="token function">createToken</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;IntegerToken&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">pattern</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d+</span><span class="token regex-delimiter">/</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>However in some circumstances the capability to provide a custom pattern matching implementation may be required. There are a few use cases in which a custom pattern could be used:</p>`,4),g=n("li",null,[n("p",null,"We want to collect additional properties on the token objects."),n("ul",null,[n("li",null,[s("See "),n("a",{href:"#custom-payloads"},"Custom Payloads"),s(" section.")])])],-1),b=n("p",null,"The token cannot be easily (or at all) be defined using pure regular expressions.",-1),_=s("When context on previously lexed tokens is needed. For example: "),f={href:"https://github.com/chevrotain/chevrotain/blob/master/examples/lexer/python_indentation/python_indentation.js",target:"_blank",rel:"noopener noreferrer"},x=s("Lexing Python like indentation using Chevrotain"),y=s("."),w=n("li",null,[n("p",null,"Workaround possible performance issues/bugs in regExp engines.")],-1),q=n("h2",{id:"usage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),s(" Usage")],-1),T=s("A custom pattern has a similar API to the API of the "),j={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec",target:"_blank",rel:"noopener noreferrer"},I=s("RegExp.prototype.exec"),R=s(" function. But with a small constraint."),S=s("A custom pattern should behave as though the RegExp "),E={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky",target:"_blank",rel:"noopener noreferrer"},O=s("sticky flag"),C=s(" has been set. This means that attempted matches must begin at the offset argument, "),L=n("strong",null,"not",-1),A=s(" at the start of the input."),P=s("The basic syntax for supplying a custom pattern is defined by the "),N={href:"https://chevrotain.io/documentation/10_1_2/interfaces/ICustomPattern.html",target:"_blank",rel:"noopener noreferrer"},W=s("ICustomPattern"),M=s(" interface. Example:"),J=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">matchInteger</span><span class="token punctuation">(</span><span class="token parameter">text<span class="token punctuation">,</span> startOffset</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> endOffset <span class="token operator">=</span> startOffset
  <span class="token keyword">let</span> charCode <span class="token operator">=</span> text<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>endOffset<span class="token punctuation">)</span>
  <span class="token comment">// 0-9 digits</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>charCode <span class="token operator">&gt;=</span> <span class="token number">48</span> <span class="token operator">&amp;&amp;</span> charCode <span class="token operator">&lt;=</span> <span class="token number">57</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    endOffset<span class="token operator">++</span>
    charCode <span class="token operator">=</span> text<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>endOffset<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// No match, must return null to conform with the RegExp.prototype.exec signature</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>endOffset <span class="token operator">===</span> startOffset<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> matchedString <span class="token operator">=</span> text<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>startOffset<span class="token punctuation">,</span> endOffset<span class="token punctuation">)</span>
    <span class="token comment">// according to the RegExp.prototype.exec API the first item in the returned array must be the whole matched string.</span>
    <span class="token keyword">return</span> <span class="token punctuation">[</span>matchedString<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">createToken</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;IntegerToken&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">pattern</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">exec</span><span class="token operator">:</span> matchInteger <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// Optional property that will enable optimizations in the lexer</span>
  <span class="token comment">// See: https://chevrotain.io/documentation/10_1_2/interfaces/itokenconfig.html#start_chars_hint</span>
  <span class="token literal-property property">start_chars_hint</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;4&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;5&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;6&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;7&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;8&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;9&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Using an Object literal with only a single property is still a little verbose so an even more concise syntax is also supported:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// pattern is passed the matcher function directly.</span>
<span class="token function">createToken</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;IntegerToken&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">pattern</span><span class="token operator">:</span> matchInteger <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lexing-context" tabindex="-1"><a class="header-anchor" href="#lexing-context" aria-hidden="true">#</a> Lexing Context</h2><p>A custom token matcher has two optional arguments which allows accessing the current lexing context. This context can be used to allow or disallow lexing certain Token Types depending on the previously lexed tokens.</p><p>Lets expand the previous example to only allow lexing integers if the previous token was not an identifier (contrived example).</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> tokenMatcher <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;chevrotain&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">matchInteger</span><span class="token punctuation">(</span><span class="token parameter">text<span class="token punctuation">,</span> offset<span class="token punctuation">,</span> matchedTokens<span class="token punctuation">,</span> groups</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> lastMatchedToken <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">last</span><span class="token punctuation">(</span>matchedTokens<span class="token punctuation">)</span>

  <span class="token comment">// An Integer may not follow an Identifier</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">tokenMatcher</span><span class="token punctuation">(</span>lastMatchedToken<span class="token punctuation">,</span> Identifier<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// No match, must return null to conform with the RegExp.prototype.exec signature</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// rest of the code from the example above...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),z=s("A larger and non contrived example can seen here: "),B={href:"https://github.com/chevrotain/chevrotain/blob/master/examples/lexer/python_indentation/python_indentation.js",target:"_blank",rel:"noopener noreferrer"},U=s("Lexing Python like indentation using Chevrotain"),G=s("."),V=s("It is important to note that The matchedTokens and groups arguments match the token and groups properties of the tokenize output ("),D={href:"https://chevrotain.io/documentation/10_1_2/interfaces/ilexingresult.html",target:"_blank",rel:"noopener noreferrer"},F=s("ILexingResult"),Q=s("). These arguments are the current state of the lexing result so even if the lexer has performed error recovery any tokens found in those arguments are still guaranteed to be in the final result."),H=t(`<h2 id="custom-payloads" tabindex="-1"><a class="header-anchor" href="#custom-payloads" aria-hidden="true">#</a> Custom Payloads</h2><p>Sometimes we want to collect additional properties on an IToken object, for example:</p><ul><li>Save RegExp capturing groups on the token object.</li><li>Subsets of the matched text, e.g: strip away the quotes from string literals.</li><li>Computed values from the matched text, e.g: Integer values of Date parts (day/month/year).</li></ul><p>This can be done by attaching a <strong>payload</strong> property to our custom token matcher returned value, for example:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// We define the regExp only **once** (outside) to avoid performance issues.</span>
<span class="token keyword">const</span> stringLiteralPattern <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&quot;(?:[^\\\\&quot;]|\\\\(?:[bfnrtv&quot;\\\\/]|u[0-9a-fA-F]{4}))*&quot;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">y</span></span>
<span class="token keyword">function</span> <span class="token function">matchStringLiteral</span><span class="token punctuation">(</span><span class="token parameter">text<span class="token punctuation">,</span> startOffset</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// using &#39;y&#39; sticky flag (Note it is not supported on IE11...)</span>
  <span class="token comment">// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky</span>
  stringLiteralPattern<span class="token punctuation">.</span>lastIndex <span class="token operator">=</span> startOffset

  <span class="token comment">// Note that just because we are using a custom token pattern</span>
  <span class="token comment">// Does not mean we cannot implement it using JavaScript Regular Expressions...</span>
  <span class="token keyword">const</span> execResult <span class="token operator">=</span> stringLiteralPattern<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>execResult <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> fullMatch <span class="token operator">=</span> execResult<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token comment">// compute the payload</span>
    <span class="token keyword">const</span> matchWithOutQuotes <span class="token operator">=</span> fullMatch<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> fullMatch<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token comment">// attach the payload</span>
    execResult<span class="token punctuation">.</span>payload <span class="token operator">=</span> matchWithOutQuotes
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> execResult
<span class="token punctuation">}</span>

<span class="token keyword">const</span> StringLiteral <span class="token operator">=</span> <span class="token function">createToken</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;StringLiteral&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">pattern</span><span class="token operator">:</span> matchStringLiteral<span class="token punctuation">,</span>
  <span class="token comment">// custom patterns should explicitly specify the line_breaks option.</span>
  <span class="token literal-property property">line_breaks</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// When we lex a StringLiteral text a &quot;payload&quot; property will now exist on the resulting token object.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note:</p>`,6),K=n("li",null,[s("A custom pattern may be implemented using Regular Expressions, these concepts are "),n("strong",null,"not mutually exclusive"),s(".")],-1),X=s("The payload property may be "),Y=n("strong",null,"anything",-1),Z=s(" e.g: "),$=n("li",null,"A single value (as in the example above).",-1),nn=n("li",null,"A JavaScript object with multiple properties.",-1),sn=n("li",null,"Capturing groups from a regExp exec method's results.",-1),en=s(`The "groups" property of an regExp exec method's result (If `),an={href:"https://github.com/tc39/proposal-regexp-named-groups",target:"_blank",rel:"noopener noreferrer"},tn=s("Named Capturing Groups are used"),on=s(")."),pn=s("Additional examples can be found here: "),ln={href:"https://github.com/chevrotain/chevrotain/blob/master/examples/lexer/custom_patterns/custom_patterns_payloads.js",target:"_blank",rel:"noopener noreferrer"},cn=n("strong",null,"Runnable example for custom payloads",-1),rn=s(".");function un(dn,kn){const e=p("ExternalLinkIcon");return l(),c("div",null,[r,u,n("p",null,[d,n("a",k,[m,a(e)]),h]),v,n("ul",null,[g,n("li",null,[b,n("ul",null,[n("li",null,[_,n("a",f,[x,a(e)]),y])])]),w]),q,n("p",null,[T,n("a",j,[I,a(e)]),R]),n("ul",null,[n("li",null,[S,n("a",E,[O,a(e)]),C,L,A])]),n("p",null,[P,n("a",N,[W,a(e)]),M]),J,n("p",null,[z,n("a",B,[U,a(e)]),G]),n("p",null,[V,n("a",D,[F,a(e)]),Q]),H,n("ul",null,[K,n("li",null,[X,Y,Z,n("ul",null,[$,nn,sn,n("li",null,[en,n("a",an,[tn,a(e)]),on])])])]),n("p",null,[pn,n("a",ln,[cn,a(e)]),rn])])}var hn=o(i,[["render",un],["__file","custom_token_patterns.html.vue"]]);export{hn as default};
