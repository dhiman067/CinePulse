
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';



const MainLayout = () => {
    return (
        <div>
            <div>
              <Navbar></Navbar>
            </div>
            <div className="pt-20">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;