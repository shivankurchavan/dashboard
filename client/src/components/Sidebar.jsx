import React from 'react'
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme
} from "@mui/material"
import {
    SettingsOutlined,
    ChevronLeft,
    ChevronRightOutlined,
    HomeOutlined,
    ShoppingCartCheckoutOutlined,
    Groups2Outlined,
    ReceiptLongOutlined,
    PublishOutlined,
    PointOfSaleOutlined,
    TodayOutlined,
    CalendarMonthOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
    PieChartOutline
} from "@mui/icons-material"
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import FlexBetween from './FlexBetween'
import profileImage from "assets/profile.jpg"

const Sidebar = ({
    drawerWidth,
    isSidebarOpen,
    setSidebarOpen,
    isNonMobile,
}) => {
    const {pathname} = useLocation();
    con
  return (
    <div>Sidebar</div>
  )
}

export default Sidebar