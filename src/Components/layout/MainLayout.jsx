
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';



const MainLayout = () => {
    return (
                <div className="min-h-screen flex flex-col bg-[#0D0D12]">
            <div>
              <Navbar></Navbar>
            </div>
                        <main className="pt-20 flex-1">
                <Outlet></Outlet>
                        </main>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;