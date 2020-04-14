import { SearchResults } from "../interfaces/searchresults";
import { Movie } from "../interfaces/movie";

class DataService {
    private apiUrl: string;
    private apiKey: string;

    constructor() {
        this.apiUrl = 'https://api.themoviedb.org/3';
        this.apiKey = '8e04168f7bad30462aace99b52adbfd3';
    }
    
    public async searchMovies(queryText: string, page: number): Promise<SearchResults> {
        //Url example: https://api.themoviedb.org/3/search/movie?api_key=3983080328&query=endgame&page=1
        const apiUrl = `${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${queryText}&page=${page.toString()}`;
        const response: Response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const apiObj: any = await response.json();
        if (apiObj.total_results > 0) {
            const imagesUrl: string = 'https://image.tmdb.org/t/p/w92';
            const movies: Movie[] = (apiObj.results as any[]).map((item: any) => {
                return {
                    id: item.id,
                    title: item.title,
                    imageUrl: item.poster_path ? `${imagesUrl}${item.poster_path}` : '',
                };
            });
            return {
                page: apiObj.page,
                totalResults: apiObj.total_results,
                totalPages: apiObj.total_pages,
                results: movies
            };                     
        }else {
            return {
                page: apiObj.page,
                totalResults: apiObj.total_results,
                totalPages: apiObj.total_pages,
                results: []
            };
        }
    }

}

export const dataService = new DataService();