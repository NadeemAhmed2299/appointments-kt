import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

interface SatisfactionRating {
    label: string;
    value: string;
    change: string;
    danger?: boolean;
}

interface SatisfactoryCardProps {
    satisfactionRatings: SatisfactionRating[];
    gridValue: number;
    bgColor: string;
    singleContent?: boolean
}

const SatisfactoryCard: React.FC<SatisfactoryCardProps> = ({ satisfactionRatings, gridValue, bgColor, singleContent = false }) => {
    return (
        <Grid container spacing={1} sx={{ marginBottom: '20px' }}>
            {satisfactionRatings.map((rating, idx) => (
                <Grid size={{ xs: 12, sm: gridValue, md: gridValue }} key={idx}>
                    <Box
                        p={1}                        
                        bgcolor={bgColor}
                        border={'1px solid'}
                        borderColor={`${singleContent?'success.main':'info.main'}`}
                        sx={{ borderRadius: '12px'}}
                    >
                        {singleContent ? (
                            <Typography fontWeight="600" fontSize={14} color='success.main'>
                                {rating.label} {rating.value} {rating.change}
                            </Typography>
                        ) : (
                            <>
                                <Typography fontSize={12}>{rating.label}</Typography>
                                <Typography fontWeight="bold" fontSize={14}>{rating.value}</Typography>
                                <Typography
                                    variant="caption"
                                    fontSize={10}
                                    color={rating.danger ? 'error.main' : 'success.main'}
                                >
                                    {rating.change}
                                </Typography>
                            </>
                        )}


                    </Box>
                </Grid>
            ))}
        </Grid>
    )
}

export default SatisfactoryCard
