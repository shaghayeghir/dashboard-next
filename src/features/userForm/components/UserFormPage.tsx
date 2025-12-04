"use client";

import { TOTAL_STEPS } from "../constants/path";
import { useCharacterMovement } from "../hooks/useCharacterMovement";
import { FormField } from "../types/formField";
import { FormFieldComponent } from "./fileds/FormFieldComponent";
import { ArrowMarker } from "./progress/ArrowMarker";
import { Character } from "./progress/Character";
import { ProgressIndicator } from "./progress/ProgressIndicator";
import { ProgressPath } from "./progress/ProgressPath";
import fa from "@/locales/fa.json";

export default function FormProgressCharacter() {
  const { cx, cy, setStep, step, svgRef, pathRef } = useCharacterMovement();

  // Form fields configuration
  const formFields: FormField[] = [
    { id: 1, type: "text", placeholder: fa.userForm.name, visible: step >= 0 },
    {
      id: 2,
      type: "email",
      placeholder: fa.userForm.email,
      visible: step >= 1,
    },
    { id: 3, type: "text", placeholder: fa.userForm.email, visible: step >= 2 },
    {
      id: 4,
      type: "textarea",
      placeholder: fa.userForm.comment,
      visible: step >= 3,
    },
  ];

  const handleStepChange = (newStep: number) => {
    setStep(Math.min(newStep, TOTAL_STEPS));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="w-full max-w-3xl flex flex-col items-center gap-12">
        {/* SVG Section */}
        <div className="relative w-full">
          <svg
            ref={svgRef}
            width="100%"
            height="80"
            viewBox="0 0 650 130"
            className="overflow-visible"
          >
            <ArrowMarker />
            <ProgressPath pathRef={pathRef} />
            <Character cx={cx} cy={cy} />
          </svg>
        </div>

        {/* Form Section */}
        <div className="w-full max-w-md">
          <ProgressIndicator currentStep={step} totalSteps={TOTAL_STEPS} />

          <div className="flex flex-col gap-4 p-6 rounded-xl shadow-lg bg-white">
            {formFields.map((field) => (
              <FormFieldComponent
                key={field.id}
                field={field}
                onStepChange={handleStepChange}
              />
            ))}

            {/* Step Info */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  {fa.userForm.step} {step} {fa.userForm.from} {TOTAL_STEPS}
                </span>
                <button
                  type="button"
                  onClick={() => setStep(Math.max(0, step - 1))}
                  className="text-sm text-blue-600 hover:text-blue-800 disabled:text-gray-400"
                  disabled={step === 0}
                >
                  {fa.userForm.previousStep}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
