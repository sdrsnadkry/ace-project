import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Loader(){

  return  <SkeletonTheme baseColor="#aab9b9" highlightColor="white">
  <div className="grid grid-cols-3 gap-5">
    <div>
      <Skeleton style={{ height: 300 }} />
    </div>
    <div>
      <Skeleton style={{ height: 300 }} />
    </div>
    <div>
      <Skeleton style={{ height: 300 }} />
    </div>
    <div>
      <Skeleton style={{ height: 300 }} />
    </div>
    <div>
      <Skeleton style={{ height: 300 }} />
    </div>
    <div>
      <Skeleton style={{ height: 300 }} />
    </div>
    <div>
      <Skeleton style={{ height: 300 }} />
    </div>
    <div>
      <Skeleton style={{ height: 300 }} />
    </div>
    <div>
      <Skeleton style={{ height: 300 }} />
    </div>
  </div>
</SkeletonTheme>
}

export default Loader