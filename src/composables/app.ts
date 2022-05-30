/**
 * local types
 */

interface IAppState {
	env: string;
	loading: boolean;
	initialized: boolean;
	error?: Error;
}

/**
 * state
 */

// refs
const state = reactive<IAppState>({
	env: String(import.meta.env.VITE_ENV),
	loading: false,
	initialized: false,
});

export const useApp = () => {
	const initApp = async (): Promise<void> => {
		try {
			state.loading = true;
			state.initialized = true;
		} catch (error) {
			console.error("initApp", { error });
			state.error = new Error(JSON.stringify(error));
		} finally {
			state.loading = false;
		}
	};

	return {
		state,
		initApp,
	};
};
