import Vue from 'vue'
import app from './app.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

//paginas
import inicio from "./pages/inicio.vue"
import blog from "./pages/blog.vue"
import portfolio from "./pages/portfolio.vue"
import servicos from "./pages/servicos.vue"
import contato from "./pages/contato.vue"
import post from "./pages/post.vue";

import './sass/styles.scss'

Vue.config.debug = process.env.NODE_ENV !== 'production'

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter()
const App = Vue.extend(app)

router.map({

	'/':{
		component: inicio
	},

	'/blog':{
		component: blog
	},

	'/portfolio':{ 
		component: portfolio
	},

	'/servicos':{
		component: servicos
	},

	'/contato':{
		component: contato
	},
	'/post/:id':{
		component: post
	},
	'*': {
	    component: {
	      template: "Página Não Encontrada!"
	    }
	},
	
})

router.start(App, 'body')
