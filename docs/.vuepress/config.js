const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "yindudg",
  description: 'vdoing博客主题模板',
  base: '/yindudg/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,
}

// vssue 评论插件
  plugins: [
    [
      "vuepress-plugin-vssue-global",
      {
        platform: "github",
        title: "[Comment]<%- frontmatter.title %>",
        needComments: true,
        // 其他的 Vssue 配置
        autoCreateIssue: true,
        clientId: "553e88da9630ca66dfaa",
        clientSecret: "6e7ff7b7acb2a5542a749b65886dc8fbfc67e276",
        owner: "xhwkira",
        repo: "repo",
      },
    ],
  ]