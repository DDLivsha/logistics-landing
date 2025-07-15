import { StaticImageData } from "next/image";

export interface TeamMember {
   name: string,
   position: string,
   image: StaticImageData,
   email: string,
   phone: string
}