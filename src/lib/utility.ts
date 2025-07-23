
export const compressImage = async (file: File): Promise<string | null> => {
  try {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    const img = new Image();
    img.src = URL.createObjectURL(file);
    
    return new Promise((resolve) => {
      img.onload = () => {
        const MAX_WIDTH = 800;
        const MAX_HEIGHT = 600;
        
        let { width, height } = img;
        
        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }
        
        canvas.width = width;
        canvas.height = height;
        
        ctx.drawImage(img, 0, 0, width, height);
        
        const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.7);
        URL.revokeObjectURL(img.src);
        resolve(compressedDataUrl);
      };
    });
  } catch (error) {
    console.error('Error compressing image:', error);
    return null;
  }
};
