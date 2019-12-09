import React from 'react';
import AmityIntern from "./AmityIntern.js"

function AmityInterns() {
    return (
        <div>
            <p className="pageHeader">Call for Amity Host Families</p>
            <p className="basicText">Calling all incredible Buena Vista families! We need YOU as next year’s Amity host families!</p>
            <p className="basicText">Have you ever wondered about our Amity teachers? Have you ever considered what it takes to host a teacher?</p>
            <p className="basicText">Our Amity program runs solely on the support of the parents and families at Buena Vista. We are able to provide our school with 5 additional assistant teachers per academic year. They work alongside the school's salaried teachers to help reduce class ratios, provide small group teaching, and enrich the depth to which Spanish is taught. Our ability as a parent organization to provide this direct contribution in the classroom is unmatched by other non-immersion schools in the 4J school district.</p>
            <p className="basicText">Questions, or interest? Please contact Lisa Kovacevic: <a href="mailto:lisa.kovacevic@gmail.com">lisa.kovacevic@gmail.com</a></p>

            <p className="sectionHeader">Who are Amity Interns and What Do They Do?</p>
            <p className="basicText">Amity Interns are Native Spanish speaking teaching interns assigned to Buena Vista for the academic year. An Amity Inter's goal is to to grow themselves as teachers and provide enriched education to our students.</p>
            <p className="basicText">Each intern is assigned to a specific grade level for the entire semester.</p>
            <p className="basicText">Interns also work in small groups for reading, or doing large group presentations, and provide an extra set of eyes, ears, and hands in the classroom to help improve student/adult ratio in the classroom.</p>

            <div>
                <p className="sectionHeader">Meet the interns</p>
                {data.interns.map((e, i) => 
                    <div style={{marginBottom: '10px'}}>
                        <AmityIntern key={i} item={e}/>
                    </div>
                )}
            </div>

            <p className="sectionHeader">Frequently Asked Questions:</p>
            <p className="basicText noMargin">Q: What does it involve to be a host family?</p>
            <p className="basicText">A: Host families are volunteer Buena Vista families who offer interns the hospitality of their house for a semester. Host families must provide interns a private bedroom, access to 3 meals per day, and occasional transportation. Host families are not given monetary compensation for their hospitality however the non-monetary value of sharing the American culture and family norms as well as having a Spanish speaker in the house is priceless ;)</p>
            <p className="basicText noMargin">Q: Have the interns had a background check?</p>
            <p className="basicText">A: Yes. All interns have a clean police record in their home country.</p>
            <p className="basicText noMargin">Q: Why are the Amity interns not in kindergarden?</p>
            <p className="basicText">A: Currently, funding only allows for 5 Amity interns. Kindergarten classes already have a designated Educational Assistant per classroom, therefore it was decided to focus the use of the interns in grades 1-5.</p>
            <p className="basicText noMargin">Q: Can interns babysit or tutor?</p>
            <p className="basicText">A: Interns are not babysitters, or full time language tutors. They expect to help with Spanish tutoring within their host families’ households however outside babysitting or tutoring is a gray area. They are forbidden per J1 Visa regulations from obtaining a job outside the school, which means they are not available for regular/scheduled tutoring or babysitting.</p>
        </div>
    )}

var data = {
	"interns": [{
			"name": "Alejandra Garcia",
			"age": "25",
			"from": "Medelin, Colombia",
			"education": "Graduated with Bachelor's degree in education in January 2017.",
			"teaching": "2nd Grade",
			"semester": "fall semester 2017"
		},
		{
			"name": "Giovanni Rubiano",
			"age": "28",
			"from": "Bogota, Colombia",
			"education": "Graduated with Bachelor's degree in education in October 2016.",
			"teaching": "4th Grade",
			"semester": "fall semester 2017"
		},
		{
			"name": "Javier Sota",
			"age": "23",
			"from": "Madrid, Spain",
			"education": "Graduated with Bachelor's degree in primare education in May 2017.",
			"teaching": "1st Grade",
			"semester": "fall semester 2017"
		},
		{
			"name": "Patricia Suarez",
			"age": "25",
			"from": "Barcelona, Spain",
			"education": "Graduated with Bachelor's degree in primare and early childhood education in June 2016.",
			"teaching": "5th Grade",
			"semester": "fall semester 2017"
		},
		{
			"name": "Sofia Valle",
			"age": "23",
			"from": "La Libertad, El Salvador",
			"education": "Studying elementary education in El Salvador with an anticipated graduation date with her Bachelor's degree in May 2018.",
			"teaching": "3rd Grade",
			"semester": "fall semester 2017"
		}
	]
}

export default AmityInterns;