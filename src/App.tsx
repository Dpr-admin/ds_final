import { ThemeProvider } from "@emotion/react";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import router from "./Routes/Routes";
import { theme } from "./Theme";
import { Box } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { Global, css } from "@emotion/react";
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CustomCursor from "./Components/CustomCursor ";
import { useState } from "react";
import Preloader from "./Components/Preloader";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  if (isLoading) {
    return (
      <Preloader
        videoSrc="https://dprstorage.b-cdn.net/dezignshark/dsrpreloder.mp4"
        onEnd={() => setIsLoading(false)}
      />
    );
  }

  return (
    <Box className="App">
      <Global
        styles={css`
          ::-webkit-scrollbar {
            width: 4px;
          }
          ::-webkit-scrollbar-thumb {
            background-color: ${theme.palette.primary.main};
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background-color: ${theme.palette.primary.dark};
          }
          ::-webkit-scrollbar-track {
            background-color: #f1f1f1;
          }
        `}
      />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <CustomCursor />
        </QueryClientProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ThemeProvider>
    </Box>
  );
}

export default App;











// import { RouterProvider } from "react-router-dom";
// import router from "./Routes"; // Import the updated router
// import { Box } from "@mui/material";
// import { ThemeProvider } from "@emotion/react";
// import { ToastContainer } from "react-toastify";
// import { QueryClient, QueryClientProvider } from "react-query";
// import 'react-toastify/dist/ReactToastify.css'; // Toast notifications for user feedback
// import { theme } from "./Theme";

// function App({ config }: { config: { clientId: string; theme?: string } }) {
//   const queryClient = new QueryClient({
//     defaultOptions: {
//       queries: {
//         refetchOnWindowFocus: false,
//       },
//     },
//   });

//   return (
//     <Box className="App">
//       <ThemeProvider theme={theme}>
//         <QueryClientProvider client={queryClient}>
//           <RouterProvider router={router} />
//         </QueryClientProvider>
//         <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
//       </ThemeProvider>
//     </Box>
//   );
// }

// export default App;
