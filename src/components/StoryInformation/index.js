import MyStory from "components/MyStory";
import PersonalInformation from "components/PersonalInformation";
import React from "react";

import "./index.css";

export default function StoryInformation() {
  return (
    <div className="story-information">
      <MyStory />
      <PersonalInformation />
    </div>
  );
}
