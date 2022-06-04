// https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript

interface ImportMetaEnv {
	readonly VITE_ENV: string;
	readonly VITE_DEBUG: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
