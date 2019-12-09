import { Component, OnInit } from '@angular/core';
import { Album } from '../models/album';

@Component({
  selector: 'app-my-photos',
  templateUrl: './my-photos.component.html',
  styleUrls: ['./my-photos.component.css']
})
export class MyPhotosComponent implements OnInit {

  albums: Album[] = [
    { name: "Album 1", picture: "/assets/albums/album1.jpeg", _id: "1"},
    { name: "Album 2", picture: "/assets/albums/album2.jpeg", _id: "2"},
    { name: "Album 3", picture: "/assets/albums/album3.jpeg", _id: "3"},
    { name: "Album 4", picture: "/assets/albums/album4.jpeg", _id: "4"},
    { name: "Album 5", picture: "/assets/albums/album5.jpeg", _id: "5"},
    { name: "Album 6", picture: "/assets/albums/album6.jpeg", _id: "6"},
    { name: "Album 7", picture: "/assets/albums/album7.jpeg", _id: "7"},
    { name: "Album 8", picture: "/assets/albums/album8.jpeg", _id: "8"},
    { name: "Album 9", picture: "/assets/albums/album9.jpeg", _id: "9"},
  ]

  constructor() { }


  ngOnInit() {
  }

}
