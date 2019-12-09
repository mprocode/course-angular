import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Album } from '../../models/album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  
  @Input() album: Album;


  constructor() { }

  ngOnInit() {
  }

  backgroundPicture(picture: string) {
    return { 
      'background-image': `url( ${picture} )`,
      'background-size': 'cover',
    };
  }

}
