import Image from "next/image";
import lio from "@/app/lio.png";
export default function LoadingComponent() {
  // Or a custom loading skeleton component
  return (
    <div className="h-screen flex items-center justify-center">
      <Image
        src={lio}
        width={500}
        alt="Lio"
        className="w-24 h-24 animate-pulse"
      />
    </div>
  );
}
