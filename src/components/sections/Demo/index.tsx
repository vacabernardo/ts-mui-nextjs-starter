import * as React from 'react';
import MuiBox from '@mui/material/Box';
import MuiTypography from '@mui/material/Typography';

export type Props = {
    type: 'DemoSection';
    title: string;
    description: string;
};

export const Demo: React.FC<Props> = (props) => {
    const { title, description } = props;

    return (
        <MuiBox sx={{ py: { xs: 6, sm: 10 } }}>
            <MuiTypography component="h2" variant="h2" color="text.primary">
                {title}
            </MuiTypography>
            <MuiTypography component="p" variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                {description}
            </MuiTypography>
        </MuiBox>
    );
};