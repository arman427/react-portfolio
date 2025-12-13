export const useScrollTo = () => {
   const scrollToSection = (sectionId, e) => {
      e.preventDefault();
      const target = document.getElementById(sectionId);
      if (target) {
         window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
         })
      }
   };
   return scrollToSection;
};