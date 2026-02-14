import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useLoveLetterConfig } from '../../state/useLoveLetterConfig';
import { usePhotoGallery } from '../../state/usePhotoGallery';
import { useShareLink } from '../../hooks/useShareLink';
import { Settings, Share2, RotateCcw, Info } from 'lucide-react';

export default function CustomizationPanel() {
  const {
    fromName,
    toName,
    headline,
    date,
    place,
    note,
    setFromName,
    setToName,
    setHeadline,
    setDate,
    setPlace,
    setNote,
    reset,
  } = useLoveLetterConfig();

  const { clearPhotos } = usePhotoGallery();
  const { copyShareLink, isCopying } = useShareLink();

  const handleResetAll = () => {
    reset();
    clearPhotos();
    localStorage.removeItem('photo-gallery-storage');
  };

  return (
    <section className="min-h-[80vh] py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <Settings className="w-10 h-10 mx-auto text-amber-600" />
          <h2 className="text-4xl font-serif font-bold">Customize Your Page</h2>
          <p className="text-muted-foreground">Make it uniquely yours</p>
        </div>

        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            Your customization details are saved only in this browser on this device and won't sync to other devices.
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fromName">From (Your Name)</Label>
                <Input
                  id="fromName"
                  value={fromName}
                  onChange={(e) => setFromName(e.target.value)}
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="toName">To (Recipient Name)</Label>
                <Input
                  id="toName"
                  value={toName}
                  onChange={(e) => setToName(e.target.value)}
                  placeholder="Recipient's name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="headline">Headline</Label>
              <Input
                id="headline"
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                placeholder="A Message of Love"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Optional Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="date">Special Date</Label>
                <Input
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="e.g., February 14, 2026"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="place">Special Place</Label>
                <Input
                  id="place"
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                  placeholder="e.g., Where we first met"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="note">Personal Note</Label>
              <Textarea
                id="note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Add a short personal note..."
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button onClick={copyShareLink} disabled={isCopying} className="gap-2">
            <Share2 className="w-4 h-4" />
            {isCopying ? 'Copying...' : 'Copy Share Link'}
          </Button>
          <Button onClick={handleResetAll} variant="outline" className="gap-2">
            <RotateCcw className="w-4 h-4" />
            Reset All
          </Button>
        </div>
      </div>
    </section>
  );
}
