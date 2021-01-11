
let date = document.getElementById('date');
let day = document.getElementById('day');
let hour = document.getElementById('hour');
let subject = document.getElementById('subject');
let teacher = document.getElementById('teacher');
let zoomLink = document.getElementById('zoom-link');




function changeCard(ourDate,ourDay,ourHour,ourSubject,ourTeacher,ourZoomLink)
{

date.innerText=ourDate;
day.innerText=ourDay;
hour.innerText=ourHour;
subject.innerText=ourSubject;
teacher.innerText=ourTeacher;
zoomLink.setAttribute('href', 'http://'+ourZoomLink)

}