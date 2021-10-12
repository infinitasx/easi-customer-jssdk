import{_ as n,c as t,a,g as s}from"./app.39217d4f.js";const p='{"title":"easi.chooseImage","description":"","frontmatter":{},"headers":[{"level":2,"title":"参数","slug":"参数"}],"relativePath":"zh/api/chooseimage.md","lastUpdated":1633686787360}',o={},e=[s('<h1 id="easi-chooseimage" tabindex="-1">easi.chooseImage <a class="header-anchor" href="#easi-chooseimage" aria-hidden="true">#</a></h1><p>选取图片</p><p>sdk 成功返回值</p><div class="language-TypeScript"><pre><code><span class="token punctuation">{</span>\n    errMsg<span class="token operator">:</span><span class="token string">&quot;chooseImage:ok&quot;</span><span class="token punctuation">,</span>\n    localIds<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>示例</p><div class="language-TypeScript"><pre><code>easi<span class="token punctuation">.</span><span class="token function">chooseImage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  accept<span class="token operator">:</span> <span class="token string">&#39;image/*&#39;</span><span class="token punctuation">,</span>\n  compressImage<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  capture<span class="token operator">:</span> <span class="token string">&#39;environment&#39;</span><span class="token punctuation">,</span>\n  count<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  <span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">{</span> localIds<span class="token punctuation">,</span> errMsg <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>  <span class="token punctuation">{</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>localIds<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">fail</span><span class="token punctuation">(</span><span class="token punctuation">{</span> errMsg <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token comment">// chooseImage failed</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">{</span> errMsg <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// errMsg: &#39;chooseImage:canceled&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h2><table><thead><tr><th>参数</th><th>描述</th><th>类型</th><th>值</th><th>是否必须</th></tr></thead><tbody><tr><td>accept</td><td>文件类型</td><td>string</td><td>image/* / video/*</td><td>是</td></tr><tr><td>compressImage</td><td>是否压缩</td><td>boolean</td><td>true / false</td><td>是</td></tr><tr><td>capture</td><td>前置或后置摄像头</td><td>string</td><td>environment / user</td><td>是</td></tr><tr><td>count</td><td>数量</td><td>number</td><td>1 ~ 9</td><td>是</td></tr><tr><td>success</td><td>成功回调</td><td>Function</td><td>-</td><td>否</td></tr><tr><td>fail</td><td>失败回调</td><td>Function</td><td>-</td><td>否</td></tr><tr><td>complete</td><td>完成回调</td><td>Function</td><td>-</td><td>否</td></tr></tbody></table>',8)];var c=n(o,[["render",function(n,s,p,o,c,u){return a(),t("div",null,e)}]]);export{p as __pageData,c as default};
