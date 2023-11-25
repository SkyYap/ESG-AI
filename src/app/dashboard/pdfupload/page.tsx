'use client'

import { Separator } from '@/components/ui/Separator';
import PdfUploadHeader from './_PageSections/PdfUploadHeader';
import { ECard } from './_PageSections/ECard';
import { SCard } from './_PageSections/SCard';
import { GCard } from './_PageSections/GCard';
import { OCard } from './_PageSections/OCard';

export default async function PdfUploadPage() {
  return (
    <div>
      <PdfUploadHeader />
      <Separator className="my-4" />
      <ECard/>
      <SCard/>
      <GCard/>
      <OCard/>
    </div>
  );
}
