import { Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material";
import me from "../assets/Images/me.jpg";
import { BookmarkBorderRounded, BookmarkRounded, FavoriteBorderRounded, FavoriteRounded, ShareRounded } from "@mui/icons-material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
        action={
          <>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
            <Checkbox icon={<BookmarkBorderRounded sx={{ color: "#ffb703" }} />} checkedIcon={<BookmarkRounded sx={{ color: "#ffb703" }} />} />
          </>
        }></CardHeader>
      <CardMedia component="img" alt="Image" image={me}></CardMedia>
      <CardContent>
        <Typography variant="body" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions>
        <Checkbox icon={<FavoriteBorderRounded color="error" />} checkedIcon={<FavoriteRounded color="error" />} />
        <IconButton>
          <ShareRounded color="success" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
