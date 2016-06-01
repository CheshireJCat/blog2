'use strict';

var fs = require('fs');
var path = require('path');
var date = new Date(),
	year = date.getFullYear(),
	month = date.getMonth() + 1,
	day = date.getDate(),
	time = date.getTime(),
	name = path.join(__dirname,'_posts',[year,month,day,time].join('-')+'.markdown'),
	content =
`---
layout: blog
title:  BolgTitle
category: BolgCategory
excerpt: BolgExcerpt
tags: git jekyll 配置 blog 搭建
---
---  

转载请注明出处   

lmaomaoz <{{ site.url }}/blog{{page.url}}>
`;
if(fs.exists(name,function(res){
	if(!res){
		fs.writeFile(name, content, 'utf-8',function (err) {
		    if (err) throw err;
		    console.log("Export Account Success!");
		});
	}else{
		console.log(name+' has exist!')
	}
}));