import Link from '@mui/material/Link';
import { Box, Container, Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import MediumIcon from '@mui/icons-material/Feed';
import DiscordIcon from 'components/Layout/Navbar/icons/Discord';
import FacebookIcon from '@mui/icons-material/FacebookRounded';


function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" mt={1}>
            {'Copyright © '}
            <Link href="https://nftdavao.xyz/">Merkado&nbsp;</Link>
            {new Date().getFullYear()}
        </Typography>
    );
}

export default function Footer() {

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 4, sm: 8 },
                py: { xs: 8, sm: 10 },
                textAlign: { sm: 'center', md: 'left' },
            }}
        >

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    pt: { xs: 4, sm: 8 },
                    width: '100%',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <div>

                    <Copyright />
                </div>
                <Stack
                    direction="row"
                    justifyContent="left"
                    spacing={1}
                    useFlexGap
                    sx={{
                        color: 'text.secondary',
                    }}
                >
                    <IconButton
                        color="inherit"
                        href="https://t.me/+stHCP7ZCoKcyNWY1"
                        aria-label="Telegram"
                        sx={{ alignSelf: 'center' }}
                    >
                        <TelegramIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        href="https://x.com/waste2earn"
                        aria-label="X"
                        sx={{ alignSelf: 'center' }}
                    >
                        <TwitterIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        href="https://medium.com/@waste2earn.io"
                        aria-label="Medium"
                        sx={{ alignSelf: 'center' }}
                    >
                        <MediumIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        href="https://discord.gg/GbnNzjQe"
                        aria-label="Discord"
                        sx={{ alignSelf: 'center' }}
                    >
                        <DiscordIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        href="https://facebook.com/mhokzone/"
                        aria-label=""
                        sx={{ alignSelf: 'center' }}
                    >
                        < FacebookIcon />
                    </IconButton>
                </Stack>
            </Box>
        </Container>
    );
}