export interface L2ToL1Messages {
	from_address: string;
	to_address: string;
	payload: string[];
}

export interface Event {
	from_address: string;
	keys: string[];
	data: string[];
}

export interface BuiltinInstanceCounter {
	pedersen_builtin: number;
	range_check_builtin: number;
	ecdsa_builtin: number;
	output_builtin: number;
	bitwise_builtin: number;
	ec_op_builtin: number;
}

export interface ExecutionResources {
	n_steps: number;
	builtin_instance_counter: BuiltinInstanceCounter;
	n_memory_holes: number;
}

export interface ITransactionReceipt {
	status: string;
	block_hash: string;
	block_number: number;
	transaction_index: number;
	transaction_hash: string;
	l2_to_l1_messages: L2ToL1Messages[];
	events: Event[];
	execution_resources: ExecutionResources;
	actual_fee: string;
}
