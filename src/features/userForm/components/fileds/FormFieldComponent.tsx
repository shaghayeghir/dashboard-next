import { FormFieldProps } from "../../types/formField";

export const FormFieldComponent = ({ field, onStepChange }: FormFieldProps) => {
  if (!field.visible) return null;

  const handleChange = () => {
    onStepChange(field.id);
  };

  const commonProps = {
    className:
      "border p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
    placeholder: field.placeholder,
    onChange: handleChange,
  };

  if (field.type === "textarea") {
    return <textarea {...commonProps} rows={3} />;
  }

  return <input type={field.type} {...commonProps} />;
};

