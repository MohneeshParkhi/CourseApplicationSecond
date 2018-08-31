import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
   albumId=null;
  constructor(private route:ActivatedRoute, private location:Location) { }

  ngOnInit() {this.route.params.forEach((urlParameters) => {
    this.albumId = parseInt(urlParameters['id']);
  });  
  }
}
