// FormField Component
export interface FormFieldProps {
  field: FormField;
  onStepChange: (step: number) => void;
}

export interface FormField {
  id: number;
  type: "text" | "email" | "textarea";
  placeholder: string;
  visible: boolean;
}
