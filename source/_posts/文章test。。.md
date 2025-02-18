---
# 基础设置
layout: post        # 布局：post, page, docs
title: 文章标题     # 页面标题
seo_title: SEO标题  # 网页标题
date: 2025-02-18   # 创建日期
updated: 2025-02-18 # 更新日期
permalink:         # 永久链接
cover: true        # 是否显示封面
thumbnail: https://cdn.jsdelivr.net/gh/inkss/inkss-cdn@main/img/article/25-01@自定义右键重构篇/右键菜单.svg     # 缩略图

# 文章信息
author: Yevandel      # 作者（需在 _data/author.yml 中配置）
categories: [测试而已, ]  # 分类
tags: [测试, 前端]       # 标签

# 布局控制
sidebar: [grid, category, tagcloud] # 侧边栏组件
top_meta: true     # 是否显示文章顶部 meta 信息
bottom_meta: true  # 是否显示文章底部 meta 信息
toc: true         # 是否显示目录
comments: true    # 是否显示评论区

# 文章属性
pin: true         # 是否置顶
headimg: https://cdn.jsdelivr.net/gh/inkss/inkss-cdn@main/img/article/25-01@自定义右键重构篇/右键菜单.svg     # 文章头图
icons: [fas fa-fire red, fas fa-star green]  # 文章图标

# 特殊功能
plugins:          # 页面插件
#  - mathjax      # 数学公式
#  - katex        # 数学公式另一种实现
#  - mermaid      # 流程图
#  - artitalk     # 说说
#  - bbtalk      
#  - fcircle      
  - indent       # 首行缩进

# 音乐播放器设置
music:
  server: netease    # netease, tencent, kugou, xiami, baidu
  type: song        # song, playlist, album, search, artist
  id: 16846091      # 音乐 ID

# 评论设置
waline:
  path: /          # 评论标识
  placeholder: 说点什么... # 评论框占位文字

# 版权设置
copyright:
  type: type1     # 版权类型
  author: Yevandel   # 作者
  ref:            # 原文信息
    title: 测试
    url: 

# 其他设置
readmore: true   # 是否显示阅读更多按钮
archive: false    # 是否在归档页显示
robots: noindex   # robots meta 标签
sitemap: false    # 是否出现在站点地图
keywords: xxx     # 关键词
description: xxx  # 描述
---