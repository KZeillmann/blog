import DemoWrapper from "./DemoWrapper";

const MediaStream = () => {
  const onGetStarted = () => {
    navigator.mediaDevices.getUserMedia({ video: true }).then(
      (mediaStream) => {
        console.log(mediaStream);
        console.log(mediaStream.getTracks());
        console.log(mediaStream.getVideoTracks());
      },
      (error) => {
        console.log(error);
      }
    );
  };
  return (
    <DemoWrapper id="media-stream" title="Media Stream">
      <p>The MediaStream API provides support for streaming audio and video.</p>
      <button onClick={onGetStarted}>Get Started</button>
      <p>TODO: Implement</p>
    </DemoWrapper>
  );
};

export default MediaStream;
