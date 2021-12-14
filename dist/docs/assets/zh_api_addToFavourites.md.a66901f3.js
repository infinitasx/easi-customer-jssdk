import{_ as t,c as a,a as n,g as s}from"./app.039d7064.js";const d='{"title":"easi.addToFavourites","description":"","frontmatter":{},"headers":[{"level":2,"title":"参数","slug":"参数"}],"relativePath":"zh/api/addToFavourites.md","lastUpdated":1639466376326}',e={},p=[s('<h1 id="easi-addtofavourites" tabindex="-1">easi.addToFavourites <a class="header-anchor" href="#easi-addtofavourites" aria-hidden="true">#</a></h1><p>店铺添加到收藏夹</p><p>sdk 成功返回值</p><div class="language-TypeScript"><pre><code><span class="token punctuation">{</span>\n    errMsg<span class="token operator">:</span><span class="token string">&quot;addToFavourites:ok&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>示例</p><div class="language-TypeScript"><pre><code>easi<span class="token punctuation">.</span><span class="token function">addToFavourites</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  shopId<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n  <span class="token function">success</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>  <span class="token punctuation">{</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h2><table><thead><tr><th>参数</th><th>描述</th><th>类型</th><th>值</th><th>是否必须</th></tr></thead><tbody><tr><td>shopId</td><td>商家 ID</td><td>number</td><td>-</td><td>是</td></tr><tr><td>success</td><td>成功回调</td><td>Function</td><td>-</td><td>否</td></tr><tr><td>fail</td><td>失败回调</td><td>Function</td><td>-</td><td>否</td></tr><tr><td>complete</td><td>完成回调</td><td>Function</td><td>-</td><td>否</td></tr></tbody></table>',8)];var o=t(e,[["render",function(t,s,d,e,o,c){return n(),a("div",null,p)}]]);export{d as __pageData,o as default};
