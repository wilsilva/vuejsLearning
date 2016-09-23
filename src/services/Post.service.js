import Vue from 'vue';

export default class Post{

	constructor(){		
		
	}

	posts(){
        return Vue.http.get('posts');
    }

    post(idPost){
    	return Vue.http.get('posts/' + idPost);
    }

}