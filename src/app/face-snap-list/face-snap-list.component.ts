import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../service/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  constructor(private faceSnapsService : FaceSnapsService) {

  }

  mySnaps !: FaceSnap[];

  ngOnInit() {
    this.mySnaps = this.faceSnapsService.mySnaps;
  }
}
