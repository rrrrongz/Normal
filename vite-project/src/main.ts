import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { Button, NavBar} from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)
app.use(Button);
app.use( NavBar);

app.mount('#app')
