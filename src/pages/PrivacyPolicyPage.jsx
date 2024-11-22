// src/pages/PrivacyPolicy.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const PrivacyPolicyPage = () => {
  return (
    <Box sx={{ backgroundColor: 'white', width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
      <Container maxWidth="md" sx={{ py: 5, color: 'black' }}>
        <Box textAlign="center" mb={4}>
          <Typography variant="h3" gutterBottom>Privacy Policy</Typography>
          <Typography variant="body1" color="text.secondary">
            Your privacy is very important to us. This Privacy Policy outlines how we handle your data to create a secure and personalized experience as you explore India’s heritage with us.
          </Typography>
        </Box>

        {/* Information Collection */}
        <Box mb={4}>
          <Typography variant="h5" gutterBottom>1. Information Collection</Typography>
          <Typography variant="body1" color="text.secondary">
            We collect personal information when you register, interact, or participate in activities on our website. This information may include:
            <ul>
              <li>Your name, email address, and contact details to personalize your experience.</li>
              <li>Device and browsing information to optimize your user experience and improve our platform.</li>
              <li>Location data to provide region-specific content, enhancing relevance and engagement.</li>
            </ul>
          </Typography>
        </Box>

        {/* Use of Information */}
        <Box mb={4}>
          <Typography variant="h5" gutterBottom>2. Use of Information</Typography>
          <Typography variant="body1" color="text.secondary">
            Your information allows us to:
            <ul>
              <li>Provide personalized content and recommendations to deepen your understanding of Indian heritage.</li>
              <li>Secure your account and safeguard our services from unauthorized access and misuse.</li>
              <li>Analyze user trends and improve our website's content, layout, and overall experience.</li>
              <li>Engage with you through newsletters, updates, or notifications related to your interests.</li>
            </ul>
          </Typography>
        </Box>

        {/* Data Security */}
        <Box mb={4}>
          <Typography variant="h5" gutterBottom>3. Data Security</Typography>
          <Typography variant="body1" color="text.secondary">
            Protecting your data is our top priority. We implement various security measures, including:
            <ul>
              <li>Encryption for sensitive information during transmission and storage.</li>
              <li>Access controls, ensuring that only authorized personnel can access personal data.</li>
              <li>Regular security assessments to detect and resolve vulnerabilities.</li>
            </ul>
          </Typography>
        </Box>

        {/* Cookies and Tracking */}
        <Box mb={4}>
          <Typography variant="h5" gutterBottom>4. Cookies and Tracking</Typography>
          <Typography variant="body1" color="text.secondary">
            Our website uses cookies and similar technologies to:
            <ul>
              <li>Understand user preferences and enhance site performance.</li>
              <li>Analyze traffic patterns and measure site performance to improve content.</li>
              <li>Provide personalized content based on your browsing behavior and past interactions.</li>
            </ul>
            You can manage your cookie preferences through your browser settings.
          </Typography>
        </Box>

        {/* Third-Party Links */}
        <Box mb={4}>
          <Typography variant="h5" gutterBottom>5. Third-Party Links</Typography>
          <Typography variant="body1" color="text.secondary">
            Our platform may contain links to external resources, websites, and partners that provide related content on Indian heritage. Please be aware that we do not control the privacy practices of these third-party sites and are not responsible for their content or privacy policies. We recommend reviewing their privacy policies before engaging with them.
          </Typography>
        </Box>

        {/* User Rights */}
        <Box mb={4}>
          <Typography variant="h5" gutterBottom>6. User Rights</Typography>
          <Typography variant="body1" color="text.secondary">
            You have the right to:
            <ul>
              <li>Access and review the personal information we hold about you.</li>
              <li>Request corrections to any inaccurate or outdated information.</li>
              <li>Request the deletion of your information, subject to certain legal obligations.</li>
            </ul>
            To exercise these rights, please contact us via the email provided below.
          </Typography>
        </Box>

        {/* Changes to Policy */}
        <Box mb={4}>
          <Typography variant="h5" gutterBottom>7. Changes to This Policy</Typography>
          <Typography variant="body1" color="text.secondary">
            We may periodically update our Privacy Policy to reflect changes in our practices or legal requirements. We encourage you to review this page periodically to stay informed about how we protect your data. Significant changes will be communicated via notifications on our website.
          </Typography>
        </Box>

        {/* Contact Information */}
        <Box mb={4}>
          <Typography variant="h5" gutterBottom>8. Contact Us</Typography>
          <Typography variant="body1" color="text.secondary">
            If you have any questions, concerns, or feedback regarding our Privacy Policy or data practices, please feel free to contact us at:
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

export default PrivacyPolicyPage;
