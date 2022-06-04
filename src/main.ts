// register vue composition api globally
import { ViteSSG } from "vite-ssg";
import generatedRoutes from "virtual:generated-pages";
import { setupLayouts } from "virtual:generated-layouts";
import App from "./App.vue";

// windicss layers
import "virtual:windi-base.css";
import "virtual:windi-components.css";
// your custom styles here
import "./styles/main.css";
// windicss utilities should be the last style import
import "virtual:windi-utilities.css";
// windicss devtools support (dev only)
import "virtual:windi-devtools";

const routes = setupLayouts(generatedRoutes);

/**
 * vue-tippy
 */

import VueTippy from "vue-tippy";
import "tippy.js/dist/tippy.css";

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(App, { routes }, (ctx) => {
	// install all modules under `modules/`
	Object.values(import.meta.globEager("./modules/*.ts")).map((i) => i.install?.(ctx));

	/**
	 * vue-tippy
	 */
	// https://kabbouchi.github.io/vue-tippy/4.0/getting-started.html
	const { app } = ctx;
	app.use(VueTippy, {
		defaultProps: { delay: [400, null] },
		directive: "tippy", // => v-tippy
	});
});
