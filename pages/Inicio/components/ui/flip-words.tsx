import { FlipWords } from "../../../../src/components/ui/flip-words";
import imagenDistribucion from '../../images/distribuicion.png'

export const FlipWordsComponent = () => {
    const words = [ "Pechuga", "Ala", "Pernil", "Chuleta", "Patas de pollo"];
    
  return (
    <>
    <div className="flex justify-center ">
    <div className="h-[40rem] flex justify-center items-start px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 fixed left-1 ">
        Productos
        <FlipWords words={words} /> <br />
        Enterprise Max Pollo
      </div>
      <div className="h-[40rem] w-[35rem] flex justify-center items-start px-4">
        <img src={imagenDistribucion} alt="Distributing" className="w-full"/>
      </div>
    </div>
    </div>
   
    </>
  );
};