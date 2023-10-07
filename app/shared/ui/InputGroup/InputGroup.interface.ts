import type { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface InputGroupProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	labelName: string;
	error?: string | null;
	className?: string;
}
