import { Box, Grid, Skeleton } from '@mui/material'

const ProductCardSkeleton = () => {

    return <Grid item md={4} sm={12}>
        <Box borderRadius={3} bgcolor="white" paddingBottom={3} overflow="hidden">
            <Skeleton variant='rectangular' width="100%" height={240} sx={{ marginBottom: '1rem' }}/>
            <Skeleton variant='rounded' width="60%" height={18} sx={{ marginBottom: '1rem' }}/>
            <Skeleton variant='rounded' width="95%" height={12} sx={{ marginBottom: '0.5rem' }}/>
            <Skeleton variant='rounded' width="95%" height={12} sx={{ marginBottom: '1.5rem' }}/>
        </Box>

    </Grid>
}

export default ProductCardSkeleton