import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Button, NavBar,Icon,Tabbar, TabbarItem} from 'vant';
import 'vant/lib/index.css';
import * as VueRouter from 'vue-router'
import Index from "./pages/Index.vue";
import Team from "./pages/Team.vue";

const app = createApp(App)
//定义路由
const routes = [
    {path:'/', component:Index},
    {path:'/index', component: Team}

]
//使用哈希模式
const router = VueRouter.createRouter({
    history:VueRouter.createWebHashHistory(),
    routes,
})

app.use(router)

app.use(Button);
app.use(NavBar);
app.use(Icon);
app.use(Tabbar)
app.use(TabbarItem)

app.mount('#app')

