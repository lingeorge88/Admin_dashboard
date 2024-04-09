import React from 'react';
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
    useTheme,
  } from "@mui/material";
  import {
    SettingsOutlined,
    ChevronLeft,
    ChevronRightOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    Groups2Outlined,
    ReceiptLongOutlined,
    PublicOutlined,
    PointOfSaleOutlined,
    TodayOutlined,
    CalendarMonthOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
    PieChartOutlined,
    TroubleshootOutlined,
  } from "@mui/icons-material";
  import { useEffect, useState } from "react";
  import { useLocation, useNavigate } from "react-router-dom";
  import FlexBetween from "./FlexBetween";
  import profileImage from "assets/profile.webp";

const navItems = [
    {
        text: "Dashboard",
        icon: <HomeOutlined />,
      },
      {
        text: "Client Facing",
        icon: null,
      },
      {
        text: "Products",
        icon: <ShoppingCartOutlined />,
      },
      {
        text: "Customers",
        icon: <Groups2Outlined />,
      },
      {
        text: "Transactions",
        icon: <ReceiptLongOutlined />,
      },
      {
        text: "Geography",
        icon: <PublicOutlined />,
      },
      {
        text: "Sales",
        icon: null,
      },
      {
        text: "Overview",
        icon: <PointOfSaleOutlined />,
      },
      {
        text: "Daily",
        icon: <TodayOutlined />,
      },
      {
        text: "Monthly",
        icon: <CalendarMonthOutlined />,
      },
      {
        text: "Breakdown",
        icon: <PieChartOutlined />,
      },
      {
        text: "Management",
        icon: null,
      },
      {
        text: "Admin",
        icon: <AdminPanelSettingsOutlined />,
      },
      {
        text: "Performance",
        icon: <TrendingUpOutlined />,
      },    
];

const pastelColors = [
  '#64B5F6', // Blue
  '#81C784', // Green
  '#BA68C8', // Purple
  '#E57373', // Red
  '#FFD180', // Orange
  '#F48FB1', //  Pink
];
const Sidebar = ({
    user,
    drawerWidth,
    isSidebarOpen,
    setIsSidebarOpen,
    isNonMobile
}) => {
    const { pathname } = useLocation();
    const [ active, setActive ] = useState("");
    const navigate = useNavigate();
    const theme = useTheme();

    useEffect(() => {
        setActive(pathname.substring(1));
    }, [pathname])
    return (
      <Box component="nav">
        {isSidebarOpen && (
          <Drawer
            open={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            variant="persistent"
            anchor="left"
            sx={{
              width: drawerWidth,
              "& .MuiDrawer-paper": {
                color: theme.palette.secondary[200],
                backgroundColor: theme.palette.background.alt,
                boxSixing: "border-box",
                borderWidth: isNonMobile ? 0 : "2px",
                width: drawerWidth,
              },
            }}
          >
            <Box width="100%" bottom="2rem">
              <Box m="1.5rem 2rem 2rem 3rem">
                <FlexBetween color={theme.palette.secondary.main}>
                  <Box display="flex" alignItems="center" gap="0.5rem">
                    <Typography variant="h4" fontWeight="bold" > 
                      <TroubleshootOutlined sx={{mr: "0.5rem"}}/>
                      TradeSight
                    </Typography>
                  </Box>
                  {!isNonMobile && (
                    <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                      <ChevronLeft />
                    </IconButton>
                  )}
                </FlexBetween>
              </Box>
              <List>
                {navItems.map(({ text, icon }, index) => {
                  const isLastItem = index === navItems.length - 1;
                  const itemColor = pastelColors[index % pastelColors.length];
                  if (!icon) {
                    return (
                      <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                        {text}
                      </Typography>
                    );
                  }
                  const lcText = text.toLowerCase();
  
                  return (
                    <ListItem key={text} disablePadding sx={{
                      mb: isLastItem ? '80px' : '0', 
                    }}>
                      <ListItemButton
                        onClick={() => {
                          navigate(`/${lcText}`);
                          setActive(lcText);
                        }}
                        sx={{
                          backgroundColor:
                            active === lcText
                              ? theme.palette.secondary[300]
                              : "transparent",
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[100],
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            ml: "2rem",
                            color: itemColor,
                          }}
                        >
                          {icon}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                        {active === lcText && (
                          <ChevronRightOutlined sx={{ ml: "auto" }} />
                        )}
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </Box>
  
            <Box position="relative" bottom="2rem">
              <Divider width="100%"/>
              <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
                <Box
                  component="img"
                  alt="profile"
                  src={profileImage}
                  height="40px"
                  width="40px"
                  borderRadius="50%"
                  sx={{ objectFit: "cover" }}
                />
                <Box textAlign="left">
                  <Typography
                    fontWeight="bold"
                    fontSize="0.9rem"
                    sx={{ color: theme.palette.secondary[100] }}
                  >
                    {user.name}
                  </Typography>
                  <Typography
                    fontSize="0.8rem"
                    sx={{ color: theme.palette.secondary[200] }}
                  >
                    {user.occupation}
                  </Typography>
                </Box>
                <SettingsOutlined
                  sx={{
                    color: theme.palette.secondary[300],
                    fontSize: "25px ",
                  }}
                />
              </FlexBetween>
            </Box>
          </Drawer>
        )}
      </Box>
    );
}

export default Sidebar