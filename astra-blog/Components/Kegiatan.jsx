"use client";

import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { createClient } from "@/utils/supabase/client";
import Card from "./ui/Card";
import Input from "./ui/Input";
import Button from "./ui/Button";
import ImageUploader from "./ui/ImageUploader";
import ConfirmationModal from "./ui/ConfirmationModal";

const Kegiatan = () => {
  const supabase = createClient();
  const [imageUrl, setImageUrl] = useState(null);
  const [activityName, setActivityName] = useState("");
  const [activityDate, setActivityDate] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const resetForm = () => {
    setImageUrl(null);
    setActivityName("");
    setActivityDate("");
  };

  const handleSave = () => {
    if (!activityName || !activityDate || !imageUrl) {
      toast.error("Please fill all fields and upload an image.");
      return;
    }
    setIsModalVisible(true);
  };

  const confirmSave = async () => {
    setIsLoading(true);

    // PERBAIKAN: Biarkan database yang membuat ID.
    const { error } = await supabase.from("kegiatan").insert([
      {
        title: activityName,
        activity_date: activityDate,
        image_url: imageUrl,
      },
    ]);

    setIsLoading(false);
    setIsModalVisible(false);

    if (error) {
      toast.error(`Could not save activity: ${error.message}`);
    } else {
      toast.success("Activity saved successfully!");
      resetForm();
    }
  };

  return (
    <>
      <Card>
        <h1 className="text-2xl font-bold mb-6 text-gray-800">NEW ACTIVITY</h1>
        <div className="space-y-6">
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Activity Image
            </label>
            <ImageUploader
              onImageChange={setImageUrl}
              folderPath="activities"
            />
          </div>
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Activity Name
            </label>
            <Input
              type="text"
              placeholder="Enter Activity Name"
              value={activityName}
              onChange={(e) => setActivityName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Activity Date
            </label>
            <Input
              type="date"
              value={activityDate}
              onChange={(e) => setActivityDate(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex justify-end mt-8 gap-3">
          <Button variant="secondary" onClick={resetForm} disabled={isLoading}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave} disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Activity"}
          </Button>
        </div>
      </Card>
      <ConfirmationModal
        isOpen={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onConfirm={confirmSave}
        title="Confirm Save">
        Are you sure you want to save this new activity?
      </ConfirmationModal>
    </>
  );
};

export default Kegiatan;
