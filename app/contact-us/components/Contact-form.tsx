"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    joinAs: searchParams.get("type") === "donate" ? "Donate" : "Individual",
    firstName: "",
    lastName: "",
    email: "",
    query: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    if (searchParams.get("type") === "donate") {
      setFormData((prev) => ({ ...prev, joinAs: "Donate" }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, joinAs: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formDataToSend = new FormData();
    formDataToSend.append("formType", "Gram");
    formDataToSend.append("JoinAs", formData.joinAs);
    formDataToSend.append("FirstName", formData.firstName);
    formDataToSend.append("LastName", formData.lastName);
    formDataToSend.append("Email", formData.email);
    formDataToSend.append("Query", formData.query);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyoB78xBATVdIbVm9boqu0e7gQTxfvGgEzsVwdkFZtAeRoshCR5XRrDvRNQb2Oy1QHYNw/exec",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      console.log("Response status:", response.status);
      console.log("Response headers:", Object.fromEntries(response.headers));
      const text = await response.text();
      console.log("Raw response:", text);

      let data;
      try {
        data = JSON.parse(text);
      } catch (jsonError) {
        throw new Error(`Failed to parse response: ${text}`);
      }

      if (data.result === "success") {
        setSubmitStatus("Form submitted successfully!");
        setFormData({
          joinAs:
            searchParams.get("type") === "donate" ? "Donate" : "Individual",
          firstName: "",
          lastName: "",
          email: "",
          query: "",
        });
      } else {
        throw new Error(data.error || "Submission failed");
      }
    } catch (error: unknown) {
      let errorMessage: string;

      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === "string") {
        errorMessage = error;
      } else {
        try {
          errorMessage = JSON.stringify(error);
        } catch {
          errorMessage = "An unknown error occurred.";
        }
      }

      console.error("Error submitting form:", error);
      setSubmitStatus(`Submission failed: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
      setIsDialogOpen(true);
    }
  };

  return (
    <div className="space-y-6 w-full max-w-lg">
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <label className="block text-gray-700 dark:text-gray-200 font-medium text-sm sm:text-base">
            Join us as
          </label>
          <Select value={formData.joinAs} onValueChange={handleSelectChange}>
            <SelectTrigger className="w-full border-gray-300 text-sm sm:text-base">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Individual">Individual</SelectItem>
              <SelectItem value="Donate">Donor / Funder</SelectItem>
              <SelectItem value="Corporate CSR Representative">
                Corporate CSR Representative
              </SelectItem>
              <SelectItem value="Development Partner / NGO">
                Development Partner / NGO
              </SelectItem>
              <SelectItem value="Volunteer / Intern">
                Volunteer / Intern
              </SelectItem>
              <SelectItem value="Advisor / Mentor">Advisor / Mentor</SelectItem>
              <SelectItem value="Job Seeker">Job Seeker</SelectItem>
              <SelectItem value="Community Member / Beneficiary">
                Community Member / Beneficiary
              </SelectItem>
              <SelectItem value="Supporter / Well-wisher">
                Supporter / Well-wisher
              </SelectItem>
              <SelectItem value="Other (please specify)">
                Other (please specify)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label
              htmlFor="firstName"
              className="block text-gray-700 dark:text-gray-200 font-medium text-sm sm:text-base"
            >
              First name
            </label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="Enter First name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border-gray-300 text-sm sm:text-base"
              required
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="lastName"
              className="block text-gray-700 dark:text-gray-200 font-medium text-sm sm:text-base"
            >
              Last name
            </label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Enter Last name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border-gray-300 text-sm sm:text-base"
              required
            />
          </div>
        </div>

        <div className="space-y-2 mt-2">
          <label
            htmlFor="email"
            className="block text-gray-700 dark:text-gray-200 font-medium text-sm sm:text-base"
          >
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="sample@mail.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-gray-300 text-sm sm:text-base"
            required
          />
        </div>

        <div className="space-y-2 mt-2">
          <label
            htmlFor="query"
            className="block text-gray-700 dark:text-gray-200 font-medium text-sm sm:text-base"
          >
            Your Query
          </label>
          <Textarea
            id="query"
            name="query"
            placeholder="Start writing from here..."
            value={formData.query}
            onChange={handleChange}
            className="w-full min-h-[120px] border-gray-300 text-sm sm:text-base"
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-[#538C7B] hover:bg-[#4a7a6e] text-white py-3 mt-4 rounded-md transition-colors text-sm sm:text-base"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "SUBMIT"}
        </Button>
      </form>

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {submitStatus?.includes("success") ? "Success" : "Error"}
            </AlertDialogTitle>
            <AlertDialogDescription
              className={`text-sm sm:text-base ${
                submitStatus?.includes("success")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {submitStatus}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              className="bg-[#538C7B] hover:bg-[#4a7a6e] focus:ring-[#538C7B]"
              onClick={() => setIsDialogOpen(false)}
            >
              Close
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
