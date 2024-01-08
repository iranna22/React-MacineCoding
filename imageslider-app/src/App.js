import React from "react";
import ImageSlider from "./ImageSlider";
//import images from "./yourImagesArray"; // Import your images array

const App = () => {
  const images = [
    {
      image_url:
        "https://media.istockphoto.com/id/1458698228/photo/selective-focus-wood-table-top-on-blur-kitchen-counter-background.webp?b=1&s=170667a&w=0&k=20&c=gFqmi0u-oKGWor8ijZaX_1_gv78cHoeBJ1Lvpd6PGXQ=",
      caption: "Image 1",
    },
    {
      image_url:
        "https://media.istockphoto.com/id/1457900577/photo/top-view-of-conveyor-belts-transporting-boxes-in-a-large-warehouse-night-time.webp?b=1&s=170667a&w=0&k=20&c=4vdqld7aZSjRdcs3szCmV8C77K9LN7EgHcrgC5pzly4=",
      caption: "Image 2",
    },
    {
      image_url:
        "https://media.istockphoto.com/id/1414910820/photo/product-development-launching-analysis-and-market-validation-mvp-minimum-viable-product.webp?b=1&s=170667a&w=0&k=20&c=xBrIw3SxgcUWZUYwn4KI7B8cAvX6ePLEAdQIulzMSW0=",
      caption: "Image 3",
    },
    {
      image_url:
        "https://media.istockphoto.com/id/1437990859/photo/abandoned-shopping-cart-with-groceries.webp?b=1&s=170667a&w=0&k=20&c=XvePluej28Yq1fdv4qeQPxA91b-SJbrjuTqM_P9RlDc=",
      caption: "Image 4",
    },
    {
      image_url:
        "https://media.istockphoto.com/id/1440668597/photo/distribution-warehouse-with-cardboard-boxes-on-the-racks-and-on-the-floor.webp?b=1&s=170667a&w=0&k=20&c=S8ZDzwIS0sWgMoiccs5tNLxyOCKau-4f2Zq4vTCVjRs=",
      caption: "Image 5",
    },
    {
      image_url:
        "https://media.istockphoto.com/id/1451079337/photo/customer-review-good-rating-concept-hand-pressing-user-and-five-star-icon-on-visual-screen.webp?b=1&s=170667a&w=0&k=20&c=ZGVAvXR0pccsHA3eEF4cTiwpkMoenq_U4sX-lFzDP08=",
      caption: "Image 6",
    },
  ];
  return (
    <div>
      <h1>Responsive Image Slider</h1>
      <ImageSlider images={images} />
    </div>
  );
};

export default App;
