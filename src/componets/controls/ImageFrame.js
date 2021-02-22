import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Button from "@material-ui/core/Button";
import StarBorderIcon from "@material-ui/icons/StarBorder";
// import tileData from "../controls/framedata";
import Grid from "@material-ui/core/Grid";
import Img1 from "../../Assests/frame1.jpg";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // flexWrap: 'wrap',
    justifyContent: "space-around",
    // overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imgcontainer: {
    width: 618,

    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    // transform: 'translateZ(0)',
  },
  titleBar: {
    // background:
    //   // "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
    //   // "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    //   "black"
  },
  icon: {
    color: "white",
  },
}));

export default function AdvancedGridList() {
  const classes = useStyles();
  const theme = useTheme();
  const ImageFrame = useMediaQuery(theme.breakpoints.down("xs"));
  const tileData = [
    {
      img: "https://media.vogue.in/wp-content/uploads/2020/10/0001-600x777.jpg",
      title: "Breakfast",
      cols: 3,
      featured: true,
      author: "jill111",
    },
    {
      img: "https://media.vogue.in/wp-content/uploads/2020/12/0001-600x777.jpg",
      title: "Tasty burger",
      author: "director90",
    },
    {
      img: "https://media.vogue.in/wp-content/uploads/2021/02/0001-600x777.jpg",
      title: "Camera",
      author: "Danson67",
    },
    {
      img: "https://media.vogue.in/wp-content/uploads/2021/01/0001-600x777.jpg",
      title: "Morning",
      author: "fancycrave1",
    },
    {
      img: "https://media.vogue.in/wp-content/uploads/2020/10/0001-600x777.jpg",
      title: "Hats",
      author: "Hans",
    },
    {
      img: "https://media.vogue.in/wp-content/uploads/2021/02/0001-600x777.jpg",
      title: "Honey",
      author: "fancycravel",
    },
    {
      img: "https://media.vogue.in/wp-content/uploads/2021/01/0001-600x777.jpg",
      title: "Vegetables",
      author: "jill111",
      cols: 2,
    },
    // {
    //   img: "https://media.vogue.in/wp-content/uploads/2020/07/0001-600x777.jpg",
    //   title: "Water plant",
    //   author: "BkrmadtyaKarki",
    // },
  ];

  const imageFrameMobile = (
    <div className={classes.root}>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.imgcontainer}
      >
        <GridList cellHeight={200} spacing={15}>
          {tileData.map((tile) => (
            <GridListTile
              key={tile.img}
              cols={tile.featured ? 2 : 1}
              rows={tile.featured ? 2 : 1}
            >
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar title={tile.title} titlePosition="bottom" />
            </GridListTile>
          ))}
        </GridList>
      </Grid>
    </div>
  );

  return (
    <React.Fragment>
      <div>
        {ImageFrame ? (
          imageFrameMobile
        ) : (
          <div className={classes.root}>
            <Grid
              container
              justify="center"
              alignItems="center"
              className={classes.imgcontainer}
            >
              <GridList cellHeight={320} spacing={23}>
                {tileData.map((tile) => (
                  <GridListTile
                    key={tile.img}
                    cols={tile.featured ? 2 : 1}
                    // rows={tile.featured ? 2 : 1}
                  >
                    <img src={tile.img} alt={tile.title} />
                    <GridListTileBar
                      title={tile.title}
                      titlePosition="bottom"
                      // style={{backgroundColor:'white', color:'black'}}
                    />
                  </GridListTile>
                ))}
              </GridList>
            </Grid>
          </div>
        )}
      </div>

      <div>
        <Grid container direction="row" justify="center" alignItems="center">
          <Button
            variant="contained"
            color="secondary"
            style={{ marginTop: 150, marginBottom: 15 }}
          >
            <Typography align="center">
              visit th blog for more photos
            </Typography>
          </Button>
        </Grid>
      </div>
    </React.Fragment>
  );
}
