import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SmoothScroll from '../components/SmoothScroll';
import CursorGlow from '../components/CursorGlow';

const MainLayout = () => {
  return (
    <SmoothScroll>
      <div className="bg-[#FAFAFA] text-[#111111] min-h-screen">
        <CursorGlow />
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default MainLayout;
