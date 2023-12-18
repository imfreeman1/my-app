export interface InputType extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  name?: string;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  checked?: boolean;
}
