import React from 'react';
import { DescriptionLayout } from './styled';

function DescriptionSection() {
  return (
    <DescriptionLayout>
      <div className="newsletter-desc">
        <h2>Newsletter in minutes</h2>
        <p>
          Emails are traditionally painfully slow to work with. We've mad a drag
          and drop tool that automatically fetches data and easily copy or send
          HTML using your favorite API.
        </p>
      </div>
      <div className="desc-stairs" />
      <div className="desc-illustration" />
      <div className="thirdparty-desc">
        <h2>Works with XD, Figma and Sketch</h2>
        <p>
          Ever wanted to export your design from your favorite design tool to
          your Email service? Now you can. From layers to HTML, to people's
          inbox.
        </p>
      </div>
    </DescriptionLayout>
  );
}

export default DescriptionSection;
