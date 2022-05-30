// declare interface Window {
// extend the window
// }

declare module "vue-spinner/src/PulseLoader.vue";
declare module "vue-spinner/src/BounceLoader.vue";

// with vite-plugin-md, markdowns can be treat as Vue components
declare module "*.md" {
	import { ComponentOptions } from "vue";
	const component: ComponentOptions;
	export default component;
}
