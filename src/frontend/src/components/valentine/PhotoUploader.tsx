import { useRef, ChangeEvent } from 'react';
import { Button } from '@/components/ui/button';
import { usePhotoGallery } from '../../state/usePhotoGallery';
import { toast } from 'sonner';
import { Upload } from 'lucide-react';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];

export default function PhotoUploader() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { addPhoto } = usePhotoGallery();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      // Validate file type
      if (!ALLOWED_TYPES.includes(file.type)) {
        toast.error(`${file.name}: Invalid file type. Please upload PNG, JPG, or WebP.`);
        return;
      }

      // Validate file size
      if (file.size > MAX_FILE_SIZE) {
        toast.error(`${file.name}: File too large. Maximum size is 5MB.`);
        return;
      }

      // Convert to Data URL for persistence
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        if (dataUrl) {
          addPhoto({
            id: `${Date.now()}-${Math.random()}`,
            url: dataUrl,
            filename: file.name,
          });
        }
      };
      reader.onerror = () => {
        toast.error(`${file.name}: Failed to read file. Please try again.`);
      };
      reader.readAsDataURL(file);
    });

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="flex justify-center">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/jpg,image/webp"
        multiple
        onChange={handleFileChange}
        className="hidden"
      />
      <Button
        onClick={() => fileInputRef.current?.click()}
        size="lg"
        className="gap-2"
      >
        <Upload className="w-5 h-5" />
        Upload Photos
      </Button>
    </div>
  );
}
