import React from 'react';
import FunitureScene from '../../assets/furniture.png';
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
      <div className="furniture">
        <div>
          <h2>
            So afforable.
            <br /> Small teams OK
          </h2>
          <p>
            Some email services cost hundreds or thousands to send to a
            not-so-large audience. We'll make sure you can stop worrying bout
            costs and more about sending your beautiful content!
          </p>
        </div>
        <div>
          <img src={FunitureScene} />
        </div>
      </div>
    </DescriptionLayout>
  );
}

export default DescriptionSection;
