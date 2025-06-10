"use client";

import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { storageService } from "./services/localStorageService";
import Card from "./ui/Card";
import Input from "./ui/Input";
import Button from "./ui/Button";
import ImageUploader from "./ui/ImageUploader";
import ConfirmationModal from "./ui/ConfirmationModal";

const Kegiatan = () => {
  const [image, setImage] = useState(null);
  const [activityName, setActivityName] = useState("");
  const [activityDate, setActivityDate] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const generateId = () => {
    const savedChapters = storageService.getItems("chapters");
    return `CHAP${String(savedChapters.length + 1).padStart(3, "0")}`;
  };
  
  const resetForm = () => {
    setImage(null);
    setActivityName("");
    setActivityDate("");
  };

  const handleSave = () => {
    if (!activityName || !activityDate || !image) {
      toast.error("Please fill all fields and add an image.");
      return;
    }

    const savedActivity = storageService.getItems("kegiatan");
    const existingActivity = savedActivity.find(
      (kegiatan) => activity.name.toLowerCase() === activityName.toLowerCase()
    );

    if (existingActivity) {
      toast.error("This activity already exists!");
      return;
    }
    
    setIsModalVisible(true);
  };

  const confirmSave = () => {
    const chapterData = {
      id: generateId(),
      imageReference: image, // In real app, this would be a URL from server
      name: activityName,
      activityDate,
      createdAt: new Date().toISOString(),
    };

    const savedActivity = storageService.getItems("kegiatan");
    const updatedActivity = [...savedActivity, activityData];
    
    if (storageService.saveItems("kegiatan", updatedActivity)) {
      toast.success("Activity saved successfully!");
      resetForm();
    } else {
      toast.error("Could not save activity. Storage might be full.");
    }
    
    setIsModalVisible(false);
  };

  return (
    <>
      <Card>
        <h1 className="text-2xl font-bold mb-6 text-gray-800">NEW ACTIVITY</h1>
        
        <div className="space-y-6">
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-2">Activity Image</label>
            <ImageUploader onImageChange={setImage} />
          </div>

          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-2">Activity Name</label>
            <Input
              type="text"
              placeholder="Enter Activty Name"
              value={activityName}
              onChange={(e) => setActivityName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-2">Activity Date</label>
            <Input
              type="date"
              value={activityDate}
              onChange={(e) => setActivityDate(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="flex justify-end mt-8 gap-3">
           <Button variant="secondary" onClick={resetForm}>Cancel</Button>
           <Button variant="primary" onClick={handleSave}>Save Chapter</Button>
        </div>
      </Card>

      <ConfirmationModal
        isOpen={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onConfirm={confirmSave}
        title="Confirm Save"
      >
        Are you sure you want to save this new activity?
      </ConfirmationModal>
    </>
  );
};

export default Kegiatan;