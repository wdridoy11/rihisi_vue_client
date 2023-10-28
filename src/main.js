import { createApp } from 'vue';
import App from './App.vue';
import "./App.css"
import "./Custom.css"
import router from './router';
import './css/style.css'


const app = createApp(App)

app.use(router)
app.mount('#app')
