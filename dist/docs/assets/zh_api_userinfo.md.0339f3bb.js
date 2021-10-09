import{_ as n,c as t,a as s,g as a}from"./app.90db3295.js";const p='{"title":"easi.getUserInfo","description":"","frontmatter":{},"headers":[{"level":2,"title":"参数","slug":"参数"}],"relativePath":"zh/api/userinfo.md","lastUpdated":1633686787374}',o={},e=[a('<h1 id="easi-getuserinfo" tabindex="-1">easi.getUserInfo <a class="header-anchor" href="#easi-getuserinfo" aria-hidden="true">#</a></h1><p>获取用户信息</p><p>隐私信息接口，需要先获得用户授权。如果未登录则进入登录流程，不再显式调用之前的 login 方法</p><p>sdk 成功返回值</p><div class="language-TypeScript"><pre><code><span class="token punctuation">{</span>\n    errMsg<span class="token operator">:</span><span class="token string">&quot;getUserInfo:ok&quot;</span><span class="token punctuation">,</span>\n    token<span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>\n    id<span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>\n    uid<span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>\n    email<span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>\n    nickName<span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>\n    headIcon<span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>\n    sex<span class="token operator">:</span><span class="token string">&quot;&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>示例</p><div class="language-TypeScript"><pre><code>easi<span class="token punctuation">.</span><span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">success</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h2><table><thead><tr><th>参数</th><th>描述</th><th>类型</th><th>值</th><th>是否必须</th></tr></thead><tbody><tr><td>success</td><td>成功回调</td><td>Function</td><td>-</td><td>否</td></tr><tr><td>fail</td><td>失败回调</td><td>Function</td><td>-</td><td>否</td></tr><tr><td>complete</td><td>完成回调</td><td>Function</td><td>-</td><td>否</td></tr></tbody></table>',9)];var c=n(o,[["render",function(n,a,p,o,c,u){return s(),t("div",null,e)}]]);export{p as __pageData,c as default};
