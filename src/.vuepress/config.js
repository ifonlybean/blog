module.exports = {
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
                title: '',
                path: '/pages/vue-cli/',
                collapsable: false,
                children: [
                    ''
                ]
            }],
            '/pages/index/': [{
                title: '',
                path: '/pages/index/',
                collapsable: false,
                children: [
                    ''
                ]
            }]
        }
    }
}
