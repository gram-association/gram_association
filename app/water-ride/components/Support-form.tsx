"use client";

import { useState } from "react";
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
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function Support() {
  const [formData, setFormData] = useState({
    joinAs: "Ride",
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    countryCode: "+91",
    query: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    mobileNo: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      joinAs: value,
    }));
  };

  const validate = () => {
    const errors = { email: "", mobileNo: "" };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{7,15}$/;

    if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!mobileRegex.test(formData.mobileNo)) {
      errors.mobileNo = "Please enter a valid mobile number (7–15 digits).";
    }

    setFormErrors(errors);
    return !errors.email && !errors.mobileNo;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    const formDataToSend = new FormData();
    formDataToSend.append("formType", "Support");
    formDataToSend.append("JoinAs", formData.joinAs);
    formDataToSend.append("FirstName", formData.firstName);
    formDataToSend.append("LastName", formData.lastName);
    formDataToSend.append("Email", formData.email);
    formDataToSend.append(
      "MobileNo",
      `${formData.countryCode}${formData.mobileNo.replace(/\s+/g, "")}`
    );
    formDataToSend.append("Query", formData.query);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzmwEH-8xq-vkqUUyWGu-oeZCzlCa3UYsFa7eCW-GL7-Taon8_6jtHAaum7OXnWS4tYCA/exec",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      const data = await response.json();

      if (data.result === "success") {
        setDialogMessage("Form submitted successfully!");
        setIsSuccess(true);
        setFormData({
          joinAs: "Ride",
          firstName: "",
          lastName: "",
          email: "",
          mobileNo: "",
          countryCode: "+91",
          query: "",
        });
        setFormErrors({ email: "", mobileNo: "" });
      } else {
        setDialogMessage("Submission failed. Please try again.");
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setDialogMessage("An error occurred. Please try again.");
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
      setDialogOpen(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-lg">
      <div className="space-y-4">
        <label className="block text-gray-700 dark:text-gray-200 font-medium text-sm sm:text-base">
          Be the part of Ride
        </label>
        <Select value={formData.joinAs} onValueChange={handleSelectChange}>
          <SelectTrigger className="w-full border-gray-300 text-sm sm:text-base">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Ride">Ride</SelectItem>
            <SelectItem value="Drive">Drive</SelectItem>
            <SelectItem value="Delivery">Delivery</SelectItem>
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
            placeholder="Enter first name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border-gray-300 text-sm sm:text-base"
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
            placeholder="Enter last name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border-gray-300 text-sm sm:text-base"
          />
        </div>
      </div>

      <div className="space-y-2">
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
        />
        {formErrors.email && (
          <p className="text-red-600 text-xs">{formErrors.email}</p>
        )}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="mobileNo"
          className="block text-gray-700 dark:text-gray-200 font-medium text-sm sm:text-base"
        >
          Mobile No.
        </label>
        <div className="flex items-center space-x-2">
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-1 text-sm sm:text-base bg-white dark:bg-gray-800 dark:text-white"
          >
            <option value="+91">+91</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+61">+61</option>
            <option value="+81">+81</option>
          </select>
          <Input
            id="mobileNo"
            name="mobileNo"
            type="tel"
            placeholder="0987654321"
            value={formData.mobileNo}
            onChange={handleChange}
            className="w-full border-gray-300 text-sm sm:text-base"
          />
        </div>
        {formErrors.mobileNo && (
          <p className="text-red-600 text-xs">{formErrors.mobileNo}</p>
        )}
      </div>

      <div className="space-y-2">
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
          className="w-full min-h-[80px] border-gray-300 text-sm sm:text-base"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full dark:bg-[#304f53] bg-[#538C7B] hover:bg-[#4a7a6e] dark:hover:bg-[#406d74] text-white py-3 rounded-md transition-colors text-sm sm:text-base"
      >
        {isSubmitting ? "Submitting..." : "SUBMIT"}
      </Button>

      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {isSuccess ? "Success!" : "Error"}
            </AlertDialogTitle>
            <AlertDialogDescription
              className={isSuccess ? "text-green-600" : "text-red-600"}
            >
              {dialogMessage}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={() => setDialogOpen(false)}
              className="bg-[#538C7B]"
            >
              Close
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </form>
  );
}
