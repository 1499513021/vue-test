import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    mode:"history",
    base: __dirname,
    routes:[
        {
            path:'/one',
            component: resolve => require(["../components/route/one"],resolve)
        },
        {
            path:'/two/:id',
            component: resolve => require(["../components/route/two"],resolve)
        },
        {
            path:'/computed',
            component: resolve => require(["../components/computed/computed"],resolve)
        },
        {
            path:'/watch',
            component: resolve => require(["../components/watch/watch"],resolve)
        },
        {
            path:'/slots',
            component: resolve => require(["../components/slot/slots"],resolve)
        },
        {
            path:'/state',
            component: resolve => require(["../components/vuexTest/state"],resolve)
        },
        {
            path:'/echart',
            component: resolve => require(['../components/echarts/echart'],resolve)
        },
        {
            path:'/promise',
            component: resolve => require(['../components/promise/promise'],resolve)
        }
    ]
})