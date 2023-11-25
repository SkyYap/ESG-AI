import { useState } from "react";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/Button";

const GeneratingReport = () => {
    const [requestReport, setRequestReport] = useState(false);
    
    const handleRequestReportClick = () => {
        setRequestReport(true);
    };

    const handleCancelClick = () => {
        setRequestReport(false);
    };
    
    return (
        <>
            {!requestReport &&
            <div className='flex justify-around'>
                <Button onClick={handleRequestReportClick} className='flex flex-col items-center'>Request ESG report</Button>
            </div>
            }
            {requestReport &&
            <div className="space-y-4">
                <div className='flex justify-around'>
                        <Icons.Loader className="flex flex-col items-center animate-spin-slow" width="240" height="240" stroke-width="1" viewBox="0 0 24 24" />
                </div>
                <div className="flex justify-around">
                    <h3 className="text-2xl items-center tracking-tight">Generating report. This may take few minutes</h3>
                </div>
                <div className='flex justify-around'>
                    <Button onClick={handleCancelClick} variant="destructive" className='flex flex-col items-center'>Cancel</Button>
                </div>
            </div>
            }
            
        </>
        
    );
};
  
export default GeneratingReport;
  