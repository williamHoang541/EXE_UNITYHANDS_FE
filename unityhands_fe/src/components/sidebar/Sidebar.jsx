import './Sidebar.css'
import React from "react";
import { Layout, Menu } from "antd";
import { DashboardOutlined, ShoppingCartOutlined, UserOutlined, ShopOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;
function Sidebar() {
  return (
    <>
    <Sider width={250} className="sidebar">
      <div className="logo">Admin Dashboard</div>
      <Menu theme="dark" mode="inline">
        <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="products" icon={<ShopOutlined />}>
          <Link to="/products">Sản phẩm</Link>
        </Menu.Item>
        <Menu.Item key="orders" icon={<ShoppingCartOutlined />}>
          <Link to="/orders">Đơn hàng</Link>
        </Menu.Item>
        <Menu.Item key="customers" icon={<UserOutlined />}>
          <Link to="/customers">Khách hàng</Link>
        </Menu.Item>
      </Menu>
    </Sider>
    </>
  )
}

export default Sidebar