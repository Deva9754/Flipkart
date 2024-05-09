import { Box, Skeleton } from "@mui/material";
import "./Shimmer.css";

const ShimmerContainer = () => {
  const skeletonBox = Array.from({ length: 12 }, (v, i) => i);

  return (
    <div className="skeleton-box">
      {skeletonBox.map((index) => (
        <Box sx={{ p: 2 }}>
          <Skeleton variant="rectangular" width={210} height={118} />

          <Skeleton variant="text" width={110} />
          <Skeleton variant="text" width={180} />

          <Skeleton variant="text" width={200} />
        </Box>
      ))}
    </div>
  );
};
export default ShimmerContainer;
