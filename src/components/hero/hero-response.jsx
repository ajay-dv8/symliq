 
import { Hero } from "./hero";
import { MobileHero } from "./mobileHero";

 
export const HeroResponse = () => {
  return (
    <>
      <div className=" block md:hidden">
        <MobileHero/>
      </div>
      <div className="hidden md:block ">
        <Hero />
      </div>
    </>
  );
};











// import { useEffect, useState } from "react";
// import { useMediaQuery } from "@/hooks/useMediQuery";
// import { Hero } from "./hero";
// import { MobileHero } from "./mobileHero";

// const HeroResponse = () => {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true); // Set to true once the component is mounted
//   }, []);

//   const isMobile = useMediaQuery("(max-width: 768px)");

//   if (!isClient) {
//     // Render nothing or a loading state until the component is mounted
//     return null;
//   }

//   return isMobile ? <MobileHero /> : <Hero />;
// };

// export default HeroResponse;











// import { useMediaQuery } from "@/hooks/useMediQuery";
// import { Hero } from "./hero";
// import { MobileHero } from "./mobileHero";

// const HeroResponse = () => { 

//   const isMobile = useMediaQuery("(max-width: 768px)");  

//   return isMobile ? <MobileHero /> : <Hero />;
// };

// export default HeroResponse;
