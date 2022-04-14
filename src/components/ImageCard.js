import React from "react";
import dp from "../static/images/dp.jpg";
import aishSolo from "../static/images/aish_solo.jpg";
import withAish from "../static/images/with_aish.JPG";
import WishMessage from "./WishMessage";

const happyWishMsg = [
  "H",
  "a",
  "p",
  "p",
  "y",
  " ",
  " ",
  "B",
  "i",
  "r",
  "t",
  "h",
  "d",
  "a",
  "y",
  "",
];
export default function ImageCard() {
  return (
    <div className="image-card">
      <div className="ui card">
        <div className="content">
          <span className="user-name">Aishwarya_achar</span>
          <div className="right floated meta">Rani Since 2007</div>
          <img
            className="left floated ui avatar image"
            src={dp}
            alt="display-one"
          ></img>
        </div>

        <div className="ui slide masked reveal image img-post">
          <img
            src={withAish}
            class="visible content aish-img"
            alt="one-along-aish"
          />
          <img src={aishSolo} class="hidden content" alt="aish-solo" />
        </div>

        <div className="content">
          <span className="right floated">
            <i className="heart outline like icon"></i>
            Zillion likes
          </span>
          <span className="left floated">
            <i className="comment left floated icon"></i>
            Infinite comments
          </span>
        </div>
        <div className="wish-msg">
          <WishMessage msg={happyWishMsg}></WishMessage>
          <span>
            <i class="heart icon"></i>
          </span>
        </div>
        <div className="extra content">
          <div className="ui large transparent left icon input image-card-comments">
            <i className="heart outline icon"></i>
            <input type="text" placeholder="Add Comment..."></input>
          </div>
        </div>
      </div>
    </div>
  );
}
