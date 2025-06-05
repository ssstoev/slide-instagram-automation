import { useDeleteAutomation } from "@/hooks/use-automations";
import { useState } from "react";

type TrashBinIconProps = {
  mutationId: string;
};

export const TrashBinIcon = ({ mutationId }: TrashBinIconProps) => {

  const [isRed, setIsRed] = useState(false);
  const { mutate, isPending } = useDeleteAutomation(mutationId)

  const handleClick = () => {
    console.log('delete button clicked')
    setIsRed((prev) => !prev)
    console.log('turned red')
    // Trigger the delete mutation
    mutate(mutationId, {
      onSuccess: () => {
        console.log(`Automation with ID ${mutationId} deleted successfully.`);
      },
      onError: (error) => {
        console.error(`Failed to delete automation with ID ${mutationId}:`, error);
      },
    });
    setIsRed((prev) => !prev)
    // setTimeout(() => setIsRed((prev) => !prev), 1000)
  };

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke-width="1.5" 
      // stroke="currentColor"
      stroke={isRed ? "red" : "currentColor"} 
      className="size-6 hover:"
      onClick={handleClick}>
      <path 
        stroke-linecap="round" 
        stroke-linejoin="round" 
        d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 
          2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 
          4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 
          13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 
          1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 
          0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
    </svg>
  
  );
};