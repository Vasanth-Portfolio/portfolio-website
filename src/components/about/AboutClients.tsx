import { useContext, useRef, useEffect } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import AboutClientSingle from './AboutClientSingle';

const AboutClients = () => {
  const { clientsData, clientsHeading } = useContext(AboutMeContext);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  
  const scrollSpeed = 1; 
  const itemWidth = 120; 
  const gap = 32; 

  useEffect(() => {
    const container = containerRef.current;
    const scroller = scrollerRef.current;

    if (!container || !scroller) return;

    const originalContent = scroller.innerHTML;
    scroller.innerHTML = originalContent + originalContent;

    let scrollPosition = 0;
    let isPaused = false;

    const animate = () => {
      if (!isPaused) {
        scrollPosition += scrollSpeed;
        
        if (scrollPosition >= scroller.scrollWidth / 2) {
          scrollPosition = 0;
          scroller.style.transform = `translateX(0)`;
        }
        
        scroller.style.transform = `translateX(-${scrollPosition}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const handleMouseEnter = () => isPaused = true;
    const handleMouseLeave = () => isPaused = false;
    
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="mt-10 sm:mt-20">
      <p className="font-general-medium text-2xl sm:text-3xl text-center text-primary-dark dark:text-primary-light">
        {clientsHeading}
      </p>
      
      <div 
        ref={containerRef}
        className="relative mt-10 sm:mt-14 w-full overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
        }}
      >
        <div className="w-full h-[140px] flex items-center">
          <div
            ref={scrollerRef}
            className="flex items-center will-change-transform"
            style={{
              gap: `${gap}px`,
              width: 'max-content'
            }}
          >
            {clientsData.map((client) => (
              <div 
                key={client.id}
                className="flex-shrink-0 flex items-center justify-center"
                style={{ width: `${itemWidth}px` }}
              >
                <AboutClientSingle
                  title={client.title}
                  image={client.img}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutClients;