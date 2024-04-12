import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn:  'root'
})
export class FaceSnapsService {


    mySnaps : FaceSnap[] = [
        { 
         id : 1,
         title: 'sasa',
         description: 'sasa',
         imageUrl:'sasa',
         createdDate:new Date,
         snaps:3,
         isClicked:true
       },
   
       { 
         id:2,
         title: 'booba',
         description: 'booba',
         imageUrl:'booba',
         createdDate:new Date,
         snaps:9,
         isClicked:false
       }
     ]

     getAllFs() {
        return this. mySnaps;
     }

     getSnap(id:number):FaceSnap {
        const faceSnap = this.mySnaps.find(faceSnap => faceSnap.id === id)
        if (faceSnap) return faceSnap;
        else throw new Error('ERROR');
     }

     tapeSnaps(id:number,  type: 'like' | 'unlike') {
        const faceSnap = this.getSnap(id);
        if (faceSnap && type === 'like') faceSnap.snaps++;
        else faceSnap.snaps--;
     }
}