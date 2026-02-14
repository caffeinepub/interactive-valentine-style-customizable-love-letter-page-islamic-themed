import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLoveLetterConfig } from '../../state/useLoveLetterConfig';
import { Calendar, MapPin, FileText } from 'lucide-react';

export default function DetailsSection() {
  const { date, place, note } = useLoveLetterConfig();

  const hasDetails = date || place || note;

  if (!hasDetails) {
    return (
      <section className="min-h-[80vh] py-12 px-4 flex items-center justify-center">
        <div className="text-center space-y-4 max-w-md">
          <FileText className="w-12 h-12 mx-auto text-muted-foreground" />
          <h2 className="text-2xl font-serif font-bold">No Details Yet</h2>
          <p className="text-muted-foreground">
            Add special details like date, place, or a note in the customization panel.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[80vh] py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <FileText className="w-10 h-10 mx-auto text-amber-600" />
          <h2 className="text-4xl font-serif font-bold">Special Details</h2>
          <p className="text-muted-foreground">The little things that matter</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {date && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Calendar className="w-5 h-5 text-rose-500" />
                  Date
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">{date}</p>
              </CardContent>
            </Card>
          )}

          {place && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MapPin className="w-5 h-5 text-rose-500" />
                  Place
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">{place}</p>
              </CardContent>
            </Card>
          )}

          {note && (
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <FileText className="w-5 h-5 text-rose-500" />
                  Note
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg whitespace-pre-wrap">{note}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
