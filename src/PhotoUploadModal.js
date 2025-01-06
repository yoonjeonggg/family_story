import React, { useState } from "react";
import "./PhotoUploadModal.css";

function PhotoUploadModal({ onClose, onSave }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const handleSave = () => {
    if (title && image) {
      onSave({ title, image });
      onClose();
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>게시물 업로드</h2>
        <input
          type="text"
          placeholder="제목 입력"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <div className="modal-buttons">
          <button onClick={onClose}>취소</button>
          <button onClick={handleSave}>저장</button>
        </div>
      </div>
    </div>
  );
}

export default PhotoUploadModal;
