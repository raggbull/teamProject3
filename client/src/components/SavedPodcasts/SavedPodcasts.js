import React from "react";
import "./SavedPodcasts.css";
import {Grid, Row, Col, Button} from "react-bootstrap";

const SavedPodcasts = props => (
  
  <div className="podcast">
  <h1 className="addressheader text-center">Your Saved Podcasts</h1>

  <Grid>
  <Row>
    {props.podcasts.map(podcast => (
      <Col xs={12} sm={6} md={4} key={podcast._id} className="podcastmap">
        <img src={podcast.thumbnail} alt="cover"/>
        <h3>{podcast.title}</h3>
        <p className="podcastscroll">{podcast.description}</p>
        <p>{podcast.audio_length}</p>
        <Button bsStyle="primary" href={podcast.audio}>Play</Button>
        <Button 
          bsStyle="danger" 
          className="podcastBtnSave" 
          onClick={() => props.removePodcast(podcast._id)}
        >
          Delete
        </Button>
      </Col>
    ))}
  </Row>
</Grid>
</div>
);

export default SavedPodcasts;
