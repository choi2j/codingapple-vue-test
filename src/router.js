import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./components/Home.vue";
import List from "./components/List.vue";
import Detail from "./components/Detail.vue";

const routes = [
	{
		path: "/detail/:id(\\d+)",
		component: Detail,
	},
	{
		path: "/list",
		component: List,
	},
	{
		path: "/",
		component: Home,
	},
	{
		path: "/:anything(.*)",
		component: Home,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
