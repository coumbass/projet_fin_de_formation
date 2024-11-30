import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import des icônes

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative inline-block text-left">
      {/* Avatar et bouton pour ouvrir/fermer le menu */}
      <div
        className="flex items-center space-x-3 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src="https://img.freepik.com/vecteurs-premium/portrait-avatar-rond-etudiante-musulmane-du-primaire-hijab-rouge-dans-style-plat_768258-1754.jpg?w=740" // Remplacez par l'URL de votre image
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
        <div className="text-left">
          <p className="text-sm font-semibold text-gray-800">Coumba</p>
          <p className="text-xs text-gray-500">Niveau 1</p>
        </div>
        {/* Flèche dynamique */}
        {isOpen ? (
          <FaChevronUp className="text-gray-600" />
        ) : (
          <FaChevronDown className="text-gray-600" />
        )}
      </div>

      {/* Menu déroulant */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
          <button
            onClick={() => navigate("/profile")}
            className="block w-full px-4 py-2 text-left text-sm text-gray-800 hover:bg-gray-100"
          >
            Voir le profil
          </button>
          <button
            onClick={() => navigate("/signout")}
            className="block w-full px-4 py-2 text-left text-sm text-gray-800 hover:bg-gray-100"
          >
            Se déconnecter
            
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
