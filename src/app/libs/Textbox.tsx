import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Box, TextField, TextFieldProps, Tooltip, Typography } from '@mui/material';
import { ReactNode } from 'react';

type TextBoxProps = {
  label: string;
  errorMsg?: string;
  title?: ReactNode;
} & TextFieldProps;

function TextBox({ label, errorMsg, title, ...props }: TextBoxProps) {
  return (
    <Box display="flex" flexDirection="column">
      <Typography gutterBottom component={"label"} variant="body1" fontWeight="500" htmlFor={label}>
        {label}

        {title &&
          <Tooltip
            title={title}
            placement="right"
            arrow
          >
            <InfoOutlinedIcon sx={{ fontSize: '14px', mr: 0.5, position: 'relative', bottom: '6px' }} />
          </Tooltip>
        }
      </Typography>

      <TextField error={!!errorMsg} sx={{ m: 0 }} id={label} name={label} {...props} />
      
      <Typography variant="body2" color="error" sx={{
        height: errorMsg ? '20px' : 0,
        opacity: errorMsg ? 1 : 0,
        transition: 'all 0.3s ease',
        overflow: 'hidden',
      }}>
        {errorMsg}
      </Typography>
    </Box>
  );
}

export default TextBox;