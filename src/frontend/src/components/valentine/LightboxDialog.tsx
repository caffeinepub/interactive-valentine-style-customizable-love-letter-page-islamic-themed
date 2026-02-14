import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { PhotoItem } from '../../state/usePhotoGallery';

interface LightboxDialogProps {
  photos: PhotoItem[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function LightboxDialog({
  photos,
  activeIndex,
  onClose,
  onNavigate,
}: LightboxDialogProps) {
  const currentPhoto = photos[activeIndex];

  const handlePrevious = () => {
    onNavigate(activeIndex > 0 ? activeIndex - 1 : photos.length - 1);
  };

  const handleNext = () => {
    onNavigate(activeIndex < photos.length - 1 ? activeIndex + 1 : 0);
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl w-full h-[90vh] p-0 bg-black/95">
        <div className="relative w-full h-full flex items-center justify-center">
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </Button>

          <Button
            size="icon"
            variant="ghost"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
            onClick={handlePrevious}
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>

          <img
            src={currentPhoto.url}
            alt={currentPhoto.caption || currentPhoto.filename}
            className="max-w-full max-h-full object-contain"
          />

          <Button
            size="icon"
            variant="ghost"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
            onClick={handleNext}
          >
            <ChevronRight className="w-8 h-8" />
          </Button>

          {currentPhoto.caption && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/80 text-white px-6 py-3 rounded-full max-w-2xl">
              {currentPhoto.caption}
            </div>
          )}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {activeIndex + 1} / {photos.length}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
