import { useState } from "react";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/Button";

const ModifyReport = () => {
    
    return (
        <>
            <div className='flex justify-around'>
                <Button className='flex flex-col items-center'>Modify</Button>
                <Button className='flex flex-col items-center'>Download</Button>
                <Button className='flex flex-col items-center'>Share</Button>
            </div>
             
        </>
        
    );
};
  
export default ModifyReport;
  