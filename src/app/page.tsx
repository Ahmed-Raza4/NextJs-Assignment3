import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import pic from "../../data/cropped.jpg"

export default function Home() {
  return (
    <div>
      <Header/>
      <div className="h-[70vh] w-[100vw] border-2 border-red-400 rounded-[10px] bg-yellow-100 text-[48px] flex items-center justify-center font-serif font-bold drop-shadow-2xl outline outline-stone-600 ">
      <div className="h-[40vh] w-[60vw] m-[20px] text-[36px] text-centre font-bold mt-[40px] pt-[15px]">
      Hey! <br />
      My Name is <span className="text-amber-800 text-[40px]">Ahmed Raza</span> <br />
      I'm <span className="text-amber-800 text-[40px]">Frontend Developer.</span>
      </div>

      <div className="h-[40vh] w-[30vw] m-[20px] pl-[150px]">
        <Image src={pic} alt="Mypic" width={250} height={300} className="rounded-[10px]"/>
      </div>
      </div>
      <Footer/>
    </div>
  );
}


