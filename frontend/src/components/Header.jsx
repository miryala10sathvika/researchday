"use client";

import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const logo = "/assets/logo.jpg";

export default function Header({ user = null }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const pathname = usePathname(); // Initialize usepathname
  const [menuItems, setMenuItems] = useState([]);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleMobileSubmenu = (index) => {
    setOpenSubmenu((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    if (user) {
      setMenuItems([
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        {
          label: "Organization",
          href: "/organization",
        },
        { label: "Schedule", href: "/schedule" },
        { label: "Application", href: "/applications" },
        // { label: "Attendee Registration", href: "/attendee" },
        { label: "Logout", href: "/api/logout" },
      ]);
    } else {
      setMenuItems([
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        {
          label: "Organization",
          href: "/organization",
        },
        { label: "Schedule", href: "/schedule" },
        { label: "Login", href: "/api/login" },
      ]);
    }
  }, [user]);

  return (
    <AppBar
      position="absolute"
      sx={{
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        backgroundColor: "white",
        color: "black",
        zIndex: 999,
        height: 95,
      }}
    >
      <Toolbar>
        {/* Logo */}
        <Box
          display="flex"
          alignItems="center"
          sx={{ ml: { xs: 0, md: 2 }, pl: { xs: 0, md: 2 }, mt: 0.75 }}
          p={1}
        >
          <Image src={logo} width={150} height={80} alt="IIITH Logo" />
          <Typography
            variant="h5"
            component="h1"
            sx={{ ml: 2, fontWeight: "bold" }}
            display={{ xs: "none", lg: "block" }}
          >
            IIITH Research Fest
          </Typography>
        </Box>

        {/* Desktop Menu */}
        <Box
          flexGrow={1}
          display={{ xs: "none", md: "flex" }}
          justifyContent="flex-end"
          mr={4}
          zIndex={999}
          gap={2}
        >
          {menuItems.map((item, index) => (
            <Box key={index}>
              {item.submenu ? (
                <Box>
                  <Button
                    color="inherit"
                    onClick={handleMenuOpen}
                    sx={{ fontWeight: "bold" }}
                  >
                    {item.label}
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <MenuItem key={subIndex} onClick={handleMenuClose}>
                        <Link href={subItem.href} passHref prefetch={false}>
                          <Button>
                            <Typography>{subItem.label}</Typography>
                          </Button>
                        </Link>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) : (
                <Link href={item.href} passHref prefetch={false}>
                  <Button
                    color="inherit"
                    sx={{
                      fontWeight: "bold",
                      backgroundColor:
                        pathname === item.href
                          ? "var(--theme-bg-color)"
                          : "transparent",
                      color: pathname === item.href ? "white" : "black",
                      borderRadius: { xs: "0px", md: "4px" },
                    }}
                  >
                    <Typography>{item.label}</Typography>
                  </Button>
                </Link>
              )}
            </Box>
          ))}
        </Box>

        {/* Mobile Menu Icon */}
        <Box
          display={{ xs: "flex", md: "none" }}
          ml={"auto"}
          zIndex={999}
          mr={2}
        >
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            sx={{
              backgroundColor: mobileMenuOpen ? "grey" : "transparent",
              borderRadius: "50%",
              padding: 1, // Add padding to ensure the circle is properly sized
              transition: "background-color 0.3s ease", // Smooth transition for bg color
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            backgroundColor: "white",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            position: "absolute",
            top: 90,
            right: 0,
            width: "100%",
            zIndex: 999,
          }}
        >
          {menuItems.map((item, index) => (
            <Box key={index} sx={{ textAlign: "center" }}>
              {item.submenu ? (
                <Box>
                  <Button
                    color="inherit"
                    fullWidth
                    onClick={() => toggleMobileSubmenu(index)}
                    endIcon={
                      openSubmenu === index ? <ExpandLess /> : <ExpandMore />
                    }
                    sx={{ fontWeight: "bold", padding: 1.3 }}
                  >
                    {item.label}
                  </Button>
                  <Collapse
                    in={openSubmenu === index}
                    timeout="auto"
                    unmountOnExit
                  >
                    <Box
                      pl={2}
                      sx={{ backgroundColor: "#efeded", padding: "8px 0" }}
                    >
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          passHref
                          prefetch={false}
                        >
                          <Button
                            color="inherit"
                            fullWidth
                            sx={{
                              padding: 1.3,
                              backgroundColor:
                                pathname === item.href
                                  ? "var(--theme-bg-color)"
                                  : "transparent",
                              color: pathname === item.href ? "white" : "black",
                              borderRadius: { xs: "0px", md: "4px" },
                            }}
                          >
                            <Typography>{subItem.label}</Typography>
                          </Button>
                        </Link>
                      ))}
                    </Box>
                  </Collapse>
                </Box>
              ) : (
                <Link href={item.href} passHref prefetch={false}>
                  <Button
                    color="inherit"
                    passHref
                    sx={{
                      fontWeight: "bold",
                      padding: 1.3,
                      backgroundColor:
                        pathname === item.href
                          ? "var(--theme-bg-color)"
                          : "transparent",
                      color: pathname === item.href ? "white" : "black",
                      borderRadius: { xs: "0px", md: "4px" },
                    }}
                    fullWidth
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Typography>{item.label}</Typography>
                  </Button>
                </Link>
              )}
            </Box>
          ))}
        </Box>
      )}
    </AppBar>
  );
}
