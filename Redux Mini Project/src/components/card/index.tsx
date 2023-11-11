import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import "../../App.css"


type Props = {
    Data: any,
    onClickEvt?: CallableFunction,
    cursor?: string,
}


export default function MediaCard(props: Props) {
    const { Data, cursor, onClickEvt } = props
    return (
        <div>
            <Card sx={{ minWidth: 340, maxWidth: 350, boxShadow: "0 0 15px  #00000017 ", cursor: cursor ? cursor : "auto" }}>
                <CardMedia
                    sx={{
                        height: 200,
                        backgroundSize: "contain",
                        backgroundOrigin: "content-box",
                        padding: "10px",
                    }}
                    image={Data.image}
                    title={Data.title}
                />
                <CardContent className='flex gap-3 flex-col h-full' sx={{ background: "#f5f5f5" }}>
                    <Typography gutterBottom variant="body1" className="title">
                        {Data.title}
                    </Typography>
                    <Typography variant="body2" className="discription text-gray-800" >
                        {Data.description}
                    </Typography>
                    <span>
                        <Chip label={Data.category} />
                    </span>
                    <span className="flex justify-between items-end">
                        <Rating name="half-rating-read" defaultValue={Data.rating.rate ? Data.rating.rate : 0} precision={0.1} readOnly />
                        <span className="py-1 px-3 border border-blue-500 text-blue-500 rounded-sm font-semibold" >{Data.price}</span>
                    </span>
                        <span>
                            <Button variant='contained' className='w-full' onClick={() => { onClickEvt && onClickEvt(Data) }} >Add To Cart</Button>
                        </span>
                </CardContent>
            </Card>
        </div>
    );
}