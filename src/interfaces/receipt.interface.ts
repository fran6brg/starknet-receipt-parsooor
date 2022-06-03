export interface IReceiptL2ToL1Messages {
	from_address: string;
	to_address: string;
	payload: string[];
}

export interface IReceiptEvent {
	from_address: string;
	keys: string[];
	data: string[];
}

export interface IReceiptBuiltinInstanceCounter {
	pedersen_builtin: number;
	range_check_builtin: number;
	ecdsa_builtin: number;
	output_builtin: number;
	bitwise_builtin: number;
	ec_op_builtin: number;
}

export interface IReceiptExecutionResources {
	n_steps: number;
	builtin_instance_counter: IReceiptBuiltinInstanceCounter;
	n_memory_holes: number;
}

export interface ITransactionReceipt {
	status: string;
	block_hash: string;
	block_number: number;
	transaction_index: number;
	transaction_hash: string;
	l2_to_l1_messages: IReceiptL2ToL1Messages[];
	events: IReceiptEvent[];
	execution_resources: IReceiptExecutionResources;
	actual_fee: string;
}
