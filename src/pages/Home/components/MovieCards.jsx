import React from "react";

// Components
import MovieCard from "./MovieCard";
import Title from "../../../components/Title/Title";

const MovieCards = ({ title, movieData }) => {
  return (
    <div className={`flex flex-col mt-24 first:mt-0`}>
      <Title>{title}</Title>

      <div className="grid grid-cols-2 gap-5 mt-5">
        {movieData?.map((data, index) => (
          <MovieCard data={data} key={index} />
        ))}
      </div>
    </div>
  );
};

export default MovieCards;

// -----------------------------------------------------------------------------------------------

// REACT Virtualization: TODO - Need to make page responsive by adding dynamic values.
// Currently it only supports Virtualization for particular resolution of mobile

// import React, { useState, useEffect } from "react";
// import { FixedSizeGrid as Grid } from "react-window";

// // Components
// import MovieCard from "./MovieCard";
// import Title from "../../../components/Title/Title";

// const MovieCards = ({ title, movieData }) => {
//   const [totalWidth, setTotalWidth] = useState(400);

//   // Define the number of columns in the grid
//   const columnCount = 2;

//   // Calculate the number of rows based on the number of items and columns
//   const rowCount = Math.ceil(movieData.length / columnCount);

//   // Calculate the total width of the grid
//   // const totalWidth = 400;

//   // Calculate the gap between each card
//   const cardGap = 10; // Adjust this value according to your design

//   // Calculate the width of each column
//   const columnWidth = totalWidth / columnCount;

//   // Function to render individual cells in the grid
//   const Cell = ({ columnIndex, rowIndex, style }) => {
//     // Calculate the index of the item in the movieData array
//     const index = rowIndex * columnCount + columnIndex;

//     // Check if the index is within the bounds of the movieData array
//     if (index < movieData.length) {
//       // Calculate the position of the card
//       const left = columnIndex * columnWidth;
//       const top = rowIndex * 300; // Assuming each card has a height of 300px

//       // Combine the original style with the card position
//       const cellStyle = {
//         ...style,
//         left,
//         top,
//       };

//       // Render the MovieCard component with the corresponding data
//       return (
//         <div style={cellStyle}>
//           <div style={{ margin: cardGap }}>
//             <MovieCard data={movieData[index]} />
//           </div>
//         </div>
//       );
//     } else {
//       return null;
//     }
//   };

//   // Function to update totalWidth based on screen width
//   const updateTotalWidth = () => {
//     setTotalWidth(window.innerWidth - 20); // Adjust 20 for margin/padding
//   };

//   useEffect(() => {
//     updateTotalWidth();
//     window.addEventListener("resize", updateTotalWidth);

//     return () => {
//       window.removeEventListener("resize", updateTotalWidth);
//     };
//   }, []);

//   return (
//     <div className="flex flex-col mt-24 first:mt-0">
//       <Title>{title}</Title>

//       <div className="mt-5">
//         {/* Render the grid */}
//         <Grid
//           columnCount={columnCount}
//           columnWidth={columnWidth}
//           height={900} // Adjust the height of the grid [virtualized window]
//           rowCount={rowCount} // total data per year / 2[column count]
//           rowHeight={300} // Adjust the height of each row
//           width={totalWidth} // Specify the total width of the grid
//         >
//           {Cell}
//         </Grid>
//       </div>
//     </div>
//   );
// };

// export default MovieCards;
