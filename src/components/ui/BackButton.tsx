
"use client"; 

import { useRouter } from 'next/navigation';
import { Button } from './Button';

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {

    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <Button 
      variant="outline" 
      size="lg" 
      onClick={handleBack}
      className="rounded-[56px] border-2 hover:bg-white hover:text-black transition-all"
    >
      ← Voltar
    </Button>
  );
}