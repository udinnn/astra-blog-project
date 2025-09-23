"use client";

import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { createClient } from "@/utils/supabase/client";
import Card from "./ui/Card";
import Input from "./ui/Input";
import Button from "./ui/Button";
import ImageUploader from "./ui/ImageUploader";
import ConfirmationModal from "./ui/ConfirmationModal";

const Kegiatan = () => {
  const supabase = createClient();
  const [imageUrls, setImageUrls] = useState([]);
  const [activityName, setActivityName] = useState("");
  const [activityDate, setActivityDate] = useState("");
  const [publishType, setPublishType] = useState("");
  const [targetId, setTargetId] = useState("");
  const [chapters, setChapters] = useState([]);
  const [collaborations, setCollaborations] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data: chapterData } = await supabase
        .from("chapters")
        .select("id, name");
      if (chapterData) setChapters(chapterData);
      const { data: collabData } = await supabase
        .from("collaborations")
        .select("id, partner_name");
      if (collabData) setCollaborations(collabData);
    };
    fetchData();
  }, [supabase]);

  const resetForm = () => {
    setImageUrls([]);
    setActivityName("");
    setActivityDate("");
    setPublishType("");
    setTargetId("");
  };

  const handleSave = () => {
    if (
      !activityName ||
      !activityDate ||
      imageUrls.length === 0 ||
      !publishType ||
      !targetId
    ) {
      toast.error(
        "Mohon lengkapi semua field, termasuk unggah minimal satu gambar."
      );
      return;
    }
    setIsModalVisible(true);
  };

  const confirmSave = async () => {
    setIsLoading(true);

    // PERUBAHAN KUNCI: Gabungkan array URL menjadi satu string dengan pemisah koma
    const imageUrlString = imageUrls.join(",");

    const { error } = await supabase.from("kegiatan").insert([
      {
        title: activityName,
        activity_date: activityDate,
        image_url: imageUrlString, // Simpan string URL gabungan
        publish_type: publishType,
        target_id: targetId,
      },
    ]);

    setIsLoading(false);
    setIsModalVisible(false);

    if (error) {
      toast.error(`Gagal menyimpan kegiatan: ${error.message}`);
    } else {
      toast.success("Kegiatan berhasil disimpan!");
      resetForm();
    }
  };

  const targetOptions = publishType === "chapter" ? chapters : collaborations;

  return (
    <>
      <Card>
        <h1 className="text-2xl font-bold mb-6 text-gray-800">KEGIATAN BARU</h1>
        <div className="space-y-6">
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gambar Kegiatan
            </label>
            <ImageUploader
              onImageChange={setImageUrls}
              folderPath="activities"
              initialPreview={imageUrls}
            />
          </div>
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nama Kegiatan
            </label>
            <Input
              type="text"
              value={activityName}
              onChange={(e) => setActivityName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tanggal
            </label>
            <Input
              type="date"
              value={activityDate}
              onChange={(e) => setActivityDate(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipe Publikasi
              </label>
              <select
                value={publishType}
                onChange={(e) => {
                  setPublishType(e.target.value);
                  setTargetId("");
                }}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="" disabled>
                  -- Pilih Tipe --
                </option>
                <option value="chapter">Chapter</option>
                <option value="collaboration">KolaborAksi</option>
              </select>
            </div>
            {publishType && (
              <div className="form-group">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Target Spesifik
                </label>
                <select
                  value={targetId}
                  onChange={(e) => setTargetId(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={targetOptions.length === 0}>
                  <option value="" disabled>
                    -- Pilih Target --
                  </option>
                  {targetOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {publishType === "chapter"
                        ? option.name
                        : option.partner_name}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end mt-8 gap-3">
          <Button variant="secondary" onClick={resetForm} disabled={isLoading}>
            Batal
          </Button>
          <Button variant="primary" onClick={handleSave} disabled={isLoading}>
            {isLoading ? "Menyimpan..." : "Simpan Kegiatan"}
          </Button>
        </div>
      </Card>
      <ConfirmationModal
        isOpen={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onConfirm={confirmSave}
        title="Konfirmasi Simpan">
        Apakah Anda yakin ingin menyimpan kegiatan ini?
      </ConfirmationModal>
    </>
  );
};

export default Kegiatan;
