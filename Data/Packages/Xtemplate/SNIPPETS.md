# Snippets List

## Html-HTML5

|trigger   |description    |export                                                                                                    |
|----------|---------------|----------------------------------------------------------------------------------------------------------|
|article   |`<article/>`   |```<article></article>```                                                                                 |
|aside     |`<aside/>`     |```<aside></aside>```                                                                                     |
|audio     |`<audio/>`     |```<audio src="$1" autobuffer autoloop loop controls></audio>```                                          |
|canvas    |`<canvas/>`    |```<canvas>$2</canvas>```                                                                                 |
|command   |`<command/>`   |```<command >```                                                                                          |
|datalis   |`<datalis/>`   |```<datalis></datalis>```                                                                                 |
|datalist  |`<datalist/>`  |```<datalist></datalist>```                                                                               |
|embed     |`<embed/>`     |```<embed src="$1" type="$2">$3</embed>```                                                                |
|figcaption|`<figcaption/>`|```<figcaption></figcaption>```                                                                           |
|figure    |`<figure/>`    |```<figure></figure>```                                                                                   |
|footer    |`<footer/>`    |```<footer></footer>```                                                                                   |
|header    |`<header/>`    |```<header></header>```                                                                                   |
|hgroup    |`<hgroup/>`    |```<hgroup></hgroup>```                                                                                   |
|keygen    |`<keygen/>`    |```<keygen>```                                                                                            |
|mark      |`<mark/>`      |```<mark></mark>```                                                                                       |
|meter     |`<meter/>`     |```<meter></meter>```                                                                                     |
|nav       |`<nav/>`       |```<nav></nav>```                                                                                         |
|output    |`<output/>`    |```<output></output>```                                                                                   |
|progress  |`<progress/>`  |```<progress></progress>```                                                                               |
|section   |`<section/>`   |```<section></section>```                                                                                 |
|source    |`<source/>`    |```<source$1>```                                                                                          |
|summary   |`<summary/>`   |```<summary></summary>```                                                                                 |
|time      |`<time/>`      |```<time></time>```                                                                                       |
|video     |`<video/>`     |```<video src="$1"${2: autobuffer autoloop loop controls${7: poster="${8:/images/video.png}"}}></video>```|

## Html-block

|trigger|description      |export                                    |
|-------|-----------------|------------------------------------------|
|dc     |`<div class/>`   |```<div class="name"></div>```            |
|dd     |`<dd/>`          |```<dd></dd>```                           |
|di     |`<div id/>`      |```<div id="J_name"></div>```             |
|dic    |`<div id class/>`|```<div id="J_name" class="name"></div>```|
|div    |`<div/>`         |```<div></div>```                         |
|dl     |`<dl/>`          |```<dl><dt></dt><dd></dd></dl>```         |
|dt     |`<dt/>`          |```<dt></dt>```                           |
|li     |`<li/>`          |```<li></li>```                           |
|lic    |`<li class/>`    |```<li class=""></li>```                  |
|lid    |`<li id/>`       |```<li id=""></li>```                     |
|ol     |`<ol/>`          |```<ol></ol>```                           |
|p      |`<p/>`           |```<p></p>```                             |
|pc     |`<p class/>`     |```<p class="name"></p>```                |
|pre    |`<pre/>`         |```<pre></pre>```                         |
|ul     |`<ul/>`          |```<ul></ul>```                           |

## Html-inline

|trigger|description|export                                                                                    |
|-------|-----------|------------------------------------------------------------------------------------------|
|a      |`<a/>`     |```<a href=""></a>```                                                                     |
|em     |`<em/>`    |```<em></em>```                                                                           |
|i      |`<i/>`     |```<i></i>```                                                                             |
|img    |`<img/>`   |```<img src="http://img.f2e.taobao.net/img.png?x=300x300" width="300" height="300" $3/>```|
|span   |`<span/>`  |```<span></span>```                                                                       |
|strong |`<strong/>`|```<strong></strong>```                                                                   |

## Html-title

|trigger|description|export         |
|-------|-----------|---------------|
|h1     |`<h1/>`    |```<h1></h1>```|
|h2     |`<h2/>`    |```<h2></h2>```|
|h3     |`<h3/>`    |```<h3></h3>```|
|h4     |`<h4/>`    |```<h4></h4>```|
|h5     |`<h5/>`    |```<h5></h5>```|
|h6     |`<h6/>`    |```<h6></h6>```|

## Kissy

|trigger|description|export                                                                          |
|-------|-----------|--------------------------------------------------------------------------------|
|k      |`kissy cdn`|```<script src="//g.alicdn.com/kissy/k/${1:1.4.7}/seed${2:-min}.js"></script>```|
|kad    |`kissy.add`|```KISSY.add(function(S, require){});```                                        |

## Spm

|trigger  |description     |export                                     |
|---------|----------------|-------------------------------------------|
|spm-click|`data-spm-click`|```data-spm-click="gostr=/key;locaid=d1"```|

## Xtemplate

|trigger|description           |export                                                                |
|-------|----------------------|----------------------------------------------------------------------|
|x-     |`{{% %}}`             |```{{%  %}}```                                                        |
|x--    |`{{% %}}`             |```{{%%}}```                                                          |
|xb     |`block ...`           |```{{{block ('body')}}}```                                            |
|xbc    |`block ... block`     |```{{#block ('body')}}//code{{/block}}```                             |
|xcm    |`{{!-- comments --!}}`|```{{!-- comments --!}}```                                            |
|xe     |`extend ...`          |```{{extend ('layout')}}```                                           |
|xeach  |`each...`             |```{{#each([1,2,4])}}${2:\{\{this\}\}}{{/each}}```                    |
|xi     |`include...`          |```{{include ('header')}}```                                          |
|xid    |`index`               |```{{xindex}}```                                                      |
|xif    |`if...`               |```{{#if(true)}}//code{{/if}}```                                      |
|xife   |`if...else...`        |```{{#if(x===1)}}//code{{else}}//code{{/if}}```                       |
|xiff   |`if...elseif...`      |```{{#if(x===1)}}//code{{elseif(x===2)}}//code{{else}}//code{{/if}}```|
|xifw   |`if...with...`        |```{{#if(obj)}}{{#with(obj)}}//code{{/with}}{{/if}}```                |
|xlif   |`elseif...`           |```{{elseif(x===1)}}//code```                                         |
|xm     |`macro`               |```{{#macro('name',param)}}{{param}}{{/macro}}```                     |
|xmc    |`macro call`          |```{{#macro('name','variable')}}```                                   |
|xrange |`range...`            |```range(0,3)```                                                      |
|xroot  |`root`                |```{{root.name}}```                                                   |
|xs     |`set`                 |```{{set(x=1)}}```                                                    |
|xthis  |`this`                |```{{this}}```                                                        |
|xtms   |`{{{tms}}}`           |```{{{tms ('${1:header.html}')}}}```                                  |
|xvm    |`vmcommon...`         |```{{vmcommon ('${1:header.html}')}}```                               |
|xw     |`with ...`            |```{{#with(obj)}}//code{{/with}}```                                   |
|xx     |`{{-}}`               |```{{}}```                                                            |
|xxx    |`{{{_}}}`             |```{{{}}}```                                                          |

