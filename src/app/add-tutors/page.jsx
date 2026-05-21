"use client";

import { createTutor } from "@/lib/actions";
import {
  Button,
  FieldError,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";

const Page = () => {
  
  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0B0F19] text-neutral-900 dark:text-white flex items-center justify-center px-4 py-12 transition-colors duration-500 relative overflow-hidden">
      
      {/* Background Subtle Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <form
        action={createTutor}
        className="w-full max-w-5xl rounded-[2.5rem] bg-white dark:bg-white/[0.02] p-8 md:p-14 shadow-[0_25px_80px_rgba(0,0,0,0.03)] dark:shadow-[0_25px_80px_rgba(0,0,0,0.4)] border border-neutral-200/60 dark:border-white/[0.06] backdrop-blur-xl space-y-10 z-10 relative transition-all duration-500"
      >

        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-neutral-900 dark:text-white transition-colors duration-500">
            Add Tutor
          </h1>

          <p className="text-neutral-500 dark:text-neutral-400 text-base md:text-lg font-medium transition-colors duration-500">
            Create a premium tutor profile
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Tutor Name */}
          <div className="md:col-span-2">
            <TextField>
              <Label className="block mb-2.5 text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 transition-colors duration-500">
                Tutor Name
              </Label>
              <Input
                required
                name="tutorName"
                placeholder="John Doe"
                className="rounded-2xl w-full p-2 border border-neutral-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.01] text-neutral-900 dark:text-white shadow-sm focus-within:border-cyan-500 dark:focus-within:border-cyan-500 focus-within:ring-4 focus-within:ring-cyan-100 dark:focus-within:ring-cyan-950/50 transition-all duration-300"
              />
              <FieldError />
            </TextField>
          </div>

          {/* Photo */}
          <TextField>
            <Label className="block mb-2.5 text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 transition-colors duration-500">
              Photo URL
            </Label>
            <Input
              required
              name="photo"
              type="url"
              placeholder="https://i.ibb.co/xyz.jpg"
              className="rounded-2xl p-2 w-full border border-neutral-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.01] text-neutral-900 dark:text-white shadow-sm focus-within:border-cyan-500 dark:focus-within:border-cyan-500 focus-within:ring-4 focus-within:ring-cyan-100 dark:focus-within:ring-cyan-950/50 transition-all duration-300"
            />
            <FieldError />
          </TextField>

          {/* Subject */}
          <div>
            <Label className="block mb-2.5 text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 transition-colors duration-500">
              Subject / Category
            </Label>
            <select
              name="subject"
              required
              className="w-full p-3.5 rounded-2xl border border-neutral-200 dark:border-white/[0.08] bg-white dark:bg-[#121624] text-neutral-900 dark:text-neutral-200 shadow-sm outline-none focus:border-cyan-500 dark:focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 dark:focus:ring-cyan-950/50 transition-all duration-300 text-sm font-medium cursor-pointer"
            >
              <option value="" className="dark:bg-[#121624]">Select Subject</option>
              <option value="Mathematics" className="dark:bg-[#121624]">Mathematics</option>
              <option value="Physics" className="dark:bg-[#121624]">Physics</option>
              <option value="Chemistry" className="dark:bg-[#121624]">Chemistry</option>
              <option value="Biology" className="dark:bg-[#121624]">Biology</option>
              <option value="English" className="dark:bg-[#121624]">English</option>
            </select>
          </div>

          {/* Availability */}
          <TextField>
            <Label className="block mb-2.5 text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 transition-colors duration-500">
              Available Days & Time Slot
            </Label>
            <Input
             required
              name="availability"
              placeholder="Sun - Thu 5:00 PM - 8:00 PM"
              className="rounded-2xl p-2 w-full border border-neutral-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.01] text-neutral-900 dark:text-white shadow-sm focus-within:border-cyan-500 dark:focus-within:border-cyan-500 focus-within:ring-4 focus-within:ring-cyan-100 dark:focus-within:ring-cyan-950/50 transition-all duration-300"
            />
            <FieldError />
          </TextField>

          {/* Hourly Fee */}
          <TextField>
            <Label className="block mb-2.5 text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 transition-colors duration-500">
              Hourly Fee (USD)
            </Label>
            <Input
            required
              name="hourlyFee"
              type="number"
              placeholder="20"
              className="rounded-2xl w-full p-2 border border-neutral-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.01] text-neutral-900 dark:text-white shadow-sm focus-within:border-cyan-500 dark:focus-within:border-cyan-500 focus-within:ring-4 focus-within:ring-cyan-100 dark:focus-within:ring-cyan-950/50 transition-all duration-300"
            />
            <FieldError />
          </TextField>

          {/* Total Slot */}
          <TextField>
            <Label className="block mb-2.5 text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 transition-colors duration-500">
              Total Slot
            </Label>
            <Input
            required
              name="totalSlot"
              type="number"
              placeholder="10"
              className="rounded-2xl p-2 w-full border border-neutral-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.01] text-neutral-900 dark:text-white shadow-sm focus-within:border-cyan-500 dark:focus-within:border-cyan-500 focus-within:ring-4 focus-within:ring-cyan-100 dark:focus-within:ring-cyan-950/50 transition-all duration-300"
            />
            <FieldError />
          </TextField>

          {/* Session Start Date */}
          <div className="md:col-span-2">
            <TextField>
              <Label className="block mb-2.5 text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 transition-colors duration-500">
                Session Start Date
              </Label>
              <Input
              required
                name="startDate"
                type="date"
                className="rounded-2xl p-2 w-full border border-neutral-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.01] text-neutral-900 dark:text-white shadow-sm focus-within:border-cyan-500 dark:focus-within:border-cyan-500 focus-within:ring-4 focus-within:ring-cyan-100 dark:focus-within:ring-cyan-950/50 transition-all duration-300 color-scheme-dark-fix"
              />
              <FieldError />
            </TextField>
          </div>

          {/* Institution & Experience */}
          <div className="md:col-span-2">
            <TextField>
              <Label className="block mb-2.5 text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 transition-colors duration-500">
                Institution & Experience
              </Label>
              <TextArea
                name="institution"
                required
                rows={3}
                placeholder="BUET, 3 years teaching experience..."
                className="rounded-3xl w-full p-4 border border-neutral-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.01] text-neutral-900 dark:text-white shadow-sm focus-within:border-cyan-500 dark:focus-within:border-cyan-500 focus-within:ring-4 focus-within:ring-cyan-100 dark:focus-within:ring-cyan-950/50 transition-all duration-300"
              />
              <FieldError />
            </TextField>
          </div>

          {/* Location */}
          <TextField>
            <Label className="block mb-2.5 text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 transition-colors duration-500">
              Location (Area/City)
            </Label>
            <Input
            required
              name="location"
              placeholder="Dhaka, Bangladesh"
              className="rounded-2xl p-2 w-full border border-neutral-200 dark:border-white/[0.08] bg-white dark:bg-white/[0.01] text-neutral-900 dark:text-white shadow-sm focus-within:border-cyan-500 dark:focus-within:border-cyan-500 focus-within:ring-4 focus-within:ring-cyan-100 dark:focus-within:ring-cyan-950/50 transition-all duration-300"
            />
            <FieldError />
          </TextField>

          {/* Teaching Mode */}
          <div>
            <Label className="block mb-2.5 text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 transition-colors duration-500">
              Teaching Mode
            </Label>
            <select
              name="mode"
              required
              className="w-full p-3.5 rounded-2xl border border-neutral-200 dark:border-white/[0.08] bg-white dark:bg-[#121624] text-neutral-900 dark:text-neutral-200 shadow-sm outline-none focus:border-cyan-500 dark:focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100 dark:focus:ring-cyan-950/50 transition-all duration-300 text-sm font-medium cursor-pointer"
            >
              <option value="" className="dark:bg-[#121624]">Select Mode</option>
              <option value="Online" className="dark:bg-[#121624]">Online</option>
              <option value="Offline" className="dark:bg-[#121624]">Offline</option>
              <option value="Both" className="dark:bg-[#121624]">Both</option>
            </select>
          </div>

        </div>

        {/* SUBMIT */}
        <Button
          type="submit"
          className="w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 py-6 cursor-pointer text-base font-bold tracking-wide text-white shadow-lg shadow-cyan-500/10 dark:shadow-none transition-all duration-300 hover:scale-[1.005] hover:bg-cyan-600 dark:hover:bg-cyan-500 active:scale-95 flex items-center justify-center"
        >
          Add Tutor Profile
        </Button>

      </form>
    </div>
  );
};

export default Page;