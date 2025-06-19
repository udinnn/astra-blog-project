"use client";

import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { createClient } from "@/utils/supabase/client";
import Card from "./ui/Card";
import Input from "./ui/Input";
import Button from "./ui/Button";
import ImageUploader from "./ui/ImageUploader";
import ConfirmationModal from "./ui/ConfirmationModal";

const KolaborAksi = ({ setActivePage }) => {
  const supabase = createClient();
  const [imageUrl, setImageUrl] = useState(null);
  const [partnerName, setPartnerName] = useState("");
  const [collaborationDate, setCollaborationDate] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const resetForm = () => {
    setImageUrl(null);
    setPartnerName("");
    setCollaborationDate("");
  };

  const handleSave = () => {
    if (!partnerName || !collaborationDate || !imageUrl) {
      toast.error("Please fill all fields and upload an image.");
      return;
    }
    setIsModalVisible(true);
  };

  const confirmSave = async () => {
    setIsLoading(true);

    // PERBAIKAN: Hapus pembuatan 'id' dari sini.
    // Biarkan database yang membuatnya secara otomatis.
    const { error } = await supabase.from("collaborations").insert([
      {
        partner_name: partnerName,
        collaboration_date: collaborationDate,
        image_url: imageUrl,
      },
    ]);

    setIsLoading(false);
    setIsModalVisible(false);

    if (error) {
      if (error.code === "23505") {
        toast.error("A collaboration with this partner name already exists!");
      } else {
        toast.error(`Could not save collaboration: ${error.message}`);
      }
    } else {
      toast.success("Collaboration saved successfully!");
      resetForm();
      // Arahkan kembali ke list jika fungsi tersedia
      if (setActivePage) {
        const listComponent = document.querySelector('[data-page="list"]');
        if (listComponent) {
          setActivePage("list");
        }
      }
    }
  };

  return (
    <>
      <Card>
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          KOLABORAKSI BARU
        </h1>
        <div className="space-y-6">
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gambar Mitra/Logo
            </label>
            <ImageUploader
              onImageChange={setImageUrl}
              folderPath="collaborations"
            />
          </div>
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nama Mitra
            </label>
            <Input
              type="text"
              placeholder="Enter Partner Name"
              value={partnerName}
              onChange={(e) => setPartnerName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tanggal
            </label>
            <Input
              type="date"
              value={collaborationDate}
              onChange={(e) => setCollaborationDate(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex justify-end mt-8 gap-3">
          <Button variant="secondary" onClick={resetForm} disabled={isLoading}>
            Batal
          </Button>
          <Button variant="primary" onClick={handleSave} disabled={isLoading}>
            {isLoading ? "Menyimpan..." : "Simpan KolaborAksi"}
          </Button>
        </div>
      </Card>
      <ConfirmationModal
        isOpen={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onConfirm={confirmSave}
        title="Confirm Save">
        Apakah Anda yakin ingin menyimpan kolaboraksi ini?
      </ConfirmationModal>
    </>
  );
};

export default KolaborAksi;
