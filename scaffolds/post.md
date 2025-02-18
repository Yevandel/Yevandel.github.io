---
# 基础设置
layout: post       # 布局：post, page, docs
title:             # 页面标题
seo_title:         # 网页标题
date:              # 创建日期
updated:           # 更新日期
permalink:         # 永久链接
cover: true        # 是否显示封面
thumbnail:         # 缩略图

# 文章信息
author: Yevandel      # 作者（需在 _data/author.yml 中配置）
categories: []        # 分类
tags: []              # 标签

# 布局控制
# sidebar: [grid, category, tagcloud]        # 侧边栏组件 
# top_meta: true     # 是否显示文章顶部 meta 信息
# bottom_meta: true  # 是否显示文章底部 meta 信息
# toc: true          # 是否显示目录
comments: true     # 是否显示评论区

# 文章属性
pin: false        # 是否置顶
headimg:          # 文章头图
icons:            # 文章图标 [fas fa-fire red, fas fa-star green] 

# 特殊功能
plugins:          # 页面插件
#  - mathjax      # 数学公式
#  - katex        # 数学公式另一种实现
#  - mermaid      # 流程图
#  - artitalk     # 说说
#  - bbtalk      
#  - fcircle      
  - indent         # 首行缩进

# 音乐播放器设置
music:
  server: netease     # netease, tencent, kugou, xiami, baidu
  type: song          # song, playlist, album, search, artist
  id:                 # 音乐 ID

# 评论设置
waline:
  path: /                 # 评论标识
  placeholder: 说点什么... # 评论框占位文字

# 版权设置
# copyright:
#  type: type1        # 版权类型
#  author: Yevandel   # 作者
#  ref:               # 原文信息
#  title: 
#  url: 

# 其他设置
# readmore: true    # 是否显示阅读更多按钮
# archive: true     # 是否在归档页显示
# robots: noindex          # robots meta 标签 可选 
# sitemap: false     # 是否出现在站点地图
# keywords:          # 关键词
description:       # 描述
---