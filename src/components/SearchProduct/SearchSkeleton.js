import { Box, Skeleton, Typography } from "@mui/material";

const SearchSkeleton = () => {
  const skeletonBox = Array.from({ length: 12 }, (v, i) => i);

  return (
    <div>
      SearchSkeleton
      {skeletonBox.map((index) => (
        <Box sx={{ p: 8, display: "flex" }} key={index}>
          <Skeleton variant="rectangular" width={416} height={316} />
          <Typography
            sx={{
              display: "flex",
              gap: 2,
              flexDirection: "column",
              justifyContent: "center",
              padding: 4,
              borderRadius: "8px",
            }}
          >
            <Skeleton variant="text" width={100} height={30} />
            <Skeleton variant="text" width={480} height={20} />
            <Skeleton variant="text" width={70} height={60} />

            <Skeleton variant="text" width={150} height={80} />
          </Typography>
        </Box>
      ))}
    </div>
  );
};
export default SearchSkeleton;
