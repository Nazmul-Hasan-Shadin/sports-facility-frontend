import React from 'react';
import { Outlet } from 'react-router-dom';
import App from '../../App';
import TopNavbar from '../ui/TopNavbar';
import { ConfigProvider } from 'antd';
import Navbar from '../ui/Navbar';

const MainLayout = () => {
    return (
        <div>
               <TopNavbar/>
               <ConfigProvider theme={{
        components:{
          Menu:{
            itemSelectedBg:"#00725A"
          }
        }
      }}>
        <Navbar />
      </ConfigProvider>
       

         <Outlet/>
        </div>
    );
};

export default MainLayout;