import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { yellow, blueGrey } from "@mui/material/colors";
import { Link } from "react-router-dom";

const color = yellow[50];
const backgroundColor = blueGrey["900"];

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
	"& .MuiBadge-badge": {
		right: -4,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: "0 4px",
	},
}));
const StyledListItem = styled("li")(({ theme }) => ({
	color: "white",
	margin: "8px 0",
}));
const pages = [
	{ label: "Home", to: "/" },
	{ label: "Nike", to: "/products/nike" },
	{ label: "Adidas", to: "/products/adidas" },
	{ label: "Blog", to: "/blog" },
  ];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  
  export const Navbar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
	  null
	);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
	  null
	);
  
	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
	  setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
	  setAnchorElUser(event.currentTarget);
	};
  
	const handleCloseNavMenu = () => {
	  setAnchorElNav(null);
	};
  
	const handleCloseUserMenu = () => {
	  setAnchorElUser(null);
	};
  
	return (
	  <AppBar position="static" sx={{ backgroundColor }}>
		<Container className="navbar-header-menu" maxWidth="xl">
		  <Toolbar disableGutters>
			<AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
			<Typography
			  variant="h6"
			  noWrap
			  component={Link}
			  to="/"
			  sx={{
				mr: 2,
				display: { xs: "none", md: "flex" },
				fontFamily: "monospace",
				fontWeight: 700,
				letterSpacing: ".3rem",
				color: "inherit",
				textDecoration: "none",
			  }}
			>
			  LOGO
			</Typography>
  
			<Box
			  sx={{
				flexGrow: 1,
				display: { xs: "flex", md: "none" },
				marginRight: "5px",
			  }}
			>
			  <IconButton
				size="large"
				aria-label="account of current user"
				aria-controls="menu-appbar"
				aria-haspopup="true"
				onClick={handleOpenNavMenu}
				color="inherit"
			  >
				<MenuIcon />
			  </IconButton>
			  <Menu
				id="menu-appbar"
				anchorEl={anchorElNav}
				anchorOrigin={{
				  vertical: "bottom",
				  horizontal: "left",
				}}
				keepMounted
				transformOrigin={{
				  vertical: "top",
				  horizontal: "left",
				}}
				open={Boolean(anchorElNav)}
				onClose={handleCloseNavMenu}
				sx={{
				  display: { xs: "block", md: "none" },
				}}
			  >
				{pages.map((page) => (
				  <MenuItem key={page.label} onClick={handleCloseNavMenu}>
					<Link
					  to={page.to}
					  style={{
						textDecoration: "none",
						color: "inherit",
					  }}
					>
					  {page.label}
					</Link>
				  </MenuItem>
				))}
				<MenuItem>
				  <IconButton aria-label="cart">
					<StyledBadge badgeContent={4} color="secondary">
					  <ShoppingCartIcon />
					</StyledBadge>
				  </IconButton>
				</MenuItem>
			  </Menu>
			</Box>
  
			<AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
			<Typography
			  variant="h5"
			  noWrap
			  component={Link}
			  to=""
			  sx={{
				mr: 2,
				display: { xs: "flex", md: "none" },
				flexGrow: 1,
				fontFamily: "monospace",
				fontWeight: 700,
				letterSpacing: ".3rem",
				color: "inherit",
				textDecoration: "none",
			  }}
			>
			  LOGO
			</Typography>
			<Box
  component="ul"
  sx={{
    flexGrow: 1,
    display: { xs: "none", md: "flex" },
    listStyle: "none",
    mr: 1,
  }}
>
  {pages.map((page) => (
    <StyledListItem
      key={page.label}
      onClick={handleCloseNavMenu}
      sx={{ my: 2 }}
    >
      <Typography
        variant="body1"
        component={Link}
        to={page.to.toLowerCase()}
        sx={{ textDecoration: "none", color: "white", px: 2 }}
      >
        {page.label}
      </Typography>
    </StyledListItem>
  ))}
</Box>
			<Box sx={{ flexGrow: 0 }}>
			  <IconButton aria-label="cart" sx={{ color }}>
				<StyledBadge badgeContent={4} color="secondary">
				  <ShoppingCartIcon />
				</StyledBadge>
			  </IconButton>
			  <Tooltip title="Open settings">
				<IconButton onClick={handleOpenUserMenu} sx={{ px: 3 }}>
				  <Avatar
					alt="Remy Sharp"
					src="/static/images/avatar/2.jpg"
				  />
				</IconButton>
			  </Tooltip>
			  <Menu
				sx={{ mt: "45px" }}
				id="menu-appbar"
				anchorEl={anchorElUser}
				anchorOrigin={{
				  vertical: "top",
				  horizontal: "right",
				}}
				keepMounted
				transformOrigin={{
				  vertical: "top",
				  horizontal: "right",
				}}
				open={Boolean(anchorElUser)}
				onClose={handleCloseUserMenu}
			  >
				{settings.map((setting) => (
				  <MenuItem
					key={setting}
					onClick={handleCloseUserMenu}
				  >
					<Typography textAlign="center">{setting}</Typography>
				  </MenuItem>
				))}
			  </Menu>
			</Box>
		  </Toolbar>
		</Container>
	  </AppBar>
	);
  };