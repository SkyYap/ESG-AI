'use client'

import { Separator } from '@/components/ui/Separator';
import ActionHeader from './_PageSections/InsightHeader';
import { Outline } from '../report/_PageSections/Outline';

export default async function Insight() {
  return (
    <>
    <div>
        <ActionHeader />
        <Separator className="my-4" />
        <Outline/>

    </div>
    {/* <div>
        <ReportFinishedHeader />
        <Separator className="my-4" />
        <Outline/>
        <Separator className="my-4" />
        <ModifyReport/>
    </div> */}
    </>
  );
}