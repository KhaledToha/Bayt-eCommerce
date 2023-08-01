/* eslint-disable react/prop-types */
import { Snackbar, Alert, AlertTitle} from '@mui/material'

const ErrorAlert = ({
    open,
    message,
  }) => (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={() => open = !open}
      sx={{ width: '40%' }}
    >
      <Alert severity="error" sx={{ width: '100%' }} variant="filled">
        <AlertTitle>Error</AlertTitle>
        {message}
      </Alert>
    </Snackbar>
  );

  export default ErrorAlert