import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  render() {
    return (
      <>
        <div className="my-3 mx-3"> 
        <NewsItems />
        </div>
      </>
    );
  }
}

export default News;
