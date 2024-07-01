import video from "./videos/MovingAngle.mp4";
export default function Error_video() {

  return (
    <div className="w-[100vw] h-[100vh]">

        <video width="100%" height="100%">
        <source src={video} type="video/mp4" />
       </video>
    </div>
  );
}
