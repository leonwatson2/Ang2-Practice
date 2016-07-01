import {Component} from 'angular2/core';

@Component({
	selector: 'the-app',
	templateUrl: 'partials/app.html'
})

export class AppComponent {
	name = "'Jim'";
	artists = ['Bob Marley','Ronald Jenkees', 'Pentatonix', 'Snarky Puppy'];
	clicking(e, a){
		console.log(e, a);
	}
	addArtist(a){
		if(a != "")
			this.artists.push(a);
		
	}
}
