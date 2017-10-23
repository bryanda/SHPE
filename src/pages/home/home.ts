import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tab: string = "events";
  Events = [
    {
      title: 'SHPE Conference Kickoff!!',
      subtitle: 'ARE YOU READY?',
      startdate: '10/25/2017',
      endate: '',
      startime: '0800',
      endtime: '1000',
      locationname: 'UTRGV Auditorium',
      locationid: '121',
      bannerURL: 'http://via.placeholder.com/280x80'
    }, {
      title: 'Company Introductions',
      subtitle: 'See who came',
      startdate: '10/25/2017',
      endate: '',
      startime: '0800',
      endtime: '1000',
      locationname: 'UTRGV Auditorium',
      locationid: '121',
      bannerURL: 'http://via.placeholder.com/280x80'
    }, {
      title: 'Workshops Intro',
      subtitle: '',
      startdate: '10/25/2017',
      endate: '',
      startime: '0800',
      endtime: '1000',
      locationname: 'UTRGV Auditorium',
      locationid: '121',
      bannerURL: 'http://via.placeholder.com/280x80'
    }
  ];
  Schedule = [
    {
      title: 'Opening Cerimony',
      time: '09:30',
      locationname: 'South Hall'
    },
    {
      title: 'Introduction to SVG',
      time: '10:30',
      locationname: 'East Auditorium 1.102'
    },
    {
      title: 'Resume Builder',
      time: '11:00',
      locationname: 'ENGR 1.268'
    },
    {
      title: 'Lunch Time',
      time: '12:00',
      locationname: 'Student Union'
    },
    {
      title: 'Virtual Reality Talk',
      time: '13:30',
      locationname: 'EDUC 1.285'
    },
  ];
  Companies = [
    {
      name: 'America Airlines',
      email: 'changeme@email.com',
      logo: '../../assets/imgs/logo.png'
    }, {
      name: 'Chik-fil-a',
      email: 'changeme@email.com',
      logo: '../../assets/imgs/logo.png'
    }, {
      name: 'Taco Bell',
      email: 'changeme@email.com',
      logo: '../../assets/imgs/logo.png'
    }, {
      name: 'NASA',
      email: 'changeme@email.com',
      logo: '../../assets/imgs/logo.png'
    }, {
      name: 'Space-X',
      email: 'changeme@email.com',
      logo: '../../assets/imgs/logo.png'
    }
  ];
  constructor(public navCtrl: NavController) {

  }

}
