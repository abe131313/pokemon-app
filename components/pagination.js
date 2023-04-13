import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function PaginationComp({ items, pageSize, currentPage, onPageChange }) {
  const [page, setPage] = React.useState(1);
//   const pagesCount = Math.ceil(items / pageSize);
//   if (pagesCount === 1) return null;
//   const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
//   console.log(pages);

//   const onPageChange = (event, value) => {
//     setPage(value);
//   };

  return (
    <Stack spacing={2} my={2}>
      {/* <Typography variant="h6">Page: {page}</Typography> */}
      <Pagination count={8} page={currentPage} onChange={onPageChange} />
    </Stack>
  );
}

export default PaginationComp;
