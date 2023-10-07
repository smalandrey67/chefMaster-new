import type { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface InputUploadProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	currentImage: string;
	error?: string | null;
}
