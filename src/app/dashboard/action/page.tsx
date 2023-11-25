'use client'

import { Separator } from '@/components/ui/Separator';
import ActionHeader from './_PageSections/ActionHeader';
import ActionText from './_PageSections/ActionText';

export default async function PdfUploadPage() {
  return (
    <>
    <div>
        <ActionHeader />
        <Separator className="my-4" />
        <ActionText/>


    </div>

    </>
  );
}
