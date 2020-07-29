const { fs, path } = require('@vuepress/shared-utils')

module.exports = ctx => ({
    base: '/fe-knowledge/',
    title: 'Ifonlybean的博客',    
    description: '前端面试知识整理',
    port: '8889',
    head: [
        ['link', {
            rel: 'icon',
            href: '/vue-logo.png'
        }]
    ],
    themeConfig: {
        repo: 'https://github.com/ifonlybean/fe-knowledge',
        repoLabel: 'GitHub',
        nav: [{
            text: 'vue-cli',
            link: '/pages/vue-cli/'
        }, {
            text: '测试',
            link: '/pages/index/'
        }],
        sidebar: {
            '/pages/vue-cli/': [{
                title: '配置',
                collapsable: false,
                children: [
                    ''
                ]
            }],
            '/pages/index/': [{
                title: '配置',
                collapsable: false,
                children: [
                    ''
                ]
            }]
        }
    }
})
