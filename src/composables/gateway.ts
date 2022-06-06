import { ITransactionReceipt } from "~/interfaces";
import { useApp } from "~/composables";

/**
 * constants
 */

const root = "https://alpha4.starknet.io/feeder_gateway";
const receiptErrorResult: ITransactionReceipt = {
	status: "REJECTED",
	transaction_failure_reason: {
		code: "TRANSACTION_FAILED",
		error_message:
			"Error at pc=0:12:\nGot an exception while executing a hint.\nCairo traceback (most recent call last):\nUnknown location (pc=0:140)\nUnknown location (pc=0:126)\n\nError in the called contract (0x46d0b2e65361d623707bc44819a2c8c114c4253a0f7f92d8d5dc936985a38c4):\nError at pc=0:46:\nGot an exception while executing a hint.\nCairo traceback (most recent call last):\nUnknown location (pc=0:844)\nUnknown location (pc=0:795)\nUnknown location (pc=0:1725)\n\nError in the called contract (0x2a77bb771fdcb0966639bab6e2b5842e7d0e7dff2f8258e3aee8e38695d98f6):\nError at pc=0:161:\nGot an exception while executing a hint.\nCairo traceback (most recent call last):\nUnknown location (pc=0:1827)\nUnknown location (pc=0:1814)\nUnknown location (pc=0:1152)\n\nError in the called contract (0xe4156a00e1a1d84bd03636b284a179a8326a72586e233a9b4cfa79a234b29e):\nError at pc=0:216:\nAn ASSERT_EQ instruction failed: 10:2 != 10:1.",
	},
	transaction_hash: "0x51ee32b852d72a4d2da22e3c9e12cf22528ef1d913013b7f15cfbcad3a1de27",
	l2_to_l1_messages: [],
	events: [],
};
const receiptL1toL2Result: ITransactionReceipt = {
	status: "ACCEPTED_ON_L1",
	block_hash: "0x2d500ffedac1ccf0d852877e500c68af8727f721b28328fa3b152fb086226d5",
	block_number: 224414,
	transaction_index: 7,
	transaction_hash: "0x1569d668b378747f7768e2931105b3e1baca2b03d0f0f12a4c10dd94edca20c",
	l2_to_l1_messages: [
		{
			from_address: "0x2a77bb771fdcb0966639bab6e2b5842e7d0e7dff2f8258e3aee8e38695d98f6",
			to_address: "0x5a732e6865A96E11E9A64577d90d5af70d1BE147",
			payload: ["0x46d0b2e65361d623707bc44819a2c8c114c4253a0f7f92d8d5dc936985a38c4"],
		},
	],
	events: [
		{
			from_address: "0x46d0b2e65361d623707bc44819a2c8c114c4253a0f7f92d8d5dc936985a38c4",
			keys: ["0x5ad857f66a5b55f1301ff1ed7e098ac6d4433148f0b72ebc4a2945ab85ad53"],
			data: ["0x1569d668b378747f7768e2931105b3e1baca2b03d0f0f12a4c10dd94edca20c", "0x0"],
		},
	],
	execution_resources: {
		n_steps: 440,
		builtin_instance_counter: {
			pedersen_builtin: 0,
			range_check_builtin: 4,
			ecdsa_builtin: 1,
			output_builtin: 0,
			bitwise_builtin: 0,
			ec_op_builtin: 0,
		},
		n_memory_holes: 12,
	},
	actual_fee: "0x0",
};

/**
 * state
 */

// refs
const isFetching = ref(false);
const fetchedReceipts = ref<ITransactionReceipt[]>([receiptErrorResult, receiptL1toL2Result]);

export const useGateway = () => {
	// imports
	const { state } = useApp();

	/**
	 * methods
	 */

	const getTxStatus = async (transactionHash: string): Promise<null | ITransactionReceipt> => {
		try {
			// error check
			if (!transactionHash) return null;
			if (!transactionHash.startsWith("0x")) return null;
			const rIndex = fetchedReceipts.value.findIndex((r) => r.transaction_hash.toLowerCase() === transactionHash.toLowerCase());
			if (rIndex >= 0) return fetchedReceipts.value[rIndex];

			// set state
			isFetching.value = true;
			state.error = undefined;

			// build endpoint
			const endpoint = `${root}/get_transaction_receipt?transactionHash=${transactionHash}`;

			// fetch endpoint
			const response: Response = await fetch(endpoint, { method: "GET" });

			// parse response
			const data: ITransactionReceipt = await response.json();

			// ret
			return data;
		} catch (error) {
			console.warn("gateway/getTxStatus/error", { error });
			state.error = new Error(String(error));
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
