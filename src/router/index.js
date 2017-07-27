import Vue from 'vue'
import Router from 'vue-router'
//大页面模块
import CaseReport from '@/views/Case-report'
import PollutionTypes from '@/views/Pollution-types'
import SelectLocation from '@/views/Select-location'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'CaseReport',
            component: CaseReport
        },
        {
            path: '/SelectLocation',
            name: 'SelectLocation',
            component: SelectLocation
        },
        {
            path: '/PollutionTypes',
            name: 'PollutionTypes',
            component: PollutionTypes
        }
    ]
})
