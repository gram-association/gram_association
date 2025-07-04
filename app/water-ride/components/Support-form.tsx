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

export default function Support() {
  const [formData, setFormData] = useState({
    joinAs: "Ride",
    firstName: "",
    lastName: "",
    email: "",
    query: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, joinAs: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
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
        className="w-full dark:bg-[#304f53] bg-[#538C7B] hover:bg-[#4a7a6e] dark:hover:bg-[#406d74] text-white py-3 rounded-md transition-colors text-sm sm:text-base"
      >
        SUBMIT
      </Button>
    </form>
  );
}
