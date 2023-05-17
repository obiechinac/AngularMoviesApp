import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Model/movie';
import { DataService } from 'src/app/Service/data.service';
import { environment } from 'src/environments/environment.development';
// import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
latestMovies:any;
popularMovies!:Movie;
nowPlayingMovies!:Movie;
topRatedMovies!:Movie;
upComingMovies!:Movie;
originals!:Movie;
trendingMovies!: Movie;


  constructor(private dataService:DataService){

  }
  ngOnInit(): void {
    console.log('coming here oninit')
this.getLatestMovies();
this.getOriginalMovies();
this.getPopularMovies();
this.getTopRatedMovies();
this.getTrendingMovies()
this.getUpcomingMovies()
this.getNowPlayingMovies()
console.log('skippeed oninit')
 }

getLatestMovies(){
  console.log('calling get latest')
  this.dataService.getLatestMovies().subscribe(data=>{
  console.log(data);
    this.latestMovies=this.changeData(data);
    // console.log(this.latestMovies)
  }, err=>{
    console.log("unable to load latest movies "+err);
  }
  );
}
  changeData(data: any): any {
    if(!data.backdrop_path){
      data.backdrop_path='https://image.tmdb.org/t/p/w500'+data.poster_path+'?api_key='+environment.api_key;
    }
    else{
      data.backdrop_path='https://image.tmdb.org/t/p/w500'+data.backdrop_path+'?api_key='+environment.api_key;

    }
    return data;
  }
getPopularMovies(){
  this.dataService.getPopularMovies().subscribe(data=>{
    this.popularMovies=this.modifyData(data);
    console.log(this.popularMovies)
  }, err=>{
    console.log("unable to load latest movies "+err);
  }
  );
}
getNowPlayingMovies(){
  this.dataService.getNowPlayingMovies().subscribe(data=>{
    this.nowPlayingMovies=this.modifyData(data);
  }, err=>{
    console.log("unable to load latest movies "+err);
  }
  );
}
getTopRatedMovies(){
  this.dataService.getTopRatedrMovies().subscribe(data=>{
    this.topRatedMovies=this.modifyData(data);
  }, err=>{
    console.log("unable to load latest movies "+err);
  }
  );
}
getUpcomingMovies(){
  this.dataService.getUpcomintMovies().subscribe(data=>{
    this.upComingMovies=this.modifyData(data);
  }, err=>{
    console.log("unable to load latest movies "+err);
  }
  );
}
getOriginalMovies(){
  this.dataService.getOriginals().subscribe(data=>{
    this.originals=this.modifyData(data);
  }, err=>{
    console.log("unable to load latest movies "+err);
  }
  );
}
getTrendingMovies(){
  this.dataService.getTrendingMovies().subscribe(data=>{
    this.trendingMovies=this.modifyData(data);
  }, err=>{
    console.log("unable to load latest movies "+err);
  }
  );
}

modifyData(movies: Movie): Movie {
  if(movies.results){
  
    movies.results.forEach(element=>{
      // element.backdrop_path ='https://image.tmdb.org/t/p/original'+element.backdrop_path+'api_key='+environment.api_key;
      if(!element.backdrop_path){
        element.backdrop_path='https://image.tmdb.org/t/p/w500'+element.poster_path+'?api_key='+environment.api_key;
      }
      else{
        element.backdrop_path='https://image.tmdb.org/t/p/w500'+element.backdrop_path+'?api_key='+environment.api_key;
  
      }
      // lement.backdrop_path ='https://image.tmdb.org/t/p/w500'+element.backdrop_path+'api_key='+environment.api_key;

      if(!element.title){
        element.title=element.name
      }
    })
  }
return movies;
}
  
  
}

