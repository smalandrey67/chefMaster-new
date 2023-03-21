import type { InstructionProps } from "./Instruction.interface";

export function Instruction({ data }: InstructionProps): JSX.Element {
	return <div>{data[0]}</div>;
}
