"use client";
import { Card } from "@/components/ui/card";
import SignInForm from "@/components/login-form";
import { Suspense } from "react";

export default function SignupPage() {
  return (
    <Suspense>
      <div className=" flex flex-col items-center justify-center w-full">
        <Card className="w-full max-w-md p-8 bg-white">
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="space-y-1">
                <h1 className="text-2xl text-primary font-medium">
                  Welcome Back!
                </h1>
                <p className="text-xs font-normal text-secondary">
                  Sign in to your Xpress reward partner’s dashboard{" "}
                </p>
              </div>
              <hr className="border-[#F5F6F8] border-2" />
            </div>
            <SignInForm />
          </div>
        </Card>
      </div>
    </Suspense>
  );
}
