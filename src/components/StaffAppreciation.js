import React from 'react';
import Section from './Section.js'

function StaffAppreciations() {
    return (
        <div>
            <p className="pageHeader">Staff Appreciation</p>

            <Section 
            header="BVPO Dinner for Teachers" 
            text="Traditionally, the BVPO offers dinner to the teachers on the first night of parent/teacher conferences.  We want to show the teachers how much we appreciate that they go above and beyond by staying late after school to hold conferences.  On this first day conferences will be held at 4:00-8:00 p.m."/>

            <Section 
            header="Staff Appreciation Week" 
            text="During this week, each grade takes a day of the week to provide the whole school staff with a meal during lunch time."/>

            <Section 
            header="Staff Appreciation Brunch" 
            text="This is held on the last no school day before school is out for the Summer.  Brunch is provided to the entire staff to thank them for all the work they did for us and our children throughout the year!"/>
        </div>
    )}

export default StaffAppreciations;