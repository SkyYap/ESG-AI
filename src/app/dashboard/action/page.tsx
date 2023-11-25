'use client'

import { Separator } from '@/components/ui/Separator';
import ActionHeader from './_PageSections/ActionHeader';
import ActionText from './_PageSections/ActionText';
import { Outline } from '../report/_PageSections/Outline';

export default async function PdfUploadPage() {
  return (
    <>
    <div>
        <ActionHeader />
        <Separator className="my-4" />
        <ActionText/>
        <Outline/>


    </div>

    </>
  );
}
