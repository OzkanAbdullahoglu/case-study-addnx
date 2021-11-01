import { InputProps } from '../types';

export default function Input({
  placeholder = '',
  type = 'text',
  onChange,
  value,
  autoFocus = false,
}: InputProps) {
  return (
    <input
      autoFocus={autoFocus}
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
}
