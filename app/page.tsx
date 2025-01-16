"use client";
import { redirect } from "next/navigation";

function HomePage() {
  redirect("/dashboard/verifiers");
}

export default HomePage;
