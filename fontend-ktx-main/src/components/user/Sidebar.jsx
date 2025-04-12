import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="menu-items">
        <div className="menu-item">
          <Link to="/user">
            <i className="fas fa-home"></i>
            Trang chủ
          </Link>
        </div>
        <div className="menu-item">
          <Link to="dang-ky-noi-tru">
            <i className="fas fa-home"></i>
            Đăng ký nội trú KTX
          </Link>
        </div>
        <div className="menu-item">
          <Link to="/user/contracts">
            <i className="fas fa-file-contract"></i>
            Xem hợp đồng thuê
          </Link>
        </div>
        <div className="menu-item">
          <Link to="/user/thanh-toan-tien-phong">
            <i className="fas fa-money-bill"></i>
            Thanh toán tiền phòng
          </Link>
        </div>
        <div className="menu-item">
          <Link to="/user/thanh-toan-tien-dien">
            <i className="fas fa-bolt"></i>
            Thanh toán tiền điện
          </Link>
        </div>
        <div className="menu-item">
          <Link to="/user/thanh-toan-tien-nuoc">
            <i className="fas fa-tint"></i>
            Thanh toán tiền nước
          </Link>
        </div>
        
       
      </div>
    </div>
  );
};

export default Sidebar; 