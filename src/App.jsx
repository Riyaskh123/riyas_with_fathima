import Hero from "./components/Hero";
import Bride from "./components/Bride";
import Groom from "./components/Groom";
import StoryStrip from "./components/StoryStrip";
import Event from "./components/Event";
import { VideoScrollSection } from "./components/VideoScrollSection";

function App() {
  return (
    <>
      <Hero />
      <StoryStrip />
      <Groom />
      <Bride />
      <VideoScrollSection/>
      <Event />
    </>
  );
}

export default App;