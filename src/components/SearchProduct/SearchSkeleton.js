import { Box, Skeleton, Typography } from "@mui/material";

const SearchSkeleton = () => {
  const skeletonBox = Array.from({ length: 10 }, (v, i) => i);

  return (
    <div className="skeleton-box">
      {skeletonBox.map((item, index) => (
        <Box key={index} sx={{ p: 2 }}>
          <Skeleton variant="rectangular" height={118} />

          <Skeleton variant="text" width={110} />
          <Skeleton variant="text" width={180} />

          <Skeleton variant="text" width={200} />
        </Box>
      ))}
    </div>
  );
};
export default SearchSkeleton;
