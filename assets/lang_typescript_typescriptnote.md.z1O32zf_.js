import{_ as s,o as a,c as t,Q as e}from"./chunks/framework.gI2xCOxE.js";const b=JSON.parse('{"title":"TypeScript","description":"","frontmatter":{},"headers":[],"relativePath":"lang/typescript/typescriptnote.md","filePath":"lang/typescript/typescriptnote.md"}'),p={name:"lang/typescript/typescriptnote.md"},n=e(`<h1 id="typescript" tabindex="-1">TypeScript <a class="header-anchor" href="#typescript" aria-label="Permalink to &quot;TypeScript&quot;">​</a></h1><p>TypeScript 简称(<code>TS</code>) 是微软退出的开源语言</p><p>TypeScript 是 JavaScript 的超集，而且可以编译成纯 JavaScript 代码</p><p>TypeScript = Type + JavaScript (在JavaScript 的基础上添加类型支持)</p><p>TypeScript 文件拓展名为ts</p><p>TypeScript 可编译成标准的JavaScript,并且在编译时进行类型检查</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//TypeScript 代码:</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> age1</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//TypeScript 代码:</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> age1</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">25</span><span style="color:#24292E;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">//JavaScript 代码:</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> age2 </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">25</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">//JavaScript 代码:</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> age2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">25</span><span style="color:#24292E;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-g</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">typescript</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">typescript</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="运行" tabindex="-1">运行 <a class="header-anchor" href="#运行" aria-label="Permalink to &quot;运行&quot;">​</a></h2><p>查看版本</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">tsc</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">tsc</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>编译</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">tsc</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.ts</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">tsc</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.ts</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="typescript-常用数据类型" tabindex="-1">TypeScript 常用数据类型 <a class="header-anchor" href="#typescript-常用数据类型" aria-label="Permalink to &quot;TypeScript 常用数据类型&quot;">​</a></h2><table><thead><tr><th>类型</th><th>例</th><th>备注</th></tr></thead><tbody><tr><td>number</td><td>let age: number = 25;</td><td>数字类型</td></tr><tr><td>string</td><td>let name: string = &#39;John&#39;;</td><td>字符串类型</td></tr><tr><td>boolean</td><td>let isMarried: boolean = true;</td><td>布尔类型</td></tr><tr><td>array</td><td>let names: string[] = [&#39;John&#39;, &#39;Jane&#39;];</td><td>数组类型</td></tr><tr><td>any</td><td>let value: any = 25;</td><td>任意类型</td></tr><tr><td>type与interface</td><td>type Person = { };interface Person { };</td><td>自定义类型/复杂类型</td></tr><tr><td>函数类型</td><td>function sayHello(): void { };</td><td>函数类型</td></tr><tr><td>字面量类型</td><td>&quot;a&quot;|&quot;b&quot;|&quot;c&quot;</td><td>限制变量或者参数的取值</td></tr><tr><td>class类</td><td>class Person { };</td><td>类类型</td></tr></tbody></table>`,17),l=[n];function o(r,c,i,d,y,h){return a(),t("div",null,l)}const E=s(p,[["render",o]]);export{b as __pageData,E as default};
