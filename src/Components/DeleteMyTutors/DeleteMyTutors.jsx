"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { deleteTutor } from "@/lib/actions";
import {
  AlertDialog,
  Button,
} from "@heroui/react";

export function DeleteMyTutors({ tutor }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

const handleDelete = async () => {
  try {
    setLoading(true);

    const res = await deleteTutor(tutor._id);

    console.log("DELETE RESPONSE:", res);

    if (res) {
      toast.success("Tutor deleted successfully");
      setOpen(false);
    } else {
      toast.error("Failed to delete tutor ");
    }
  } catch (error) {
    console.error(error);
    toast.error("Something went wrong ");
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      <Button
        variant="danger"
        className="cursor-pointer"
        onPress={() => setOpen(true)}
      >
        Delete
      </Button>

      <AlertDialog isOpen={open} onOpenChange={setOpen}>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-[400px]">

              <AlertDialog.CloseTrigger />

              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>
                  Delete Tutor permanently?
                </AlertDialog.Heading>
              </AlertDialog.Header>

              <AlertDialog.Body>
                <p>
                  This will permanently delete{" "}
                  <strong>{tutor.tutorName}</strong>
                </p>
              </AlertDialog.Body>

              <AlertDialog.Footer>
                <Button
                  slot="close"
                  variant="tertiary"
                  disabled={loading}
                >
                  Cancel
                </Button>

                <Button
                  variant="danger"
                  onPress={handleDelete}
                  isLoading={loading}
                >
                  Delete
                </Button>
              </AlertDialog.Footer>

            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </>
  );
}