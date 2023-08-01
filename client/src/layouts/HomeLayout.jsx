import { useState } from 'react';
import { Box } from '@mui/material';
import { SideBar } from '../Components';
import HomePage from '../pages/Home';

const HomeLayout = () => {
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('id');

  return (
    <Box display="flex">
      <SideBar category={category} sort={sort} setCategory={setCategory} setSort={setSort}/>
      <HomePage category={category} sort={sort}/>
    </Box>
  );
};

export default HomeLayout;
