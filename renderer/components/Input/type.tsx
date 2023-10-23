export interface InputType {
  className?: string;
  name?: string;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  checked?: boolean;
}
