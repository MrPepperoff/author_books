import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from './MainLayout.module.sass';
import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  id: string
};

export default function MainLayout({ children, className, id}: Props) {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setIsTransitioning(true);
      
      // Ждем анимацию
      setTimeout(() => {
        setDisplayLocation(location);
        setIsTransitioning(false);
      }, 300);
    }
  }, [location, displayLocation]);

  return (
    <div className={`${style.layout} ${(className)? className : ''} ${style.pageTransition} ${isTransitioning ? style.fadeOut : style.fadeIn}`} id={id}>
      <div className={style.wrap}>
        <Header />
        <main className={style.main}>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}