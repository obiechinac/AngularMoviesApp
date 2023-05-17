import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
// import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
import { Movie } from '../Model/movie';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url:string ="https://api.themoviedb.org/3";
  constructor(private http: HttpClient) { }

  getLatestMovies():Observable<any>{
    console.log('in latest movie service')
    return this.http.get<any>(this.url+'/movie/latest?api_key='+environment.api_key);
    
  }
  
  getTopRatedrMovies():Observable<Movie>{
    
    return this.http.get<Movie>(this.url+'/movie/top_rated?api_key='+environment.api_key);
    
  }
  getNowPlayingMovies():Observable<Movie>{
    
    return this.http.get<Movie>(this.url+'/movie/now_playing?api_key='+environment.api_key);
    
  }
  getUpcomintMovies():Observable<Movie>{
    
    return this.http.get<Movie>(this.url+'/movie/upcoming?api_key='+environment.api_key);
    
  }
  getOriginals():Observable<Movie>{
    
    return this.http.get<Movie>(this.url+'/discover/tv?api_key='+environment.api_key);
    
  }
  getTrendingMovies():Observable<Movie>{
    
    return this.http.get<Movie>(this.url+'/trending/all/week?api_key='+environment.api_key);
    
  }
  getPopularMovies():Observable<Movie>{
    
    return this.http.get<Movie>(this.url+'/movie/popular?api_key='+environment.api_key);
    
  }
  // getPopularMovies():Observable<Movie>{
    
  //   return this.http.get<Movie>(this.url+`/movie/popular?api_key=`+environment.api_key);
    
  // }
}
