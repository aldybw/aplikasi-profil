import React from "react";

import Header from "components/Header";
import ProfileContainer from "components/ProfileContainer";
import StoryInformation from "components/StoryInformation";
import Footer from "components/Footer";

export default function ProfilePage() {
  return (
    <>
      <Header />

      <main>
        <ProfileContainer />

        <StoryInformation />
      </main>

      <Footer />
    </>
  );
}
