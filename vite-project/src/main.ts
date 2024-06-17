import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Button, NavBar,Icon,Tabbar, TabbarItem, Search, Divider, Tag, TreeSelect, Col, Row } from 'vant';
import 'vant/lib/index.css';
import * as VueRouter from 'vue-router'

import routes from './config/route.ts'


const app = createApp(App)
//定义路由

//使用哈希模式
const router = VueRouter.createRouter({
    history:VueRouter.createWebHashHistory(),
    routes,
})

app.use(router)

app.use(Button);
app.use(NavBar);
app.use(Icon);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Search);
app.use(Divider);
app.use(Tag);
app.use(TreeSelect);
app.use(Col);
app.use(Row);


app.mount('#app')

