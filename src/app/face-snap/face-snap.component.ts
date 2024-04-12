import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../service/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

  constructor (private faceSnapService : FaceSnapsService) {

  }


  @Input() faceSnap !: FaceSnap;
  buttonText !: string;


  ngOnInit () {
    if (this.faceSnap.isClicked) this.buttonText = 'Like';
    else this.buttonText = 'unlike'
  }

  

  onAddSnap() {
    if (this.faceSnap.isClicked) {
      this.faceSnap.isClicked = false;
      this.faceSnapService.tapeSnaps(this.faceSnap.id, 'like');
      this.buttonText = 'Like';
    } else {
      this.faceSnap.isClicked = true;
      this.faceSnapService.tapeSnaps(this.faceSnap.id, 'unlike');
      this.buttonText = 'Unlike';
    }
  }

}
