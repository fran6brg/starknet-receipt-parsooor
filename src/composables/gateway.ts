import { ITransactionReceipt } from "~/interfaces";

/**
 * constants
 */

const root = "https://alpha4.starknet.io/feeder_gateway";

/**
 * state
 */

// refs
const isFetching = ref(false);

export const useGateway = () => {
	const getTxStatus = async (transactionHash: string): Promise<null | ITransactionReceipt> => {
		try {
			// set state
			isFetching.value = true;
			console.log("transactionHash", { transactionHash });

			// build endpoint
			const endpoint = `${root}/get_transaction_receipt?transactionHash=${transactionHash}`;

			// fetch endpoint
			const response: Response = await fetch(endpoint, { method: "GET" });

			// parse response
			const data: ITransactionReceipt = await response.json();
			console.log("status", { data });

			// ret
			return data;
		} catch (error) {
			return null;
		} finally {
			// set state
			isFetching.value = false;
		}
	};

	return {
		getTxStatus,
	};
};
