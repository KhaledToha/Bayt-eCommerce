/* eslint-disable react/prop-types */
import { Grid, Box, CardMedia, CardContent, Typography, Chip } from '@mui/material'

const ProductCard = ({ product }) => (
    <Grid item md={4} sm={12} width="100%">
          <Box borderRadius={3} boxShadow={0} minWidth="95%" overflow="hidden" bgcolor="white">
            <CardMedia 
                sx={{ minWidth:'100%', height: '240px',  backgroundSize: 'contain'}}
                image={product.image_url}
                title={product.name}/>

                <CardContent>
                    <Typography fontSize={16} fontWeight="bold" component='div' marginBottom={1.5} height={20} overflow="hidden">
                        {product.name}
                    </Typography>
                    <Typography fontSize={12} height={36} overflow="hidden">
                        {product.description}
                    </Typography>
                    <Box display="flex" justifyContent="space-between" alignItems="center" marginTop={2}>
                    <Typography fontWeight="bold" color="primary" >
                        $ {product.price}
                    </Typography>
                    <Chip label={product.category} />
                    </Box>
                </CardContent>
          </Box>
        </Grid>
)

export default ProductCard