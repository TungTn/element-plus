import{_ as c,a as E}from"./icon.a94451fe.js";import{q as r,f as C,B as e,u as p,H as o,g as a,z as t,l,e as u}from"./framework.6504b2a8.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./arrow-right.7dab5b1e.js";import"./plugin-vue_export-helper.f1ab819e.js";const i=a("h1",{id:"breadcrumb",tabindex:"-1"},[t("Breadcrumb "),a("a",{class:"header-anchor",href:"#breadcrumb","aria-hidden":"true"},"#")],-1),d=a("p",null,"Displays the location of the current page, making it easier to browser back.",-1),F=a("h2",{id:"basic-usage",tabindex:"-1"},[t("Basic usage "),a("a",{class:"header-anchor",href:"#basic-usage","aria-hidden":"true"},"#")],-1),m=a("p",null,"breadcrumb/basic",-1),b=a("h2",{id:"icon-separator",tabindex:"-1"},[t("Icon separator "),a("a",{class:"header-anchor",href:"#icon-separator","aria-hidden":"true"},"#")],-1),D=a("p",null,"breadcrumb/icon",-1),k=l('<h2 id="breadcrumb-attributes" tabindex="-1">Breadcrumb Attributes <a class="header-anchor" href="#breadcrumb-attributes" aria-hidden="true">#</a></h2><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>separator</td><td>separator character</td><td>string</td><td>\u2014</td><td>/</td></tr><tr><td>separator-class</td><td>icon component of icon separator</td><td>string / Component</td><td>\u2014</td><td>-</td></tr></tbody></table><h2 id="breadcrumb-slots" tabindex="-1">Breadcrumb Slots <a class="header-anchor" href="#breadcrumb-slots" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Description</th><th>Subtags</th></tr></thead><tbody><tr><td>-</td><td>customize default content</td><td>Breadcrumb Item</td></tr></tbody></table><h2 id="breadcrumb-item-attributes" tabindex="-1">Breadcrumb Item Attributes <a class="header-anchor" href="#breadcrumb-item-attributes" aria-hidden="true">#</a></h2><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>to</td><td>target route of the link, same as <code>to</code> of <code>vue-router</code></td><td>string/object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>replace</td><td>if <code>true</code>, the navigation will not leave a history record</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table><h2 id="breadcrumb-item-slots" tabindex="-1">Breadcrumb Item Slots <a class="header-anchor" href="#breadcrumb-item-slots" aria-hidden="true">#</a></h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>\u2014</td><td>customize default content</td></tr></tbody></table>',8),w='{"title":"Breadcrumb","description":"","frontmatter":{"title":"Breadcrumb","lang":"en-US"},"headers":[{"level":2,"title":"Basic usage","slug":"basic-usage"},{"level":2,"title":"Icon separator","slug":"icon-separator"},{"level":2,"title":"Breadcrumb Attributes","slug":"breadcrumb-attributes"},{"level":2,"title":"Breadcrumb Slots","slug":"breadcrumb-slots"},{"level":2,"title":"Breadcrumb Item Attributes","slug":"breadcrumb-item-attributes"},{"level":2,"title":"Breadcrumb Item Slots","slug":"breadcrumb-item-slots"}],"relativePath":"en-US/component/breadcrumb.md","lastUpdated":1640923594952}',h={},S=Object.assign(h,{setup(g){const s={"../../examples/breadcrumb/basic.vue":c,"../../examples/breadcrumb/icon.vue":E};return(A,B)=>{const n=r("Demo");return u(),C("div",null,[i,d,F,e(n,{demos:o(s),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-breadcrumb%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eseparator%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%2F%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-breadcrumb-item%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Ato%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7B%20path%3A%20%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E%2F%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E%20%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3Ehomepage%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-breadcrumb-item%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-breadcrumb-item%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ea%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ehref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%2F%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3Epromotion%20management%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ea%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-breadcrumb-item%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-breadcrumb-item%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3Epromotion%20list%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-breadcrumb-item%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-breadcrumb-item%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3Epromotion%20detail%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-breadcrumb-item%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-breadcrumb%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"breadcrumb/basic","raw-source":"%3Ctemplate%3E%0A%20%20%3Cel-breadcrumb%20separator%3D%22%2F%22%3E%0A%20%20%20%20%3Cel-breadcrumb-item%20%3Ato%3D%22%7B%20path%3A%20'%2F'%20%7D%22%3Ehomepage%3C%2Fel-breadcrumb-item%3E%0A%20%20%20%20%3Cel-breadcrumb-item%0A%20%20%20%20%20%20%3E%3Ca%20href%3D%22%2F%22%3Epromotion%20management%3C%2Fa%3E%3C%2Fel-breadcrumb-item%0A%20%20%20%20%3E%0A%20%20%20%20%3Cel-breadcrumb-item%3Epromotion%20list%3C%2Fel-breadcrumb-item%3E%0A%20%20%20%20%3Cel-breadcrumb-item%3Epromotion%20detail%3C%2Fel-breadcrumb-item%3E%0A%20%20%3C%2Fel-breadcrumb%3E%0A%3C%2Ftemplate%3E%0A",description:"%3Cp%3EIn%20%3Ccode%3Eel-breadcrumb%3C%2Fcode%3E%2C%20each%20%3Ccode%3Eel-breadcrumb-item%3C%2Fcode%3E%20is%20a%20tag%20that%20stands%20for%20every%20level%20starting%20from%20homepage.%20This%20component%20has%20a%20%3Ccode%3EString%3C%2Fcode%3E%20attribute%20%3Ccode%3Eseparator%3C%2Fcode%3E%2C%20and%20it%20determines%20the%20separator.%20Its%20default%20value%20is%20'%2F'.%3C%2Fp%3E%0A"},{default:p(()=>[m]),_:1},8,["demos"]),b,e(n,{demos:o(s),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-breadcrumb%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aseparator-icon%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EArrowRight%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-breadcrumb-item%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Ato%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7B%20path%3A%20%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E%2F%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E%20%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3Ehomepage%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-breadcrumb-item%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-breadcrumb-item%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3Epromotion%20management%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-breadcrumb-item%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-breadcrumb-item%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3Epromotion%20list%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-breadcrumb-item%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-breadcrumb-item%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3Epromotion%20detail%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-breadcrumb-item%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-breadcrumb%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20ArrowRight%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40element-plus%2Ficons-vue'%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"breadcrumb/icon","raw-source":"%3Ctemplate%3E%0A%20%20%3Cel-breadcrumb%20%3Aseparator-icon%3D%22ArrowRight%22%3E%0A%20%20%20%20%3Cel-breadcrumb-item%20%3Ato%3D%22%7B%20path%3A%20'%2F'%20%7D%22%3Ehomepage%3C%2Fel-breadcrumb-item%3E%0A%20%20%20%20%3Cel-breadcrumb-item%3Epromotion%20management%3C%2Fel-breadcrumb-item%3E%0A%20%20%20%20%3Cel-breadcrumb-item%3Epromotion%20list%3C%2Fel-breadcrumb-item%3E%0A%20%20%20%20%3Cel-breadcrumb-item%3Epromotion%20detail%3C%2Fel-breadcrumb-item%3E%0A%20%20%3C%2Fel-breadcrumb%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ArrowRight%20%7D%20from%20'%40element-plus%2Ficons-vue'%0A%3C%2Fscript%3E%0A",description:"%3Cp%3ESet%20%3Ccode%3Eseparator-class%3C%2Fcode%3E%20to%20use%20%3Ccode%3Eiconfont%3C%2Fcode%3E%20as%20the%20separator%EF%BC%8Cit%20will%20cover%20%3Ccode%3Eseparator%3C%2Fcode%3E%3C%2Fp%3E%0A"},{default:p(()=>[D]),_:1},8,["demos"]),k])}}});export{w as __pageData,S as default};