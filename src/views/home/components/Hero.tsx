import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { alpha, Typography } from '@mui/material';
import Label from '../../../assets/images/merkado.png';
import TypeWriterText from './TypeWriterText';

export default function Hero() {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pt: { xs: 2, sm: 2 },
                pb: { xs: 2, sm: 2 },
            }}
        >
            <Stack spacing={3} useFlexGap sx={{ width: { xs: '100%', sm: '70%', textAlign: 'center' } }}>
                <TypeWriterText />
                <Typography
                    textAlign="center"
                    fontSize={20}
                    fontWeight={500}
                    color="#FFFFFF"
                    paddingBottom={3}
                    sx={{ alignSelf: 'center', width: { sm: '100%', md: '100%' } }}
                >
                    Whether you're a seasoned collector or new to NFTs, our marketplace
                    offers a seamless experience for buying, selling, and discovering the
                    next big thing in digital art scene. Explore, connect, and celebrate
                    Davao's creativity with Merkado NFT Davao.
                </Typography>

            </Stack>
            <Box
                id="image"
                sx={(theme) => ({
                    mt: { xs: 2, sm: 2 },
                    alignContent: 'center',
                    justifySelf: 'center',
                    height: { xs: 252, sm: 400 },
                    width: '100%',

                    backgroundSize: 'cover',
                    borderRadius: '10px',
                    outline: '1px solid',
                    outlineColor:
                        theme.palette.mode === 'light'
                            ? alpha('#BFCCD9', 0.5)
                            : alpha('#9CCCFC', 0.1),
                    boxShadow:
                        theme.palette.mode === 'light'
                            ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                            : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
                })}
            >

                <img src={Label} alt='label' width='100%' height='100%' />
            </Box>
        </Container>
    );
}