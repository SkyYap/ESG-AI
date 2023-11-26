import { useState } from "react";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/Button";

const ModifyReport = () => {
    const handleDownload = () => {
        // Replace 'your-pdf-file.pdf' with the actual name of your PDF file
        const pdfUrl = '/ESG.ai.pdf';
    
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.target = '_blank'; // Open in a new tab
        link.download = 'ESG.ai.pdf'; // Specify the download file name
        document.body.appendChild(link);
    
        // Trigger the click event on the link to initiate the download
        link.click();
    
        // Remove the link from the document
        document.body.removeChild(link);
      };

    return (
        <>
            <div className='flex justify-around'>
                <Button className='flex flex-col items-center'>Modify</Button>
                <Button onClick={handleDownload} className='flex flex-col items-center'>Download</Button>
                <Button className='flex flex-col items-center'>Share</Button>
            </div>
        </>
        
    );
};
  
export default ModifyReport;
  