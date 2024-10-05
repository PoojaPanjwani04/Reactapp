// import React from 'react';
// import styled from "styled-components";

// const Foot = styled.footer`
//   background-color: black;
//   color: white;
//   position: fixed;
//   bottom: 0;
//   width: 100%;
//   text-align: center;
//   height:60px;
// `;

// const Footer = () => {
//   return (
//     <Foot>
//       Copyright &copy; 2023 Pooja
//     </Foot>
//   );
// };

// export default Footer;


// import React from 'react';
// import styled from "styled-components";

// const Foot = styled.footer`
//   background-color: black;
//   color: white;
//   width: 100%;
//   text-align: center;
//   padding: 20px;
// `;

// const FooterContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 10px;
  
//   @media (min-width: 768px) {
//     flex-direction: row;
//     justify-content: space-between;
//   }
// `;

// const ContactDetails = styled.div`
//   margin: 10px 0;

//   p {
//     margin: 5px 0;
//     line-height: 1.5;
//   }
// `;

// const MapContainer = styled.div`
//   width: 300px;
//   height: 200px;

//   iframe {
//     width: 100%;
//     height: 100%;
//     border: 0;
//   }
// `;

// const Footer = () => {
//   return (
//     <Foot>
//       <FooterContent>
//         <ContactDetails>
//           <p><strong>Address:</strong> 1234 Main St, Mumbai, Maharashtra, 400001</p>
//           <p><strong>Phone:</strong> +91 9876543210</p>
//           <p><strong>Email:</strong> contact@pooja.com</p>
//         </ContactDetails>
//         <MapContainer>
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9958859322364!2d72.83552067565415!3d19.057999884071134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce5dfaa19a25%3A0x5b29dfc5043ffce2!2sMumbai%2C%20Maharashtra%20400001%2C%20India!5e0!3m2!1sen!2sus!4v1602069637885!5m2!1sen!2sus"
//             allowFullScreen=""
//             loading="lazy"
//             title="Company Location"
//           ></iframe>
//         </MapContainer>
//       </FooterContent>
//     </Foot>
//   );
// };

// export default Footer;


import React from 'react';
import styled from "styled-components";

const Foot = styled.footer`
  background-color: black;
  color: white;
  width: 100%;
  text-align: center;
  padding: 20px;
  overflow: hidden; /* To prevent overflow */
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  max-width: 100%; /* Ensures it stays within the screen width */
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px; /* Add padding to prevent touching the edges */
  }
`;

const ContactDetails = styled.div`
  margin: 10px 0;

  p {
    margin: 5px 0;
    line-height: 1.5;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  max-width: 300px; /* Ensure map does not exceed 300px */
  height: 200px;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const Footer = () => {
  return (
    <Foot>
      <FooterContent>
        <ContactDetails>
          <p><strong>Address:</strong> 1234 Main St, Mumbai, Maharashtra, 400001</p>
          <p><strong>Phone:</strong> +91 9876543210</p>
          <p><strong>Email:</strong> contact@pooja.com</p>
        </ContactDetails>
        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9958859322364!2d72.83552067565415!3d19.057999884071134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce5dfaa19a25%3A0x5b29dfc5043ffce2!2sMumbai%2C%20Maharashtra%20400001%2C%20India!5e0!3m2!1sen!2sus!4v1602069637885!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            title="Company Location"
          ></iframe>
        </MapContainer>
      </FooterContent>
      <p>Copyright &copy; 2023 Pooja</p>
    </Foot>
  );
};

export default Footer;
