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
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0B0F19] flex items-center justify-center px-4 py-12 transition-colors duration-500 relative overflow-hidden">
      

      <form
        action={createTutor}
        className="w-full max-w-5xl rounded-[2.5rem] bg-white dark:bg-white/[0.02] p-8 md:p-14 shadow-[0_25px_80px_rgba(0,0,0,0.03)] dark:shadow-[0_25px_80px_rgba(0,0,0,0.4)] border border-neutral-200/60 dark:border-white/[0.06] backdrop-blur-xl space-y-10 z-10 relative transition-all duration-500"
      >

        <div className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-neutral-900 dark:text-white transition-colors duration-500">
            Add Tutor
          </h1>

          <p className="text-neutral-500 dark:text-neutral-400 text-base md:text-lg font-medium transition-colors duration-500">
            Create a premium tutor profile
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="md:col-span-2">
            <TextField>
              <Label className="block mb-2.5 text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 transition-colors duration-500">
                Tutor Name
              </Label>
              <Input
                required
                name="tutorName"
                placeholder="John Doe"
              />
              <FieldError />
            </TextField>
          </div>

          <TextField>
            <Label className="block mb-2.5 text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 transition-colors duration-500">
              Photo URL
            </Label>
            <Input
              required
              name="photo"
              type="url"
              placeholder="https://i.ibb.co/xyz.jpg"
            />
            <FieldError />
          </TextField>
            
            <div>
              <Label className="block mb-2.5 text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 transition-colors duration-300">
                Subject / Category
              </Label>
            
              <select
                name="subject"
                required
                className="w-full py-2 px-1 rounded-2xl border border-gray-400"
              >
                <option
                  value=""
                  className="bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100"
                >
                  Select Subject
                </option>
            
                <option
                  value="Mathematics"
                  className="bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100"
                >
                  Mathematics
                </option>
            
                <option
                  value="Physics"
                  className="bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100"
                >
                  Physics
                </option>
            
                <option
                  value="Chemistry"
                  className="bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100"
                >
                  Chemistry
                </option>
            
                <option
                  value="Biology"
                  className="bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100"
                >
                  Biology
                </option>
            
                <option
                  value="English"
                  className="bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100"
                >
                  English
                </option>
              </select>
            </div>
            
          <TextField>
            <Label className="block mb-2.5 text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 transition-colors duration-500">
              Available Days & Time Slot
            </Label>
            <Input
             required
              name="availability"
              placeholder="Sun - Thu 5:00 PM - 8:00 PM"

            />
            <FieldError />
          </TextField>

          <TextField>
            <Label className="block mb-2.5 text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 transition-colors duration-500">
              Hourly Fee (USD)
            </Label>
            <Input
            required
              name="hourlyFee"
              type="number"
              placeholder="20"
            />
            <FieldError />
          </TextField>

          <TextField>
            <Label className="block mb-2.5 text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 transition-colors duration-500">
              Total Slot
            </Label>
            <Input
            required
              name="totalSlot"
              type="number"
              placeholder="10"

            />
            <FieldError />
          </TextField>

          <div className="md:col-span-2">
            <TextField>
              <Label className="block mb-2.5 text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 transition-colors duration-500">
                Session Start Date
              </Label>
              <Input
              required
                name="startDate"
                type="date"

              />
              <FieldError />
            </TextField>
          </div>

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
              />
              <FieldError />
            </TextField>
          </div>

          <TextField>
            <Label className="block mb-2.5 text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 transition-colors duration-500">
              Location (Area/City)
            </Label>
            <Input
            required
              name="location"
              placeholder="Dhaka, Bangladesh"

            />
            <FieldError />
          </TextField>

          <div>
            <Label className="block mb-2.5 text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 transition-colors duration-300">
              Teaching Mode
            </Label>
          
            <select
              name="mode"
              required
                className="w-full py-2 px-1 rounded-2xl border dark:border-gray-800"
            >
              <option
                value=""
                className="bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100"
              >
                Select Mode
              </option>
          
              <option
                value="Online"
                className="bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100"
              >
                Online
              </option>
          
              <option
                value="Offline"
                className="bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100"
              >
                Offline
              </option>
          
              <option
                value="Both"
                className="bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100"
              >
                Both
              </option>
            </select>
          </div>
        </div>

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