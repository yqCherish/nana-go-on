import Vue from "vue";
import Router from "vue-router";
import politics from "../view/politics.vue";
import home from "../view/home.vue";
import english from "../view/english.vue";
import politicsVideoList from "../view/politicsVideoList.vue";
import professional from "../view/professional.vue";
import gameList from "../view/gameList.vue";

Vue.use(Router);

const router = new Router({
    routes:[
        {
            path:'/',
            name: 'home',
            component: home
        },
        {
            path:'/politics',
            name: 'politics',
            component: politics
        },
        {
            path:'/english',
            name: 'english',
            component: english
        },
        {
            path:'/politicsVideoList',
            name: 'politicsVideoList',
            component: politicsVideoList
        },
        {
            path:'/professional',
            name: 'professional',
            component: professional
        },
        {
            path:'/gameList',
            name: 'gameList',
            component: gameList
        }
    ]
})

export default router;
