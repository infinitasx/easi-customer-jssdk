import{_ as t,c as a,a as n,g as s}from"./app.381a6597.js";const e='{"title":"easi.getDeviceLocation","description":"","frontmatter":{},"headers":[{"level":2,"title":"参数","slug":"参数"}],"relativePath":"zh/api/devicelocation.md","lastUpdated":1633686787363}',p={},o=[s('<h1 id="easi-getdevicelocation" tabindex="-1">easi.getDeviceLocation <a class="header-anchor" href="#easi-getdevicelocation" aria-hidden="true">#</a></h1><p>获取设备地址</p><p>sdk 成功返回值</p><div class="language-TypeScript"><pre><code><span class="token punctuation">{</span>\n    errMsg<span class="token operator">:</span><span class="token string">&quot;getDeviceLocation:ok&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>示例</p><div class="language-TypeScript"><pre><code>easi<span class="token punctuation">.</span><span class="token function">getLocation</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  type<span class="token operator">:</span> <span class="token string">&#39;wgs84&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">success</span><span class="token punctuation">(</span><span class="token punctuation">{</span>latitude，longitude，speed，accuracy<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h2><table><thead><tr><th>参数</th><th>描述</th><th>类型</th><th>值</th><th>是否必须</th></tr></thead><tbody><tr><td>type</td><td>预留字段，默认为 wgs84 的 gps 坐标，其他坐标系待定</td><td>string</td><td>&#39;wgs84&#39;</td><td>是</td></tr><tr><td>success</td><td>成功回调</td><td>Function</td><td>-</td><td>否</td></tr><tr><td>fail</td><td>失败回调</td><td>Function</td><td>-</td><td>否</td></tr><tr><td>complete</td><td>完成回调</td><td>Function</td><td>-</td><td>否</td></tr></tbody></table>',8)];var c=t(p,[["render",function(t,s,e,p,c,d){return n(),a("div",null,o)}]]);export{e as __pageData,c as default};