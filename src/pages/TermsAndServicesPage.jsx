// src/pages/TermsAndServices.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const TermsAndServicesPage = () => {
  return (
    <Box sx={{ backgroundColor: 'white', width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '90px' }}>
      <Container maxWidth="md" sx={{ py: 5, color: 'black' }}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h3" gutterBottom>Terms of Service</Typography>
          <Typography variant="body1" color="text.secondary">
            Please read these terms carefully before using our website. By accessing our platform, you agree to adhere to these terms.
          </Typography>
        </Box>

        {/* Usage of Site */}
        <Box mb={4}>
          <Typography variant="h5" gutterBottom>1. Usage of Site</Typography>
          <Typography variant="body1" color="text.secondary">
            Our platform is designed to provide educational content on Indian heritage, historical monuments, and cultural experiences. By using this website, you agree to:
            <ul>
              <li>Engage respectfully with the content and other users.</li>
              <li>Avoid using the website for any illegal or unauthorized purposes.</li>
              <li>Provide accurate information during registration and interaction.</li>
            </ul>
          </Typography>
        </Box>

        {/* Intellectual Property */}
        <Box mb={4}>
          <Typography variant="h5" gutterBottom>2. Intellectual Property</Typography>
          <Typography variant="body1" color="text.secondary">
            The content provided on this website, including text, images, videos, and logos, is the intellectual property of IndianHeritage.com or its licensors. You may not:
            <ul>
              <li>Republish, sell, or redistribute content without our express permission.</li>
              <li>Copy or use content for commercial purposes without authorization.</li>
            </ul>
            You are permitted to use the content for personal, non-commercial purposes, provided you respect copyright and attribution guidelines.
          </Typography>
        </Box>

        {/* User-Generated Content */}
        <Box mb={4}>
          <Typography variant="h5" gutterBottom>3. User-Generated Content</Typography>
          <Typography variant="body1" color="text.secondary">
            We may allow users to share experiences, reviews, or other content related to Indian heritage. By submitting content, you agree that:
            <ul>
              <li>Your contributions are original, accurate, and do not infringe on the rights of others.</li>
              <li>You grant us a non-exclusive, royalty-free license to use, modify, and display your content on our platform.</li>
              <li>We reserve the right to review and remove any user content that violates these terms or our community guidelines.</li>
            </ul>
          </Typography>
        </Box>

        {/* Limitations of Liability */}
        <Box mb={4}>
          <Typography variant="h5" gutterBottom>4. Limitations of Liability</Typography>
          <Typography variant="body1" color="text.secondary">
            Our website provides information to enhance your cultural knowledge and experience, but we cannot guarantee the completeness or accuracy of all information provided. Therefore:
            <ul>
              <li>We are not liable for any direct or indirect damages resulting from your use of the website.</li>
              <li>We do not guarantee uninterrupted or error-free access to the platform.</li>
              <li>Any reliance on the information provided is solely at your own risk.</li>
            </ul>
          </Typography>
        </Box>

        {/* External Links */}
        <Box mb={4}>
          <Typography variant="h5" gutterBottom>5. External Links</Typography>
          <Typography variant="body1" color="text.secondary">
            Our website may link to third-party sites or content related to Indian heritage and culture. These links are provided for informational purposes only. We:
            <ul>
              <li>Do not endorse or assume responsibility for the content on external websites.</li>
              <li>Are not liable for any damages arising from your use of third-party websites.</li>
            </ul>
            Please review the terms and policies of any third-party sites you visit through links on our website.
          </Typography>
        </Box>

        {/* Modifications to Terms */}
        <Box mb={4}>
          <Typography variant="h5" gutterBottom>6. Modifications to Terms</Typography>
          <Typography variant="body1" color="text.secondary">
            We reserve the right to modify these Terms of Service at any time. You are encouraged to review this page periodically. By continuing to use our website after changes are made, you agree to the updated terms.
          </Typography>
        </Box>

        {/* Contact Information */}
        <Box mb={4}>
          <Typography variant="h5" gutterBottom>7. Contact Us</Typography>
          <Typography variant="body1" color="text.secondary">
            If you have any questions regarding these terms, please feel free to reach out to us:
            <br />
            <strong>Email:</strong> support@indianheritage.com
            <br />
            <strong>Address:</strong> 123 Heritage Lane, Cultural Center, New Delhi, India
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default TermsAndServicesPage;
