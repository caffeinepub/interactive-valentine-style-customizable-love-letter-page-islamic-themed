import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLoveLetterConfig } from '../../state/useLoveLetterConfig';
import { islamicLetterTemplates } from '../../content/islamicLetterTemplates';
import AnimatedLetterReveal from './AnimatedLetterReveal';
import { BookOpen, Edit3 } from 'lucide-react';

export default function LetterSection() {
  const { letterText, fromName, selectedTemplate, setLetterText, setSelectedTemplate, loadTemplate } =
    useLoveLetterConfig();
  const [activeTab, setActiveTab] = useState<'preview' | 'edit'>('preview');

  const handleTemplateSelect = (index: number) => {
    setSelectedTemplate(index);
    loadTemplate(islamicLetterTemplates[index].content);
    setActiveTab('preview');
  };

  const displayFrom = fromName || 'Kekasihmu';
  const finalLetterText = letterText || 'Tuliskan pesan tulus dari hatimu di sini...';

  return (
    <section className="min-h-[80vh] py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <BookOpen className="w-10 h-10 mx-auto text-amber-600" />
          <h2 className="text-4xl font-serif font-bold">Surat Cinta</h2>
          <p className="text-muted-foreground">Kata-kata dari hati, diberkahi oleh iman</p>
        </div>

        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'preview' | 'edit')}>
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="preview">Pratinjau</TabsTrigger>
            <TabsTrigger value="edit">Edit</TabsTrigger>
          </TabsList>

          <TabsContent value="preview" className="space-y-6">
            <Card className="border-2 border-amber-200/50 bg-card/50 backdrop-blur">
              <CardContent className="p-8 md:p-12">
                <AnimatedLetterReveal text={finalLetterText} />
                <div className="mt-8 text-right">
                  <p className="text-lg font-serif italic text-muted-foreground">
                    Dengan cinta,
                  </p>
                  <p className="text-xl font-serif font-semibold">{displayFrom}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="edit" className="space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Edit3 className="w-5 h-5" />
                  Pilih Template
                </h3>
                <div className="grid gap-3 md:grid-cols-3">
                  {islamicLetterTemplates.map((template, index) => (
                    <Button
                      key={index}
                      variant={selectedTemplate === index ? 'default' : 'outline'}
                      onClick={() => handleTemplateSelect(index)}
                      className="h-auto py-4"
                    >
                      {template.title}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Sesuaikan Pesanmu</h3>
                <Textarea
                  value={letterText}
                  onChange={(e) => setLetterText(e.target.value)}
                  placeholder="Tuliskan pesan tulus dari hatimu di sini..."
                  className="min-h-[400px] font-serif text-base leading-relaxed"
                />
              </div>

              <Button onClick={() => setActiveTab('preview')} className="w-full">
                Pratinjau Surat
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
