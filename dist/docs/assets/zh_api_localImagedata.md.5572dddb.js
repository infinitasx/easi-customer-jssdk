import{_ as a,c as t,a as n,g as s}from"./app.14889706.js";const p='{"title":"easi.getLocalImageData","description":"","frontmatter":{},"headers":[{"level":2,"title":"参数","slug":"参数"}],"relativePath":"zh/api/localImagedata.md","lastUpdated":1633683651124}',e={},o=[s('<h1 id="easi-getlocalimagedata" tabindex="-1">easi.getLocalImageData <a class="header-anchor" href="#easi-getlocalimagedata" aria-hidden="true">#</a></h1><p>获取本地图片 Base64 数据</p><p>sdk 成功返回值</p><div class="language-TypeScript"><pre><code><span class="token punctuation">{</span>\n    errMsg<span class="token operator">:</span><span class="token string">&quot;getLocalImageData:ok&quot;</span><span class="token punctuation">,</span>\n    localData<span class="token operator">:</span> <span class="token string">&quot;&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>示例</p><div class="language-TypeScript"><pre><code>easi<span class="token punctuation">.</span><span class="token function">getLocalImgData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  localId<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">{</span> localData <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>localData<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h2><table><thead><tr><th>参数</th><th>描述</th><th>类型</th><th>值</th><th>是否必须</th></tr></thead><tbody><tr><td>localId</td><td>图片的 localId</td><td>string</td><td>-</td><td>是</td></tr><tr><td>success</td><td>成功回调</td><td>Function</td><td>-</td><td>否</td></tr><tr><td>fail</td><td>失败回调</td><td>Function</td><td>-</td><td>否</td></tr><tr><td>complete</td><td>完成回调</td><td>Function</td><td>-</td><td>否</td></tr></tbody></table>',8)];var c=a(e,[["render",function(a,s,p,e,c,d){return n(),t("div",null,o)}]]);export{p as __pageData,c as default};
