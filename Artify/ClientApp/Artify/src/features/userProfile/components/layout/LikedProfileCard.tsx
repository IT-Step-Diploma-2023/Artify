import { Paper, Avatar, Typography  } from "@mui/material"
import { Box } from "@mui/system"
import CommonButton from "../../../../components/UI/CommonButton";


const LikedProfileCard = (
    { name, image, specialization, buttonText }: { name: string, image: string, specialization: string, buttonText: string }

) => {
    return <>
        <Paper elevation={0}
            style={{
                width: 'calc(100% - 12px)',
                minHeight: 260,
                borderRadius: '10px',
                backgroundImage: 'url("images/bg_subscriptions.jpg")',
                backgroundRepeat: 'no-repeat',
                backgroundPositionX: 'center',
                backgroundSize: 'auto 80px',
                paddingTop: '44px',
                boxShadow: '0px 4px 8px 0px rgba(39, 24, 70, 0.20)',
                marginBottom: '8px'
            }}>
            <Box sx={{ textAlign: 'center' }}>
                <Avatar
                    alt={name}
                    src={image} // "/images/sample_christian_kouly_profile.jpg"
                    sx={{
                        width: '72px',
                        height: '72px',
                        margin: '0 auto',
                        boxShadow: '0px 2px 4px 0px #2718464D'
                    }} />
                <Typography sx={{ fontWeight: 700, marginTop: '10px' }}>
                    {name}
                </Typography>
                <Typography sx={{ fontSize: '14px' }}>
                    {specialization}
                </Typography>
                <CommonButton color='primary' height="md" sx={{ margin: '20px auto 0 auto', width: '141px' }}>
                    {buttonText}
                </CommonButton>
            </Box>
        </Paper>
    </>
}

export default LikedProfileCard;