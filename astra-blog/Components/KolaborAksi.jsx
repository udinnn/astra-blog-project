"use client";

import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { storageService } from "./services/localStorageService";
import Card from "./ui/Card";
import Input from "./ui/Input";
import Button from "./ui/Button";
import ImageUploader from "./ui/ImageUploader";
import ConfirmationModal from "./ui/ConfirmationModal";

const KolaborAksi = () => {
const [image, setImage] = useState(null);
  const [partnerName, setPartnerName] = useState("");
  const [collaborationDate, setCollaborationDate] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const generateId = () => {
    const savedCollaboration = storageService.getItems("kolaboraksi");
    return `CHAP${String(savedCollaboration.length + 1).padStart(3, "0")}`;
  };
  
  const resetForm = () => {
    setImage(null);
    setPartnerName("");
    setCollaborationDate("");
  };

  const handleSave = () => {
    if (!partnerName || !collaborationDate || !image) {
      toast.error("Please fill all fields and add an image.");
      return;
    }

    const savedCollaboration = storageService.getItems("kolaboraksi");
    const existingCollaboration = savedCollaboration.find(
      (kolaboraksi) => collaboration.name.toLowerCase() === partnerName.toLowerCase()
    );

    if (existingCollaboration) {
      toast.error("A collaboration with this partner name already exists!");
      return;
    }
    
    setIsModalVisible(true);
  };

  const confirmSave = () => {
    const collaborationData = {
      id: generateId(),
      imageReference: image, // In real app, this would be a URL from server
      name: partnerName,
      collaborationDate,
      createdAt: new Date().toISOString(),
    };

    const savedCollaboration = storageService.getItems("kolaboraksi");
    const updatedCollaboration = [...savedCollaboration, collaborationData];
    
    if (storageService.saveItems("kolaboraksi", updatedCollaboration)) {
      toast.success("Collaboration saved successfully!");
      resetForm();
    } else {
      toast.error("Could not save collaboration. Storage might be full.");
    }
    
    setIsModalVisible(false);
  };

  return (
    <>
      <Card>
        <h1 className="text-2xl font-bold mb-6 text-gray-800">NEW KOLABORAKSI</h1>
        
        <div className="space-y-6">
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-2">KolaborAksi Image</label>
            <ImageUploader onImageChange={setImage} />
          </div>

          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-2">Partner Name</label>
            <Input
              type="text"
              placeholder="Enter Partner Name"
              value={partnerName}
              onChange={(e) => setPartnerName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-2">Collaboration Date</label>
            <Input
              type="date"
              value={collaborationDate}
              onChange={(e) => setCollaborationDate(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="flex justify-end mt-8 gap-3">
           <Button variant="secondary" onClick={resetForm}>Cancel</Button>
           <Button variant="primary" onClick={handleSave}>Save Collaboration</Button>
        </div>
      </Card>

      <ConfirmationModal
        isOpen={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onConfirm={confirmSave}
        title="Confirm Save"
      >
        Are you sure you want to save this new collaboration?
      </ConfirmationModal>
    </>
  );
};

export default KolaborAksi;