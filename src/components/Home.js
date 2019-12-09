import React from 'react';
import Section from './Section.js'

function Home() {
  return (
    <div className="home">
        <p className="pageHeader">Welcome to the Buena Vista Parent Organization (BVPO)</p>

        <p className="basicText">
            The BVPO is a private, Non-Profit Organization, dependent on volunteer support.  Thank you for giving back to the school community.
        </p>

        <Section 
        header="Overview" 
        text="The BVPO is an active parent body that partners closely with the Administration and Staff of the Buena Vista Spanish Immersion Elementary School in Eugene, Oregon.  All parents of currently enrolled students are encouraged to participate in the monthly BVPO/School joint meetings held on the first Monday following site counsel of every month in the school library.  Your opinions matter and we seek your input."/>

        <Section
        header="Monthly BVPO meetings"
        text="BVPO meetings are typically held the first Monday following Site Council from 6:30 – 8:00pm in the school library.  Archived copies of meeting minutes are available in the school office.  All parents of children actively enrolled in the school are welcome to participate and vote (if present) at monthly BVPO meetings.  Please become actively involved and strengthen our school community."/>

        <p className="sectionHeader">
          The primary role of the BVPO is to:
        </p>

        <ul className="basicText">
          <li>
          Provide a forum for parents and other community members to discuss issues which concern education and the School’s relationship to the community
          </li>
          <li>
          Provide an opportunity for parents and other members of the community to actively participate in the student’s educational process at the School
          </li>
          <li>
          Sponsor and plan activities which generate revenue to further the goals of the School and the community
          </li>
        </ul>

        <p className="basicText">
          While the BVPO sponsors the main school fundraising events for Buena Vista, it also organizes social events and sponsors Student Teachers from Spanish Speaking Countries.
        </p>
        
        <Section
        header="Parent Volunteers and Board Members"
        text="The BVPO is a Non-Profit Organization which relies upon Parent Volunteers each day helping out in the classrooms, organizing programs and events, and serving as Board and Committee Chair Members.  If you are interested in joining the BVPO Board please contact us or inquire for more information at the school office."/>
    </div>
  );
}

export default Home;
