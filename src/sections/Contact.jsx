import { useGSAP } from "@gsap/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";
import { socials } from "../constants";
import gsap from "gsap";

const Contact = () => {
  const text = `Got a question,
    WE’D love to hear from you and discus further!`;
  const items = [
    " Eat Sleep Code Repeat",
    " Eat Sleep Code Repeat",
    " Eat Sleep Code Repeat",
    " Eat Sleep Code Repeat",
    " Eat Sleep Code Repeat",
  ];

  useGSAP(() => {
 
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.3,
      duration: 1,
      stagger: 0.25,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".social-link",
        start: "top 80%",
      },
    });

    const cards = document.querySelectorAll(".social-link");
    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(card, {
          rotationY: x / 20,
          rotationX: -y / 20,
          scale: 1.05,
          transformPerspective: 800,
          ease: "power3.out",
          duration: 0.3,
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          rotationY: 0,
          rotationX: 0,
          scale: 1,
          ease: "power3.out",
          duration: 0.6,
        });
      });
    });
  }, []);

  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen bg-black"
    >
      <div>
        <AnimatedHeaderSection
          subTitle={"I Dream it, I Code it"}
          title={"Contact"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />

        <div className="flex px-6 sm:px-10 font-light text-white uppercase lg:text-[28px] text-[22px] leading-none mb-10">
          <div className="flex flex-col w-full gap-12">
          
            <div className="social-link bg-white/5 p-6 rounded-2xl border border-white/10 shadow-lg cursor-pointer">
              <h2 className="text-lg sm:text-xl font-semibold">E-mail</h2>
              <div className="w-full h-px my-3 bg-white/30" />
              <p className="text-lg tracking-wide lowercase md:text-xl lg:text-2xl">
                shivamyadav10981@gmail.com
              </p>
            </div>


            <div className="social-link bg-white/5 p-6 rounded-2xl border border-white/10 shadow-lg cursor-pointer">
              <h2 className="text-lg sm:text-xl font-semibold">Phone</h2>
              <div className="w-full h-px my-3 bg-white/30" />
              <p className="text-lg lowercase md:text-xl lg:text-2xl">
                +916394952163
              </p>
            </div>

     
            <div className="social-link bg-white/5 p-6 rounded-2xl border border-white/10 shadow-lg cursor-pointer">
              <h2 className="text-lg sm:text-xl font-semibold">Social Media</h2>
              <div className="w-full h-px my-3 bg-white/30" />
              <div className="flex flex-wrap gap-3">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 text-xs md:text-sm rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Marquee */}
      <Marquee items={items} className="text-white bg-transparent" />
    </section>
  );
};

export default Contact;








// import { useGSAP } from "@gsap/react";
// import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
// import Marquee from "../components/Marquee";
// import { socials } from "../constants";
// import gsap from "gsap";

// const Contact = () => {
//   const text = `Got a question,
//     WE’D love to hear from you and discus further!`;
//   const items = [
//     " Eat Sleep Code Repeat",
//      " Eat Sleep Code Repeat",
//       " Eat Sleep Code Repeat",
//        " Eat Sleep Code Repeat",
//         " Eat Sleep Code Repeat"


//   ];
//   useGSAP(() => {
//     gsap.from(".social-link", {
//       y: 100,
//       opacity: 0,
//       delay: 0.5,
//       duration: 1,
//       stagger: 0.3,
//       ease: "back.out",
//       scrollTrigger: {
//         trigger: ".social-link",
//       },
//     });
//   }, []);
//   return (
//     <section
//       id="contact"
//       className="flex flex-col justify-between min-h-screen bg-black"
//     >
//       <div>
//         <AnimatedHeaderSection
//           subTitle={"I Dream it, I Code it"}
//           title={"Contact"}
//           text={text}
//           textColor={"text-white"}
//           withScrollTrigger={true}
//         />
//         <div className="flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10">
//           <div className="flex flex-col w-full gap-10">
//             <div className="social-link">
//               <h2>E-mail</h2>
//               <div className="w-full h-px my-2 bg-white/30" />
//               <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">
//                 shivamyadav10981@gmail.com 
//               </p>
//             </div>
//             <div className="social-link">
//               <h2>Phone</h2>
//               <div className="w-full h-px my-2 bg-white/30" />
//               <p className="text-xl lowercase md:text-2xl lg:text-3xl">
//                 +916394952163
//               </p>
//             </div>
//             <div className="social-link">
//               <h2>Social Media</h2>
//               <div className="w-full h-px my-2 bg-white/30" />
//               <div className="flex flex-wrap gap-2">
//                 {socials.map((social, index) => (
//                   <a
//                     key={index}
//                     className="text-xs leading-loose tracking-wides uppercase md:text-sm hover:text-white/80 transition-colors duration-200"
//                   >
//                     {"{ "}
//                     {social.name}
//                     {" }"}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Marquee items={items} className="text-white bg-transparent" />
//     </section>
//   );
// };

// export default Contact;
