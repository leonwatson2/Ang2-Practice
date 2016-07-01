import {Component} from 'angular2/core';

@Component({
	selector: 'the-app',
	templateUrl: 'partials/app.html',
	styleUrls:['css/artists.css']
})

export class AppComponent {
	artists = ['Bob Marley','Ronald Jenkees', 'Pentatonix', 'Snarky Puppy'];
	name = this.artists[0];
	clicking(container, a){
		this.name = a;


	}
	addArtist(a){
		if(a != "")
			this.artists.push(a);

	}
}
