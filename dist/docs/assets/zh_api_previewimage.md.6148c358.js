import{_ as t,c as a,a as n,g as s}from"./app.e4147315.js";const e='{"title":"easi.previewImage","description":"","frontmatter":{},"headers":[{"level":2,"title":"参数","slug":"参数"}],"relativePath":"zh/api/previewimage.md","lastUpdated":1633686787370}',d={},p=[s('<h1 id="easi-previewimage" tabindex="-1">easi.previewImage <a class="header-anchor" href="#easi-previewimage" aria-hidden="true">#</a></h1><p>预览图片</p><p>sdk 成功返回值</p><div class="language-TypeScript"><pre><code><span class="token punctuation">{</span>\n    errMsg<span class="token operator">:</span><span class="token string">&quot;getLocalImageData:ok&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>示例</p><div class="language-TypeScript"><pre><code>easi<span class="token punctuation">.</span><span class="token function">previewImage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  current<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n  urls<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h2><table><thead><tr><th>参数</th><th>描述</th><th>类型</th><th>值</th><th>是否必须</th></tr></thead><tbody><tr><td>current</td><td>当前显示图片的 http 链接</td><td>string</td><td>-</td><td>是</td></tr><tr><td>urls</td><td>需要预览的图片 http 链接列表</td><td>string[]</td><td>-</td><td>是</td></tr><tr><td>success</td><td>成功回调</td><td>Function</td><td>-</td><td>否</td></tr><tr><td>fail</td><td>失败回调</td><td>Function</td><td>-</td><td>否</td></tr><tr><td>complete</td><td>完成回调</td><td>Function</td><td>-</td><td>否</td></tr></tbody></table>',8)];var r=t(d,[["render",function(t,s,e,d,r,o){return n(),a("div",null,p)}]]);export{e as __pageData,r as default};