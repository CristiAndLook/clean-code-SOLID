(() => {

    // función para obtener información de una película por Id
    function getMovieById( id: string ) {
        console.log({ id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getAllActorsByMovie( movieId: string ) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getActorById( actorId: string ) {
        console.log({ actorId });
    }
    
    // Crear una película
    const newMovie = {
        title: 'Movie Title',
        description: 'Movie Description',
        rating: 5,
        cast: ['actor1', 'actor2']
    }

    function createMovie( newMovie: any) {
        console.log({ newMovie });
    }

    // Crear una nueva película con una interfaz
    interface Movie {
        title: string;
        description: string;
        rating: number;
        cast: string[];
    }

    function createMovieWithInterface( movie: Movie ) {
        console.log({ movie });
    }

    // Validate fullName
    function validateFullName( fullName: string ): boolean {
        if ( fullName === 'fernando' ) return false;
        return true;
    }
    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( validateFullName(fullName) ) return false;

        console.log('Crear actor');
        return true;        

    }

    


})();