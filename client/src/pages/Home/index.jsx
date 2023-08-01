/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Grid, Pagination, Box, Typography } from '@mui/material';
import { ErrorAlert, ProductCard, ProductCardSkeleton } from '../../Components';

const HomePage = ({ category, sort }) => {
  const [page, setPage] = useState(1);



  let endpoint = `/api/products?page=${page}&category=${category}&sort=${sort}`;

  const fetchProducts = () => axios.get(endpoint).then((res) => res.data.data)

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['products', page, category, sort],
    queryFn: fetchProducts,
    keepPreviousData: true,
  });

  useEffect(() => {
    setPage(1);
   
  }, [category, sort]);


  return isLoading || isError ? (
    <>
    {isError && <ErrorAlert open={true}  message={error.response.data.message}/>}
      <Grid container spacing={2} sx={{ padding: 3}}>
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
      </Grid>
      </>
    
  ) : (
    <Box paddingX={5} paddingY={3}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginY={2}
      >
        <Typography fontSize={18} fontWeight="bold">
          Products
        </Typography>
        <Typography fontSize={12}>
          Viewed {(page - 1) * 5 + data.products.length} products | {data.count}{' '}
          total
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ height: '100%' }}>
        {data.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        paddingBottom={2}
        marginTop={5}
      >
        <Pagination
          count={Math.ceil(data.count / 5)}
          page={page}
          onChange={handlePageChange}
        />
      </Box>
    </Box>
  );
};

export default HomePage;
