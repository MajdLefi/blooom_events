
import { Button } from 'flowbite-react';
import React from 'react';

interface CustomButtonProps {
  buttonText: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ buttonText, }) => {

  return (
    <Button pill className='h-12 w-40 bg-white	text-zinc-950 border-l-black border-b-black border-t-black border-r-black hover:bg-black hover:text-gray-50'>
      {buttonText}
    </Button>
  );
};

export default CustomButton;
