"use client";

import { useState } from "react";
import {
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";

import { updateTutor } from "@/lib/actions";
import { toast } from "react-toastify";

export function UpdateMyTutors({ tutor }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

const handleSubmit = async (formData) => {
  try {
    setLoading(true);

    const res = await updateTutor(tutor._id, formData);

    if (res) {
      toast.success("Tutor updated successfully");
      setOpen(false);
    } else {
      toast.error("Update failed");
    }
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      <Button className='cursor-pointer' variant="secondary" onPress={() => setOpen(true)}>
        Update
      </Button>

      <Modal isOpen={open} onOpenChange={setOpen}>
        <Modal.Backdrop>
          <Modal.Container placement="center">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />

              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form
                    action={handleSubmit}
                    className="space-y-6"
                  >
                    <TextField
                    defaultValue={tutor.tutorName}
                    >
                      <Label>Tutor Name</Label>
                      <Input
                        name="tutorName"
                      />
                    </TextField>

                    <TextField
                        defaultValue={tutor.photo}
                    >
                      <Label>Photo URL</Label>
                      <Input
                        name="photo"
                      />
                    </TextField>

                                     
                <TextField
                    defaultValue={tutor.subject}
                    >
                      <Label>Subject / Category</Label>
                      <select
                        name="subject"
                        className="w-full p-2 border rounded-xl"
                      >
                      <option className="dark:bg-[#121624]">Mathematics</option>
                      <option className="dark:bg-[#121624]">Physics</option>
                      <option className="dark:bg-[#121624]">Chemistry</option>
                      <option className="dark:bg-[#121624]">Biology</option>
                      <option className="dark:bg-[#121624]">English</option>
                      </select>
                    </TextField>

                    <TextField
                    defaultValue={tutor.availability}
                    >
                      <Label>Available Days & Time Slot</Label>
                      <Input
                        name="availability"
                        
                      />
                    </TextField>

                    <TextField
                    defaultValue={tutor.hourlyFee}
                    >
                      <Label>Hourly Fee (USD)</Label>
                      <Input
                        name="hourlyFee"
                        type="number"
                        
                      />
                    </TextField>

                    <TextField
                    defaultValue={tutor.totalSlot}
                    >
                      <Label>Total Slot</Label>
                      <Input
                        name="totalSlot"
                        type="number"
                        
                      />
                    </TextField>

                    <TextField
                    defaultValue={tutor.startDate}
                    >
                      <Label>Session Start Date</Label>
                      <Input
                        name="startDate"
                        type="date"
                        
                      />
                    </TextField>

                    <TextField
                    defaultValue={tutor.institution}
                    >
                      <Label>Institution & Experience</Label>
                      <TextArea
                        name="institution"
                        
                      />
                    </TextField>

                    <TextField
                    defaultValue={tutor.location}
                    >
                      <Label>Location (Area/City)</Label>
                      <Input
                        name="location"
                        
                      />
                    </TextField>

                    <TextField
                    defaultValue={tutor.mode}
                    >
                      <Label>Teaching Mode</Label>
                      <select
                        name="mode"
                        
                        className="w-full p-2 border rounded-xl"
                      >
                        <option className="dark:bg-[#121624]">Online</option>
                        <option className="dark:bg-[#121624]">Offline</option>
                        <option className="dark:bg-[#121624]">Both</option>
                      </select>
                    </TextField>

                    <div className="flex gap-3 justify-end">
                      <Button
                        type="button"
                        variant="secondary"
                        onPress={() => setOpen(false)}
                      >
                        Cancel
                      </Button>

                      <Button type="submit" isDisabled={loading} className='bg-gradient-to-r from-indigo-600 to-blue-600'>
                        {loading ? "Updating..." : "Update"}
                      </Button>

                    </div>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </>
  );
}