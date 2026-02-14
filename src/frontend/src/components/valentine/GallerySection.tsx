import { Card, CardContent } from '@/components/ui/card';
import { usePhotoGallery } from '../../state/usePhotoGallery';
import PhotoUploader from './PhotoUploader';
import { Images, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function GallerySection() {
  const { photos, setActivePhotoIndex, removePhoto } = usePhotoGallery();

  return (
    <section className="min-h-[80vh] py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <Images className="w-10 h-10 mx-auto text-rose-500" />
          <h2 className="text-4xl font-serif font-bold">Our Memories</h2>
          <p className="text-muted-foreground">Moments captured, love remembered</p>
        </div>

        <PhotoUploader />

        {photos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <Card
                key={photo.id}
                className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all"
              >
                <CardContent className="p-0 relative aspect-square">
                  <img
                    src={photo.url}
                    alt={photo.caption || photo.filename}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    onClick={() => setActivePhotoIndex(index)}
                  />
                  <Button
                    size="icon"
                    variant="destructive"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={(e) => {
                      e.stopPropagation();
                      removePhoto(photo.id);
                    }}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                  {photo.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 text-sm">
                      {photo.caption}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            <p>No photos yet. Upload some memories to get started!</p>
          </div>
        )}
      </div>
    </section>
  );
}
