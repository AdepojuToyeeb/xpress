"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useMultiStepForm } from "../../hooks/use-multi-step-form";
import { StepOne } from "@/components/registration-form/step-one";
import { StepTwo } from "@/components/registration-form/step-two";
import { PendingModal } from "@/components/pending-modal";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const {
    step,
    formData,
    errors,
    updateFormData,
    nextStep,
    prevStep,
    submitForm,
    isLoading,
    showPendingModal,
    setShowPendingModal,
  } = useMultiStepForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      nextStep();
    } else {
      await submitForm();
    }
  };

  const handlePendingModalClose = () => {
    setShowPendingModal(false);
    router.push("/signin");
    router.refresh();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-lg p-8 bg-white">
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="space-y-1">
              <h1 className="text-2xl text-primary font-medium">
                Welcome to Xpress Rewards
              </h1>
              <p className="text-xs font-normal text-secondary">
                Complete the form below to get started{" "}
              </p>
            </div>
            <hr className="border-[#F5F6F8] border-2" />
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 ? (
              <StepOne
                formData={formData}
                errors={errors}
                updateFormData={updateFormData}
              />
            ) : (
              <StepTwo
                formData={formData}
                errors={errors}
                updateFormData={updateFormData}
              />
            )}

            <div className="flex gap-4 items-center pt-4">
              <div className="space-x-2">
                {step === 2 && (
                  <Button
                    disabled={isLoading}
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                  >
                    Back
                  </Button>
                )}
                <Button size={"lg"} type="submit" disabled={isLoading}>
                  {step === 1 ? "Next" : isLoading ? "Submitting..." : "Submit"}
                </Button>
              </div>
              <div className="text-sm text-[#808080]">Step {step} of 2</div>
            </div>
          </form>
        </div>
      </Card>
      <PendingModal
        isOpen={showPendingModal}
        onClose={handlePendingModalClose}
      />
    </div>
  );
}
