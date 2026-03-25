import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";
import { ReactNode } from "react";


type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({children}: MainLayoutProps) => {
    return (
        <div>
            <Navbar/>
            <div className="">
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;
