import React, { useState } from "react";
import PhotoUploadModal from "./PhotoUploadModal";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPhoto = (photo) => {
    setPhotos([...photos, photo]);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDeletePhoto = (index) => {
    const updatedPhotos = photos.filter((_, i) => i !== index);
    setPhotos(updatedPhotos);
  };

  return (
    <div className="app-container">
      {" "}
      {/* 전체 화면을 감싸는 div 추가 */}
      <div className="app">
        <header className="header">
          <p>Family Memories</p>
        </header>
        <main className="content">
          <div className="photo-grid">
            {photos.map((photo, index) => (
              <div key={index} className="photo-card">
                <div className="photo-header">
                  <div className="photo-title">{photo.title}</div>
                  <button
                    className="delete-button"
                    onClick={() => handleDeletePhoto(index)}
                  >
                    ✖
                  </button>
                </div>
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="photo-image"
                />
              </div>
            ))}
          </div>
          <button className="add-button" onClick={handleOpenModal}>
            +
          </button>
        </main>
        {isModalOpen && (
          <PhotoUploadModal
            onClose={handleCloseModal}
            onSave={handleAddPhoto}
          />
        )}
      </div>
    </div>
  );
}

export default App;
