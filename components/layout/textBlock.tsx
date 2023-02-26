import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


export default function TextBlock(props: any) {
    const { icon, content, title, minHeight } = props
    return (
        <Grid container item xs={12} columnSpacing={1} minHeight={minHeight}>
            <Grid item xs={2}>
                <img src={icon} />
            </Grid>
            <Grid item xs={10}>
                <Typography variant="h4" fontWeight={700}>{title}</Typography>
                <Typography variant="body1">{content}</Typography>
            </Grid>
        </Grid>
    )
}