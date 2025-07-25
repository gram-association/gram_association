"use client";
import type React from "react";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

export default function Story() {
  const [story, setStory] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!story.trim()) {
      setMessage("Please write your story before submitting");
      setIsDialogOpen(true);
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    const formDataToSend = new FormData();
    formDataToSend.append("formType", "Story");
    formDataToSend.append("sheetName", "StoryForm");
    formDataToSend.append("Story", story);

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
        setMessage("Story submitted successfully!");
        setStory("");
      } else {
        setMessage("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting story:", error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
      setIsDialogOpen(true);
    }
  };

  return (
    <div className="w-full max-w-full h-[450px] bg-[#BAD1CA] dark:bg-gray-700 flex items-center justify-center">
      <div className="p-4 mx-auto text-center mt-0 sm:mt-40 w-full">
        <h1 className="text-4xl md:text-5xl mb-8 text-gray-800 dark:text-white">
          Share your Water Story
        </h1>

        <form
          onSubmit={handleSubmit}
          className="relative w-full max-w-[600px] mx-auto"
        >
          <div className="relative">
            <textarea
              value={story}
              onChange={(e) => setStory(e.target.value)}
              placeholder="Start writing from here..."
              className="w-full p-4 pr-16 bg-white dark:bg-gray-600 dark:text-white border border-gray-300 dark:border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5A8B6E] h-20 resize-none placeholder-gray-500 dark:placeholder-gray-400 scrollbar-hide"
              rows={3}
            />
            <button
              type="submit"
              disabled={isSubmitting || !story.trim()}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-[#5A8B6E] text-white text-xl rounded-md hover:bg-[#4A7A5E] focus:outline-none focus:ring-2 focus:ring-[#5A8B6E] focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "..." : "➤"}
            </button>
          </div>
        </form>

        <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                {message.includes("success") ? "Success" : "Error"}
              </AlertDialogTitle>
              <AlertDialogDescription
                className={`text-sm sm:text-base ${
                  message.includes("success")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {message}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction
                className="bg-[#5A8B6E] hover:bg-[#4A7A5E] focus:ring-[#5A8B6E]"
                onClick={() => setIsDialogOpen(false)}
              >
                Close
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
