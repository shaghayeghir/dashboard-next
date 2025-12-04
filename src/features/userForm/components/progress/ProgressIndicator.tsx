// Progress Indicator Component
interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressIndicator = ({
  currentStep,
  totalSteps,
}: ProgressIndicatorProps) => {
  return (
    <div className="flex items-center justify-center gap-2 mb-4">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index <= currentStep - 1 ? "bg-blue-500 scale-110" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
};
