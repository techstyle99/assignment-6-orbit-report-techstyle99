import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
	// from parent component to child component
	@Input() satellites: Satellite[];

  constructor() { }
  // OnInit interface has a hook method called ngOnInit(): Angular component lifecycle 
  ngOnInit() {
  }

  countByType(type: string): number {
	let count = 0;
	if (this.satellites) {
	  for (let i = 0; i < this.satellites.length; i++) {
		 if (this.satellites[i].type === type) {
			count++;
		 }
	  }
	}
	return count;
 }


}