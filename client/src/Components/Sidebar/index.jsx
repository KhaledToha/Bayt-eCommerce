/* eslint-disable react/prop-types */
import React from 'react';
import {
  Box,
  Divider,
  Drawer,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  IconButton,
  Hidden,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const SideBar = ({ category, sort, setCategory, setSort }) => {

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* Mobile drawer */}
      <Hidden mdUp implementation="css" >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ ml: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }} // Better open performance on mobile.
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 5
          }}
        >
          {/* Drawer content */}
          <FormControl sx={{ margin: 5}}>
            <Box marginY={3}>
              <FormLabel id="category">Category</FormLabel>
              <Divider sx={{ marginRight: '3vw' }} />
              <RadioGroup
                aria-labelledby="category"
                name="category"
                value={category}
                onChange={handleCategoryChange}
              >
                <FormControlLabel value="all" control={<Radio />} label="All" />
                <FormControlLabel
                  value="men clothing"
                  control={<Radio />}
                  label="Men Clothing"
                />
                <FormControlLabel
                  value="women clothing"
                  control={<Radio />}
                  label="Women Clothing"
                />
                <FormControlLabel
                  value="jewelery"
                  control={<Radio />}
                  label="Jewelery"
                />
                <FormControlLabel
                  value="electronics"
                  control={<Radio />}
                  label="Electronics"
                />
                <FormControlLabel
                  value="plants"
                  control={<Radio />}
                  label="Plants"
                />
              </RadioGroup>
            </Box>
            <FormLabel id="sort">Sort By</FormLabel>
            <Divider sx={{ marginRight: '3vw' }} />
            <RadioGroup
              aria-labelledby="sort"
              name="sort"
              value={sort}
              onChange={handleSortChange}
            >
              <FormControlLabel value="id" control={<Radio />} label="Latest" />
              <FormControlLabel value="name" control={<Radio />} label="Name" />
              <FormControlLabel value="price" control={<Radio />} label="Price" />
            </RadioGroup>
          </FormControl>
        </Drawer>
      </Hidden>

      {/* Desktop drawer */}
      <Hidden smDown implementation="css">
        <Drawer
          sx={{
            width: 320,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              padding: '1rem',
              width: 320,
              boxSizing: 'border-box',
              position: 'fixed',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          {/* Drawer content */}
          <FormControl sx={{ margin: 5}}>
            <Box marginY={3}>
              <FormLabel id="category">Category</FormLabel>
              <Divider sx={{ marginRight: '3vw' }} />
              <RadioGroup
                aria-labelledby="category"
                name="category"
                value={category}
                onChange={handleCategoryChange}
              >
                <FormControlLabel value="all" control={<Radio />} label="All" />
                <FormControlLabel
                  value="men clothing"
                  control={<Radio />}
                  label="Men Clothing"
                />
                <FormControlLabel
                  value="women clothing"
                  control={<Radio />}
                  label="Women Clothing"
                />
                <FormControlLabel
                  value="jewelery"
                  control={<Radio />}
                  label="Jewelery"
                />
                <FormControlLabel
                  value="electronics"
                  control={<Radio />}
                  label="Electronics"
                />
                <FormControlLabel
                  value="plants"
                  control={<Radio />}
                  label="Plants"
                />
              </RadioGroup>
            </Box>
            <FormLabel id="sort">Sort By</FormLabel>
            <Divider sx={{ marginRight: '3vw' }} />
            <RadioGroup
              aria-labelledby="sort"
              name="sort"
              value={sort}
              onChange={handleSortChange}
            >
              <FormControlLabel value="id" control={<Radio />} label="Latest" />
              <FormControlLabel value="name" control={<Radio />} label="Name" />
              <FormControlLabel value="price" control={<Radio />} label="Price" />
            </RadioGroup>
          </FormControl>
        </Drawer>
      </Hidden>
    </>
  );
};

export default SideBar;
