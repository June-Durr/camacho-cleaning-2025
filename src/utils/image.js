// In a new file: src/utils/images.js

// Import all images
import logo from "../assets/logo.png";
import placeholderImg from "../assets/placeholder.jpg";

// Map image paths for easy access
const images = {
  logo,
  placeholder: placeholderImg,
  services: {
    residential: placeholderImg,
    commercial: placeholderImg,
    specializedCleaning: placeholderImg,
  },
  team: {
    member1: placeholderImg,
    member2: placeholderImg,
  },
};

// Helper function to get image with fallback
export const getImage = (path, fallback = images.placeholder) => {
  try {
    // Split the path into segments (e.g., 'services.residential')
    const segments = path.split(".");

    // Navigate through the images object using the segments
    let result = images;
    for (const segment of segments) {
      result = result[segment];
      if (!result) return fallback;
    }

    return result;
  } catch (error) {
    console.error("Error accessing image:", error);
    return fallback;
  }
};

export default images;
