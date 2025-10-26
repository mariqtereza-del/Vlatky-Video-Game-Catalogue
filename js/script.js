
// Define games array in the global scope
const games = [
    {
        image: 'images/Video game covers/pacmanarcade.webp',
        title: 'Pac-Man',
        date: '10.1980',
        console: 'Arcade',
        genre: ['Strategy', 'Puzzle'],
        status: 'Played',
        emulated: 'true',
        ownership: [],
        watchedReviews: true,
        watchedTrailers: false,
        listenedSoundtrack: true,
        readTVTropes: true,
        playedDLC: 'na',
        rating: '2/5',
        notes: ''
    },
        {
        image: 'images/Video game covers/froggerarcade.jpeg',
        title: 'Frogger',
        date: '9.1981', // Format: Month.Year (e.g., '5.2023')
        console: 'Arcade', // Must match one in categories
        genre: 'Action', // Must match one in categories
        status: 'Played', // Must be one of: played, not played, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: true, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '2/5', // Your rating format

        notes: '' // Optional
    },
	{
        image: 'images/Video game covers/donkeykongarcade.jpg',
        title: 'Donkey Kong',
        date: '10.1981', // Format: Month.Year (e.g., '5.2023')
        console: 'Arcade', // Must match one in categories
        genre: '2D Platformer', // Must match one in categories
        status: 'Played', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',
		franchise: 'Donkey Kong',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: true, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format

        notes: '' // Optional
    },
	{
        image: 'images/Video game covers/donkeykongcountrysnes.jpg',
        title: 'Donkey Kong Country',
        date: '18.11.1994', // Format: Day.Month.Year (e.g., '15.5.2023')
        console: 'Super Nintendo Entertainment System', // Must match one in categories
        genre: '2D Platformer', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',
		franchise: 'Donkey Kong',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: [], // true or false
        readTVTropes: [], // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format

        notes: '' // Optional
    },
	{
        image: 'images/Video game covers/spidermanatari2600.png',
        title: 'Spider-Man',
        date: '11.1982', // Format: Day.Month.Year (e.g., '15.5.2023')
        console: 'Atari 2600', // Must match one in categories
        genre: 'Action', // Must match one in categories
        status: 'Played', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',
		franchise: 'Marvel',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: false, // true or false
        readTVTropes: false, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '2.5/5', // Your rating format

        notes: '' // Optional
    },
	{
        image: 'images/Video game covers/questprobefeaturingthehulkappleii.jpg',
        title: 'Questprobe featuring The Hulk',
        date: '1.5.1984', // Format: Day.Month.Year (e.g., '1.5.2023')
        console: 'Apple II', // Must match one in categories
        genre: 'Text Adventure', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'Marvel',
		ownership: [],
        watchedReviews: false, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: false, // true or false
        readTVTropes: false, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '2/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/questprobefeaturingspidermanacornelectron.jpg',
        title: 'Questprobe featuring Spider-Man',
        date: '12.1984', // Format: Month.Year (e.g., '12.2023')
        console: 'Acorn Electron', // Must match one in categories
        genre: 'Text Adventure', // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'Marvel',
		ownership: [],
        watchedReviews: false, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: false, // true or false
        readTVTropes: false, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '2/5', // Your rating format

        notes: '' // Optional
    },
	{
        image: 'images/Video game covers/xmenarcade.jpeg',
        title: 'X-Men',
        date: '3.1992', // Format: Month.Year (e.g., '12.2023')
        console: 'Arcade', // Must match one in categories
        genre: 'Beat \'em up', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'Marvel',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: true, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format

        notes: '' // Optional
    },
	{
        image: 'images/Video game covers/hulkgamecube.jpg',
        title: 'Hulk',
        date: '28.5.2003', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo GameCube', // Must match one in categories
        genre: ['Beat \'em up', 'Stealth'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'Marvel',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: true, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format

        notes: '' // Optional
    },
    {	
        image: 'images/Video game covers/xmenoriginswolverinepc.jpg',
        title: 'X-Men Origins: Wolverine',
        date: '29.4.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Hack and Slash', 'Action-adventure'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: '',		
		franchise: 'Marvel',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: true, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format

        notes: '' // Optional
    },		
    {	
        image: 'images/Video game covers/marvelsspidermanps4.jpg',
        title: 'Marvel\'s Spider-Man',
        date: '7.9.2018', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: '',		
		franchise: 'Marvel',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: true, // true or false
        readTVTropes: true, // true or false
        playedDLC: true, // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
		
        notes: '' // Optional
    },
	{
        image: 'images/Video game covers/marvelsavengersps4.jpg',
        title: 'Marvel\'s Avengers',
        date: '4.9.2020', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: '',		
		franchise: 'Marvel',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format

        notes: '' // Optional
    },			
	{
        image: 'images/Video game covers/marvelsspidermanmilesmoralesps4.jpg',
        title: 'Marvel\'s Spider-Man: Miles Morales',
        date: '12.11.2020', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: 'platinum', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: '',		
		franchise: 'Marvel',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/marvelsspiderman2ps5.jpg',
        title: 'Marvel\'s Spider-Man 2',
        date: '20.10.2023', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 5', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: '100percent', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: '',		
		franchise: 'Marvel',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format

        notes: 'Leaked PC build' // Optional
    },		
	{
        image: 'images/Video game covers/starwarsarcade.png',
        title: 'Star Wars',
        date: '5.5.1983', // Format: Month.Year (e.g., '12.2023')
        console: 'Arcade', // Must match one in categories
        genre: 'Space Flight Sim', // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'Star Wars',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '1/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/mariobrosarcade.png',
        title: 'Mario Bros.',
        date: '3.1983', // Format: Month.Year (e.g., '12.2023')
        console: 'Arcade', // Must match one in categories
        genre: '2D Platformer', // Must match one in categories
        status: 'Played', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'Super Mario',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/supermariobrosnes.jpg',
        title: 'Super Mario Bros.',
        date: '10.1985', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo Entertainment System', // Must match one in categories
        genre: '2D Platformer', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'Super Mario',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: true, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/supermariobrosthelostlevelsfds.jpg',
        title: 'Super Mario Bros.: The Lost Levels',
        date: '3.6.1986', // Format: Month.Year (e.g., '12.2023')
        console: 'Famicom Disk System', // Must match one in categories
        genre: '2D Platformer', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'Super Mario',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/supermariobros2nes.jpg',
        title: 'Super Mario Bros. 2',
        date: '9.1988', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo Entertainment System', // Must match one in categories
        genre: '2D Platformer', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'Super Mario',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: true, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/supermariolandgb.jpg',
        title: 'Super Mario Land',
        date: '1.8.1989', // Format: Month.Year (e.g., '12.2023')
        console: 'Game Boy', // Must match one in categories
        genre: '2D Platformer', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'Super Mario',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format

        notes: '' // Optional
    },
	{
        image: 'images/Video game covers/supermariobros3nes.jpg',
        title: 'Super Mario Bros. 3',
        date: '12.2.1990', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo Entertainment System', // Must match one in categories
        genre: '2D Platformer', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'Super Mario',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: true, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
		
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/supermarioworldsnes.jpg',
        title: 'Super Mario World',
        date: '23.8.1991', // Format: Month.Year (e.g., '12.2023')
        console: 'Super Nintendo Entertainment System', // Must match one in categories
        genre: '2D Platformer', // Must match one in categories
        status: '100percent', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'Super Mario',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
		
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/supermariokartsnes.jpg',
        title: 'Super Mario Kart',
        date: '1.9.1992', // Format: Month.Year (e.g., '12.2023')
        console: 'Super Nintendo Entertainment System', // Must match one in categories
        genre: 'Kart racing', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'Super Mario',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '2.5/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/supermarioland26goldencoinsgb.jpg',
        title: 'Super Mario Land 2: 6 Golden Coins',
        date: '2.11.1992', // Format: Month.Year (e.g., '12.2023')
        console: 'Game Boy', // Must match one in categories
        genre: '2D Platformer', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'Super Mario',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/wariolandsupermarioland3gb.jpg',
        title: 'Wario Land: Super Mario Land 3',
        date: '13.3.1994', // Format: Month.Year (e.g., '12.2023')
        console: 'Game Boy', // Must match one in categories
        genre: '2D Platformer', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'Super Mario',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/supermarioworld2yoshisislandsnes.jpg',
        title: 'Super Mario World 2: Yoshi\'s Island',
        date: '4.10.1995', // Format: Month.Year (e.g., '12.2023')
        console: 'Super Nintendo Entertainment System', // Must match one in categories
        genre: '2D Platformer', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'Super Mario',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/supermario64n64.jpg',
        title: 'Super Mario 64',
        date: '26.9.1996', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo 64', // Must match one in categories
        genre: '3D Platformer', // Must match one in categories
        status: '100percent', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'Super Mario',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
		
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/mariokart64n64.jpg',
        title: 'Mario Kart 64',
        date: '10.2.1997', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo 64', // Must match one in categories
        genre: 'Kart racing', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'Super Mario',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/mariokartsupercircuitgba.jpg',
        title: 'Mario Kart: Super Circuit',
        date: '26.8.2001', // Format: Month.Year (e.g., '12.2023')
        console: 'Game Boy Advance', // Must match one in categories
        genre: 'Kart racing', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'Super Mario',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/supermariosunshinegc.jpg',
        title: 'Super Mario Sunshine',
        date: '26.8.2002', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo GameCube', // Must match one in categories
        genre: '3D Platformer', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'Super Mario',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/mariokartdoubledashgc.jpg',
        title: 'Mario Kart: Double Dash',
        date: '14.11.2003', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo GameCube', // Must match one in categories
        genre: 'Kart racing', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'Super Mario',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/newsupermariobrosds.jpg',
        title: 'New Super Mario Bros.',
        date: '15.5.2006', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo DS', // Must match one in categories
        genre: '2D Platformer', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'Super Mario',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/supermariogalaxywii.jpg',
        title: 'Super Mario Galaxy',
        date: '21.11.2007', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo Wii', // Must match one in categories
        genre: '3D Platformer', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'Super Mario',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
		
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/newsupermariobroswii.jpg',
        title: 'New Super Mario Bros. Wii',
        date: '11.11.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo Wii', // Must match one in categories
        genre: '2D Platformer', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'Super Mario',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/supermariogalaxy2wii.jpg',
        title: 'Super Mario Galaxy 2',
        date: '23.5.2010', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo Wii', // Must match one in categories
        genre: '3D Platformer', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'Super Mario',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
		
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/supermario3dland3ds.jpg',
        title: 'Super Mario 3D Land',
        date: '13.11.2011', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo 3DS', // Must match one in categories
        genre: '3D Platformer', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'Super Mario',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format

        notes: 'Played in slow motion' // Optional
    },		
	{
        image: 'images/Video game covers/akumajoudraculafds.jpg',
        title: 'Akumajō Dracula',
        date: '26.09.1986', // Format: Month.Year (e.g., '12.2023')
        console: 'Famicom Disk System', // Must match one in categories
        genre: ['Action', '2D Platformer'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'Castlevania',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/castlevanianes.jpg',
        title: 'Castlevania',
        date: '30.4.1987', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo Entertainment System', // Must match one in categories
        genre: ['Action', '2D Platformer'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'Castlevania',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/batmanamstradcpc.jpg',
        title: 'Batman',
        date: '1986', // Format: Month.Year (e.g., '12.2023')
        console: 'Amstrad CPC', // Must match one in categories
        genre: 'Action', // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'DC',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: false, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '1/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/supermannes.jpg',
        title: 'Superman',
        date: '12.1988', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo Entertainment System', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'DC',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: false, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/batmanthecapedcrusaderamiga.jpg',
        title: 'Batman: The Caped Crusader',
        date: '1988', // Format: Month.Year (e.g., '12.2023')
        console: 'Amiga', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'DC',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: false, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '2.5/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/supermanthemanofsteelamigacover.jpg',
        title: 'Superman: The Man of Steel',
        date: '1989', // Format: Month.Year (e.g., '12.2023')
        console: 'Amiga', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'DC',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: false, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '2/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/supermanarcadecover.jpg',
        title: 'Superman',
        date: '1989', // Format: Month.Year (e.g., '12.2023')
        console: 'Arcade', // Must match one in categories
        genre: ['Beat \'em up', 'Shoot \'em up'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'DC',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: false, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/batmanthemovieamiga.jpg',
        title: 'Batman: The Movie',
        date: '11.9.1989', // Format: Month.Year (e.g., '12.2023')
        console: 'Amiga', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'DC',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: false, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '2.5/5', // Your rating format

        notes: '' // Optional
    },
	{
        image: 'images/Video game covers/batmanthevideogamenes.jpg',
        title: 'Batman: The Video Game',
        date: '13.2.1990', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo Entertainment System', // Must match one in categories
        genre: '2D Platformer', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		assisted: 'true',
        emulated: 'true',		
		franchise: 'DC',
		ownership: [],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: 'Used cheats' // Optional
    },		
	{
        image: 'images/Video game covers/catwomanpc.jpg',
        title: 'Catwoman',
        date: '23.7.2004', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'DC',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format

        notes: '' // Optional
    },
	{
        image: 'images/Video game covers/batmanarkhamasylumpc.jpg',
        title: 'Batman: Arkham Asylum',
        date: '28.8.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'DC',
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: false, // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
		
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/batmanarkhamcitypc.jpg',
        title: 'Batman: Arkham City',
        date: '21.11.2011', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'DC',
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: false, // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
		
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/batmanarkhamoriginspc.jpg',
        title: 'Batman: Arkham Origins',
        date: '24.10.2013', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'DC',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: false, // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
		
        notes: '' // Optional
    },
	{
        image: 'images/Video game covers/injusticegodsamongusultimatepc.jpg',
        title: 'Injustice: Gods Among Us - Ultimate Edition',
        date: '12.11.2013', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Fighting', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'DC',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: true, // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format

        notes: 'All ladders and star labs' // Optional
    },		
	{
        image: 'images/Video game covers/therealghostbustersarcade.jpg',
        title: 'The Real Ghostbusters',
        date: '1987', // Format: Month.Year (e.g., '12.2023')
        console: 'Arcade', // Must match one in categories
        genre: 'Action', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Ghostbusters',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/ghostbustersnes.jpg',
        title: 'Ghostbusters',
        date: '10.1988', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo Entertainment System', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Ghostbusters',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '1.5/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/streetfighterarcade.png',
        title: 'Street Fighter',
        date: '8.1987', // Format: Month.Year (e.g., '12.2023')
        console: 'Arcade', // Must match one in categories
        genre: 'Fighting', // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '2/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/shinobiarcade.png',
        title: 'Shinobi',
        date: '2.1988', // Format: Month.Year (e.g., '12.2023')
        console: 'Arcade', // Must match one in categories
        genre: ['Action', '2D Platformer'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/metalgearmsx2.jpg',
        title: 'Metal Gear',
        date: '13.7.1987', // Format: Month.Year (e.g., '12.2023')
        console: 'MSX2', // Must match one in categories
        genre: 'Stealth', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Metal Gear',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/metalgear2solidsnakemsx2.jpg',
        title: 'Metal Gear 2: Solid Snake',
        date: '22.7.1990', // Format: Month.Year (e.g., '12.2023')
        console: 'MSX2', // Must match one in categories
        genre: 'Stealth', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Metal Gear',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/metroidnes.jpg',
        title: 'Metroid',
        date: '15.8.1987', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo Entertainment System', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: false, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/thelegendofzeldanes.jpg',
        title: 'The Legend of Zelda',
        date: '22.8.1987', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo Entertainment System', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/megamannes.jpg',
        title: 'Mega Man',
        date: '12.1987', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo Entertainment System', // Must match one in categories
        genre: '2D Platformer', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/dragonpowernes.jpg',
        title: 'Dragon Power',
        date: '3.1988', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo Entertainment System', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: false, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '2/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/simcityamiga.jpg',
        title: 'SimCity',
        date: '1.1.1989', // Format: Month.Year (e.g., '12.2023')
        console: 'Amiga', // Must match one in categories
        genre: 'City Sim', // Must match one in categories
        status: 'played', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '1.5/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/teenagemutantninjaturtlesnes.jpg',
        title: 'Teenage Mutant Ninja Turtles',
        date: '12.5.1989', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo Entertainment System', // Must match one in categories
        genre: ['Action-adventure', '2D Platformer'], // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Teenage Mutant Ninja Turtles',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/teenagemutantninjaturtles2battlenexusps2.jpg',
        title: 'Teenage Mutant Ninja Turtles 2: Battle Nexus',
        date: '19.10.2004', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: ['Action-adventure', 'Beat \'em up'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Teenage Mutant Ninja Turtles',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
		
        notes: 'Co-op /w Ediz' // Optional
    },		
	{
        image: 'images/Video game covers/teenagemutantninjaturtles2mutantnightmareps2.jpg',
        title: 'Teenage Mutant Ninja Turtles 3: Mutant Nightmare',
        date: '1.11.2005', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: ['Action-adventure', 'Beat \'em up'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Teenage Mutant Ninja Turtles',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/tmntpc.jpg',
        title: 'TMNT',
        date: '20.3.2007', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Teenage Mutant Ninja Turtles',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
		
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/teenagemutantninjaturtlesshreddersrevengeps4.jpg',
        title: 'Teenage Mutant Ninja Turtles: Shredder\'s Revenge',
        date: '16.6.2022', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: 'Beat \'em up', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Teenage Mutant Ninja Turtles',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/teenagemutantninjaturtlesshreddersrevengeps5.jpg',
        title: 'Teenage Mutant Ninja Turtles: Shredder\'s Revenge',
        date: '15.11.2022', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 5', // Must match one in categories
        genre: 'Beat \'em up', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Teenage Mutant Ninja Turtles',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format

        notes: 'Co-op /w Vaseto' // Optional
    },		
	{
        image: 'images/Video game covers/dragonwarriornes.jpg',
        title: 'Dragon Warrior',
        date: '8.1989', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo Entertainment System', // Must match one in categories
        genre: 'Turn-based RPG', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/pgatourgolfdos.jpg',
        title: 'PGA Tour Golf',
        date: '1990', // Format: Month.Year (e.g., '12.2023')
        console: 'DOS', // Must match one in categories
        genre: 'Golf Sim', // Must match one in categories
        status: 'played', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: false, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '1/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/princeofpersiados.jpg',
        title: 'Prince of Persia',
        date: '4.1990', // Format: Month.Year (e.g., '12.2023')
        console: 'DOS', // Must match one in categories
        genre: '2D Platformer', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/darksealarcade.webp',
        title: 'Gate of Doom',
        date: '7.1990', // Format: Month.Year (e.g., '12.2023')
        console: 'Arcade', // Must match one in categories
        genre: ['Action', 'Isometric'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: false, // true or falseCo
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/aliensarcade.jpg',
        title: 'Aliens',
        date: '1.1990', // Format: Month.Year (e.g., '12.2023')
        console: 'Arcade', // Must match one in categories
        genre: 'Shoot \'em up', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/1941counterattackarcade.jpeg',
        title: '1941: Counter Attack',
        date: '5.1990', // Format: Month.Year (e.g., '12.2023')
        console: 'Arcade', // Must match one in categories
        genre: ['Vertically-scrolling', 'Shoot \'em up'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/finalfantasynes.jpg',
        title: 'Final Fantasy',
        date: '7.1990', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo Entertainment System', // Must match one in categories
        genre: 'Turn-based RPG', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
		assisted: true,
        watchedReviews: true, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format

        notes: 'Used cheats' // Optional
    },		
	{
        image: 'images/Video game covers/jbharoldsmurderclubturbografxcd.jpg',
        title: 'J.B. Harold Murder Club',
        date: '1991', // Format: Month.Year (e.g., '12.2023')
        console: 'TurboGrafx-CD', // Must match one in categories
        genre: ['Adventure', 'Visual Novel'], // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: false, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '1.5/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/warriorbladerastansagaepisodeiiiarcade.png',
        title: 'Warrior Blade: Rastan Saga Episode III',
        date: '1991', // Format: Month.Year (e.g., '12.2023')
        console: 'Arcade', // Must match one in categories
        genre: 'Hack and Slash', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: false, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/thehuntforredoctobernes.jpg',
        title: 'The Hunt for the Red October',
        date: '1.1991', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo Entertainment System', // Must match one in categories
        genre: ['Horizontally-scrolling', 'Shoot \'em up'], // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: false, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '2.5/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/lemmingsamiga.jpg',
        title: 'Lemmings',
        date: '14.2.1991', // Format: Month.Year (e.g., '12.2023')
        console: 'Amiga', // Must match one in categories
        genre: 'Puzzle', // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: false, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/sonicthehedgehoggenesis.jpg',
        title: 'Sonic the Hedgehog',
        date: '21.6.1991', // Format: Month.Year (e.g., '12.2023')
        console: 'Sega Genesis', // Must match one in categories
        genre: '2D Platformer', // Must match one in categories
        status: '100percent', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Sonic the Hedgehog',
		ownership: null,
		assisted: true,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format

        notes: 'Used save states' // Optional
    },		
	{
        image: 'images/Video game covers/sonicthehedgehog2genesis.jpg',
        title: 'Sonic the Hedgehog 2',
        date: '24.11.1992', // Format: Month.Year (e.g., '12.2023')
        console: 'Sega Genesis', // Must match one in categories
        genre: '2D Platformer', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Sonic the Hedgehog',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/soniccdsegacd.jpg',
        title: 'Sonic CD',
        date: '10.1993', // Format: Month.Year (e.g., '12.2023')
        console: 'Sega CD', // Must match one in categories
        genre: '2D Platformer', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Sonic the Hedgehog',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/sonicheroesxbox.jpg',
        title: 'Sonic Heroes',
        date: '27.1.2004', // Format: Month.Year (e.g., '12.2023')
        console: 'Xbox', // Must match one in categories
        genre: '3D Platformer', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Sonic the Hedgehog',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/streetsofragegenesis.jpg',
        title: 'Streets of Rage',
        date: '18.9.1991', // Format: Month.Year (e.g., '12.2023')
        console: 'Sega Genesis', // Must match one in categories
        genre: 'Beat \'em up', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/warriorsoffatearcade.webp',
        title: 'Warriors of Fate',
        date: '31.10.1992', // Format: Month.Year (e.g., '12.2023')
        console: 'Arcade', // Must match one in categories
        genre: 'Beat \'em up', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/wildwestcowboysofmoomesaarcade.png',
        title: 'Wild West C.O.W. Boys of Moo Mesa',
        date: '19.11.1992', // Format: Month.Year (e.g., '12.2023')
        console: 'Arcade', // Must match one in categories
        genre: 'Shoot \'em up', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/kirbysdreamlandgameboy.jpg',
        title: 'Kirby\'s Dream Land',
        date: '8.1992', // Format: Month.Year (e.g., '12.2023')
        console: 'Game Boy', // Must match one in categories
        genre: '2D Platformer', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/mortalkombatarcade.jpg',
        title: 'Mortal Kombat',
        date: '8.1992', // Format: Month.Year (e.g., '12.2023')
        console: 'Arcade', // Must match one in categories
        genre: 'Fighting', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Mortal Kombat',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format

        notes: 'All ladders' // Optional
    },		
	{
        image: 'images/Video game covers/mortalkombatxps4.jpg',
        title: 'Mortal Kombat X',
        date: '14.4.2015', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: 'Fighting', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Mortal Kombat',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/shadowrunsnes.jpg',
        title: 'Shadowrun',
        date: '5.1993', // Format: Month.Year (e.g., '12.2023')
        console: 'Super Nintendo Entertainment System', // Must match one in categories
        genre: ['Isometric', 'Action RPG'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/jurassicparknes.jpg',
        title: 'Jurassic Park',
        date: '6.1993', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo Entertainment System', // Must match one in categories
        genre: ['Isometric', 'Shoot \'em up', 'Action-adventure'], // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: false, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '2/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/needforspeed3do.jpg',
        title: 'Road & Track Presents: The Need for Speed',
        date: '2.12.1994', // Format: Month.Year (e.g., '12.2023')
        console: '3DO', // Must match one in categories
        genre: 'Arcade Racing', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '2.5/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/fifainternationalsoccer3do.jpg',
        title: 'FIFA International Soccer',
        date: '1994', // Format: Month.Year (e.g., '12.2023')
        console: '3DO', // Must match one in categories
        genre: 'Football Sim', // Must match one in categories
        status: 'played', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: false, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '1/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/theelderscrollsarenados.jpg',
        title: 'The Elder Scrolls Arena',
        date: '25.3.1994', // Format: Month.Year (e.g., '12.2023')
        console: 'DOS', // Must match one in categories
        genre: 'Action RPG', // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'The Elder Scrolls',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/theelderscrollsIIImorrowindpc.jpg',
        title: 'The Elder Scrolls III: Morrowind',
        date: '2.5.2002', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Action RPG', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'The Elder Scrolls',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/zedbladearcade.jpg',
        title: 'Zed Blade',
        date: '1994', // Format: Month.Year (e.g., '12.2023')
        console: 'Arcade', // Must match one in categories
        genre: ['Horizontally-scrolling', 'Shoot \'em up'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: false, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/doomiihellonearthdos.jpg',
        title: 'Doom II: Hell on Earth',
        date: '10.10.1994', // Format: Month.Year (e.g., '12.2023')
        console: 'DOS', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Doom',
		ownership: 'gog',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
		
        notes: 'Played using GZDoom' // Optional
    },		
	{
        image: 'images/Video game covers/theultimatedoompc.jpg',
        title: 'The Ultimate Doom',
        date: '30.4.1995', // Format: Month.Year (e.g., '12.2023')
        console: 'DOS', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Doom',
		ownership: 'gog',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
		
        notes: 'Played using GZDoom' // Optional
    },		
	{
        image: 'images/Video game covers/masterlevelsfordoomiidos.jpg',
        title: 'Master Levels for Doom II',
        date: '26.12.1995', // Format: Month.Year (e.g., '12.2023')
        console: 'DOS', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Doom',
		ownership: 'gog',
        watchedReviews: true, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format

        notes: 'Played using GZDoom' // Optional
    },		
	{
        image: 'images/Video game covers/doom3pc.jpg',
        title: 'Doom 3',
        date: '3.8.2004', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Doom',
		ownership: ['physical', 'steam'],
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format

        notes: '' // Optional
    },
	{
        image: 'images/Video game covers/doom3xbox.jpg',
        title: 'Doom 3',
        date: '4.4.2005', // Format: Month.Year (e.g., '12.2023')
        console: 'Xbox', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Doom',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/doom2016pc.jpg',
        title: 'Doom',
        date: '13.5.2016', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Doom',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
		
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/doom2016xboxone.jpg',
        title: 'Doom',
        date: '13.5.2016', // Format: Month.Year (e.g., '12.2023')
        console: 'Xbox One', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Doom',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
		
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/doometernalpc.jpg',
        title: 'Doom Eternal',
        date: '20.3.2020', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Doom',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: true, // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
		
        notes: '' // Optional
    },			
	{
        image: 'images/Video game covers/doomthedarkagespc.jpg',
        title: 'Doom: The Dark Ages',
        date: '15.5.2025', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Doom',
		ownership: null,
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
		
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/warcraftorcs&humansdos.jpg',
        title: 'Warcraft: Orcs & Humans',
        date: '15.11.1994', // Format: Month.Year (e.g., '12.2023')
        console: 'DOS', // Must match one in categories
        genre: 'Real-time Strategy', // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Warcraft',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '2.5/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/warcraftiiireignofchaospc.jpg',
        title: 'Warcraft III: Reign of Chaos',
        date: '3.7.2002', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Real-time Strategy', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Warcraft',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        assisted: true, // Added assisted: true

        notes: 'Used cheats' // Optional
    },		
	{
        image: 'images/Video game covers/warcraftIIIthefrozenthronepc.jpg',
        title: 'Warcraft III: The Frozen Throne',
        date: '1.7.2003', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Real-time Strategy', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Warcraft',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        assisted: true, // Added assisted: true

        notes: 'Used cheats' // Optional
    },		
	{
        image: 'images/Video game covers/worldofwarcrafttheburningcrusadepc.jpg',
        title: 'World of Warcraft: The Burning Crusade',
        date: '16.1.2007', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'MMORPG', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Warcraft',
		ownership: 'battlenet',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
		
        notes: 'Loremaster and all instances' // Optional
    },		
	{
        image: 'images/Video game covers/worldofwarcraftwrathofthelichkingpc.jpg',
        title: 'World of Warcraft: Wrath of the Lich King',
        date: '13.11.2008', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'MMORPG', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Warcraft',
		ownership: 'battlenet',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
		
        notes: 'Loremaster and all instances' // Optional
    },		
	{
        image: 'images/Video game covers/worldofwarcraftcataclysmpc.jpg',
        title: 'World of Warcraft: Cataclysm',
        date: '7.12.2010', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'MMORPG', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Warcraft',
		ownership: 'battlenet',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
		
        notes: 'Loremaster and all instances' // Optional
    },		
	{
        image: 'images/Video game covers/worldofwarcraftmistsofpandariapc.jpg',
        title: 'World of Warcraft: Mists of Pandaria',
        date: '25.9.2012', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'MMORPG', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Warcraft',
		ownership: 'battlenet',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format

        notes: 'Loremaster and all instances' // Optional
    },		
	{
        image: 'images/Video game covers/worldofwarcraftwarlordsofdraenorpc.jpg',
        title: 'World of Warcraft: Warlords of Draenor',
        date: '13.11.2014', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'MMORPG', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Warcraft',
		ownership: 'battlenet',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format

        notes: 'Loremaster and all instances' // Optional
    },		
	{
        image: 'images/Video game covers/tekkenps1.jpg',
        title: 'Tekken',
        date: '31.3.1995', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation', // Must match one in categories
        genre: 'Fighting', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Tekken',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format

        notes: 'All ladders' // Optional
    },		
	{
        image: 'images/Video game covers/tekkentagtournamentps2.jpg',
        title: 'Tekken Tag Tournament',
        date: '26.10.2010', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'Fighting', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Tekken',
		ownership: null,
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/raymanjaguar.jpg',
        title: 'Rayman',
        date: '9.9.1995', // Format: Month.Year (e.g., '12.2023')
        console: 'Atari Jaguar', // Must match one in categories
        genre: '2D Platformer', // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/goalstormplaystation.jpg',
        title: 'Goal Storm',
        date: '22.12.1995', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation', // Must match one in categories
    genre: 'Football Sim', // Must match one in categories
        status: 'played', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '1/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/residentevilps1.jpg',
        title: 'Resident Evil',
        date: '30.3.1996', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation', // Must match one in categories
        genre: 'Survival Horror', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
		assisted: true,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format

        notes: 'Used save states and walkthrough' // Optional
    },		
	{
        image: 'images/Video game covers/crashbandicootps1.jpg',
        title: 'Crash Bandicoot',
        date: '31.8.1996', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation', // Must match one in categories
        genre: '3D Platformer', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
		
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/tombraidersaturn.jpg',
        title: 'Tomb Raider',
        date: '31.10.1996', // Format: Month.Year (e.g., '12.2023')
        console: 'Sega Saturn', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Tomb Raider',
		ownership: null,
		assisted: true,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
		
        notes: 'Used walkthrough' // Optional
    },		
	{
        image: 'images/Video game covers/tombraideriipc.jpg',
        title: 'Tomb Raider II',
        date: '31.10.1997', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Tomb Raider',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
		
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/shadowofthetombraiderps4.jpg',
        title: 'Shadow of the Tomb Raider',
        date: '14.9.2018', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Tomb Raider',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/tombraideriiiiremasteredps4.jpg',
        title: 'Tomb Raider I-III Remastered',
        date: '14.2.2024', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: 'Compilation', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Tomb Raider',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/diablopc.jpg',
        title: 'Diablo',
        date: '13.12.1996', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Isometric', 'Action RPG'], // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format

        notes: '' // Optional
    },
	{
        image: 'images/Video game covers/shadowwarriorpc.jpg',
        title: 'Shadow Warrior',
        date: '13.5.1997', // Format: Month.Year (e.g., '12.2023')
        console: 'DOS', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Shadow Warrior',
		ownership: 'gog',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format

        notes: '' // Optional
    },			
	{
        image: 'images/Video game covers/shadowwarrior2013pc.jpg',
        title: 'Shadow Warrior',
        date: '26.9.2013', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Shadow Warrior',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format

        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/bloodpc.jpg',
        title: 'Blood',
        date: '31.5.1997', // Format: Month.Year (e.g., '12.2023')
        console: 'DOS', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: '100percent', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Blood',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: 'Played using BloodGDX' // Optional
    },
	{
        image: 'images/Video game covers/bloodplasmapakpc.jpg',
        title: 'Blood: Plasma Pak',
        date: '11.1997', // Format: Month.Year (e.g., '12.2023')
        console: 'DOS', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: '100percent', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Blood',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: 'Played using BloodGDX' // Optional
    },
	{
        image: 'images/Video game covers/crypticpassageforbloodpc.jpg',
        title: 'Cryptic Passage for Blood',
        date: '11.1997', // Format: Month.Year (e.g., '12.2023')
        console: 'DOS', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: '100percent', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Blood',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: 'Played using BloodGDX' // Optional
    },		
	{
        image: 'images/Video game covers/bloodfreshsupplypc.jpg',
        title: 'Blood: Fresh Supply',
        date: '9.5.2019', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: '100percent', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Blood',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/dynastywarriorsps1.jpg',
        title: 'Dynasty Warriors',
        date: '30.6.1997', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation', // Must match one in categories
        genre: 'Fighting', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/goldeneye007n64.jpg',
        title: 'GoldenEye 007',
        date: '25.8.1997', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo 64', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '2.5/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/oddworldabesoddyssepc.jpg',
        title: 'Oddworld: Abe\'s Oddysee',
        date: '18.9.1997', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Action-adventure', '2D Platformer'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/ageofempirespc.jpg',
        title: 'Age of Empires',
        date: '30.9.1997', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Real-time Strategy', // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Age of Empires',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/ageofempires2theageofkingsps2.jpg',
        title: 'Age of Empires II: The Age of Kings',
        date: '2.11.2001', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'Real-time Strategy', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Age of Empires',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/falloutpc.jpg',
        title: 'Fallout',
        date: '9.10.1997', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Isometric', 'Action RPG'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Fallout',
		ownership: ['steam', 'epic'],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/fallout2pc.jpg',
        title: 'Fallout 2',
        date: '29.10.1998', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Isometric', 'Action RPG'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Fallout',
		ownership: ['steam', 'epic'],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/virtuacop2pc.jpg',
        title: 'Virtua Cop 2',
        date: '24.11.1997', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Rail Shooter', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/grandtheftautopc.jpg',
        title: 'Grand Theft Auto',
        date: '28.11.1997', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Grand Theft Auto',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/grandtheftauto3pc.jpg',
        title: 'Grand Theft Auto 3',
        date: '21.5.2002', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Grand Theft Auto',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: true, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/grandtheftautovicecitypc.jpg',
        title: 'Grand Theft Auto: Vice City',
        date: '13.5.2003', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Grand Theft Auto',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: true, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/grandtheftautogameboyadvance.jpg',
        title: 'Grand Theft Auto Advance',
        date: '26.10.2004', // Format: Month.Year (e.g., '12.2023')
        console: 'Game Boy Advance', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Grand Theft Auto',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/grandtheftautosanandreaspc.jpg',
        title: 'Grand Theft Auto: San Andreas',
        date: '7.6.2005', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Grand Theft Auto',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: true, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/grandtheftautolibertycitystoriespsp.jpg',
        title: 'Grand Theft Auto: Liberty City Stories',
        date: '25.10.2005', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation Portable', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Grand Theft Auto',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: true, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/grandtheftautolibertycitystoriesps2.jpg',
        title: 'Grand Theft Auto: Liberty City Stories',
        date: '6.6.2006', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Grand Theft Auto',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/grandtheftautoIVpc.jpg',
        title: 'Grand Theft Auto IV',
        date: '2.12.2008', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Grand Theft Auto',
		ownership: ['physical', 'steam'],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: true, // true or false
        readTVTropes: true, // true or false
        playedDLC: true, // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/grandtheftautoVpc.jpg',
        title: 'Grand Theft Auto V',
        date: '14.4.2015', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Grand Theft Auto',
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/granturismops1.jpg',
        title: 'Gran Turismo',
        date: '8.5.1998', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation', // Must match one in categories
        genre: 'Racing Sim', // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '2.5/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/spyrothedragonps1.jpg',
        title: 'Spyro the Dragon',
        date: '9.9.1998', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation', // Must match one in categories
        genre: '3D Platformer', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/pokemonredgb.jpg',
        title: 'Pokemon Red',
        date: '28.9.1998', // Format: Month.Year (e.g., '12.2023')
        console: 'Game Boy', // Must match one in categories
        genre: 'Turn-based RPG', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Pokemon',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: 'All Pokemon captured' // Optional
    },		
	{
        image: 'images/Video game covers/pokemongoldgbc.jpg',
        title: 'Pokemon Gold',
        date: '13.10.2000', // Format: Month.Year (e.g., '12.2023')
        console: 'Game Boy Color', // Must match one in categories
        genre: 'Turn-based RPG', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Pokemon',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/pokemonrubygba.jpg',
        title: 'Pokemon Ruby',
        date: '19.3.2003', // Format: Month.Year (e.g., '12.2023')
        console: 'Game Boy Advance', // Must match one in categories
        genre: 'Turn-based RPG', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Pokemon',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/halflifepc.jpg',
        title: 'Half-Life',
        date: '19.11.1998', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Half-Life',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/halflifeopposingforcepc.jpg',
        title: 'Half-Life: Opposing Force',
        date: '31.10.1999', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Half-Life',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/halflifeblueshift.jpg',
        title: 'Half-Life: Blue Shift',
        date: '11.6.2001', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Half-Life',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/halflife2pc.jpg',
        title: 'Half-Life 2',
        date: '11.6.2001', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Half-Life',
		ownership: ['physical', 'steam'],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/halflife2lostcoastpc.jpg',
        title: 'Half-Life 2: Lost Coast',
        date: '27.10.2005', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Half-Life',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/halflife2episodeonepc.jpg',
        title: 'Half-Life 2: Episode One',
        date: '1.6.2006', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Half-Life',
		ownership: ['physical', 'steam'],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/halflife2episodetwopc.jpg',
        title: 'Half-Life 2: Episode Two',
        date: '10.10.2007', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
    franchise: 'Half-Life',
		ownership: ['physical', 'steam'],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/blackmesapc.jpg',
        title: 'Black Mesa',
        date: '14.9.2012', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'steam',
		ownership: ['physical', 'steam'],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/thiefthedarkprojectpc.jpg',
        title: 'Thief: The Dark Project',
        date: '30.11.1998', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Stealth', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/unrealgoldpc.jpg',
        title: 'Unreal Gold',
        date: '1999', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Unreal',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/unrealiitheawakeningxbox.jpg',
        title: 'Unreal II: The Awakening',
        date: '10.2.2004', // Format: Month.Year (e.g., '12.2023')
        console: 'Xbox', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Unreal',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/unrealanthologypc.jpg',
        title: 'Unreal Anthology',
        date: '31.10.2006', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Compilation', // Must match one in categories
    status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Unreal',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },			
	{
        image: 'images/Video game covers/mystmasterpieceeditionpc.jpg',
        title: 'Myst: Masterpiece Edition',
        date: '2.1.1999', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Point-and-click adventure', // Must match one in categories
        status: 'notplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/silenthillps1.jpg',
        title: 'Silent Hill',
        date: '24.2.1999', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation', // Must match one in categories
        genre: 'Survival Horror', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Silent Hill',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/silenthill2ps2.jpg',
        title: 'Silent Hill 2',
        date: '24.9.2001', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'Survival Horror', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Silent Hill',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/silenthill3ps2.jpg',
        title: 'Silent Hill 3',
        date: '23.5.2003', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'Survival Horror', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Silent Hill',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/silenthill4theroomps2.jpg',
        title: 'Silent Hill 4: The Room',
        date: '7.9.2004', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'Survival Horror', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Silent Hill',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/silenthill4theroomxbox.jpg',
        title: 'Silent Hill 4: The Room',
        date: '7.9.2004', // Format: Month.Year (e.g., '12.2023')
        console: 'Xbox', // Must match one in categories
        genre: 'Survival Horror', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Silent Hill',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/silenthilloriginspsp.jpg',
        title: 'Silent Hill: Origins',
        date: '6.11.2007', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation Portable', // Must match one in categories
        genre: 'Survival Horror', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Silent Hill',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/silenthilloriginsps2.jpg',
        title: 'Silent Hill: Origins',
        date: '4.3.2008', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'Survival Horror', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Silent Hill',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/silenthillhomecomingps3.jpg',
        title: 'Silent Hill: Homecoming',
        date: '30.9.2008', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: 'Survival Horror', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Silent Hill',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/silenthillhomecomingpc.jpg',
        title: 'Silent Hill: Homecoming',
        date: '6.11.2008', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Survival Horror', // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Silent Hill',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/silenthillshatteredmemoriesps2.jpg',
        title: 'Silent Hill: Shattered Memories',
        date: '19.1.2010', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: ['Adventure', 'Survival Horror'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Silent Hill',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/silenthilldownpourps3.jpg',
        title: 'Silent Hill: Downpour',
        date: '13.3.2012', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: 'Survival Horror', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Silent Hill',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/silenthillhdcollectionps3.jpg',
        title: 'Silent Hill HD Collection',
        date: '20.3.2012', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: 'Compilation', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Silent Hill',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/silenthill2remakepc.jpg',
        title: 'Silent Hill 2',
        date: '8.10.2024', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Survival Horror', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Silent Hill',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '4K' // Optional
    },		
	{
        image: 'images/Video game covers/bugsbunnylostintimeps1.jpg',
        title: 'Bugs Bunny: Lost in Time',
        date: '31.5.1999', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation', // Must match one in categories
        genre: '3D Platformer', // Must match one in categories
        status: '100percent', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/driverps1.jpg',
        title: 'Driver',
        date: '25.6.1999', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation', // Must match one in categories
        genre: ['Racing', 'Open World'], // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/tonyhawksproskaterps1.jpg',
        title: 'Tony Hawk\'s Pro Skater',
        date: '29.9.1999', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation', // Must match one in categories
        genre: 'Skating Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
	{
        image: 'images/Video game covers/amerzonetheexplorerslegacypc.jpg',
        title: 'Amerzone: The Explorer\'s Legacy',
        date: '18.10.1999', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Point-and-click adventure', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },			
	{
        image: 'images/Video game covers/medalofhonorps1.jpg',
        title: 'Medal of Honor',
        date: '31.10.1999', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/legoracersps1.jpg',
        title: 'Lego Racers',
        date: '17.12.1999', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation', // Must match one in categories
    genre: 'Kart racing', // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Lego',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/legoracers2pc.jpg',
        title: 'Lego Racers 2',
        date: '21.9.2001', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
    genre: 'Kart racing', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Lego',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/legobioniclegba.jpg',
        title: 'Lego Bionicle',
        date: '3.10.2001', // Format: Month.Year (e.g., '12.2023')
        console: 'Game Boy Advance', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Lego',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/legostarwarsgc.jpg',
        title: 'Lego Star Wars: The Video Game',
        date: '25.10.2005', // Format: Month.Year (e.g., '12.2023')
        console: 'GameCube', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: '100percent', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: ['Lego', 'Star Wars'],
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: 'Co-op /w Joro' // Optional
    },		
	{
        image: 'images/Video game covers/legoharrypotteryears14pc.jpg',
        title: 'Lego Harry Potter: Years 1-4',
        date: '25.6.2010', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: '100percent', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: ['Lego', 'Harry Potter'],
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: 'Co-op /w Joro' // Optional
    },		
	{
        image: 'images/Video game covers/legoharrypotteryears57pc.jpg',
        title: 'Lego Harry Potter: Years 5-7',
        date: '16.11.2011', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: ['Lego', 'Harry Potter'],
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },		
	{
        image: 'images/Video game covers/thelegoninjagomovievideogamepc.jpg',
        title: 'The Lego Ninjago Movie Video Game',
        date: '22.9.2017', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Lego',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/hotwheelsstunttrackdrivergbc.jpg',
        title: 'Hot Wheels Stunt Track Driver',
        date: '1.2000', // Format: Month.Year (e.g., '12.2023')
        console: 'Game Boy Color', // Must match one in categories
        genre: 'Racing', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: null, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '2.5/5', // Your rating format
        notes: '' // Optional
    },		
    {		
        image: 'images/Video game covers/thesimspc.jpg',
        title: 'The Sims',
        date: '4.2.2000', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Life Sim', // Must match one in categories
        status: 'played', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'The Sims',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },		
    {		
        image: 'images/Video game covers/thesimsgc.jpg',
        title: 'The Sims',
        date: '25.3.2003', // Format: Month.Year (e.g., '12.2023')
        console: 'GameCube', // Must match one in categories
        genre: 'Life Sim', // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'The Sims',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '2.5/5', // Your rating format
        notes: '' // Optional
    },		
    {		
        image: 'images/Video game covers/thesimsbustinoutgc.jpg',
        title: 'The Sims: Bustin\' Out',
        date: '15.12.2003', // Format: Month.Year (e.g., '12.2023')
        console: 'GameCube', // Must match one in categories
        genre: 'Life Sim', // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'The Sims',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '2.5/5', // Your rating format
        notes: '' // Optional
    },		
    {		
        image: 'images/Video game covers/thesimsbustinoutgba.jpg',
        title: 'The Sims: Bustin\' Out',
        date: '16.12.2003', // Format: Month.Year (e.g., '12.2023')
        console: 'Game Boy Advance', // Must match one in categories
        genre: 'Simulation', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'The Sims',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format
        notes: '' // Optional
    },		
    {		
        image: 'images/Video game covers/thesims2pc.jpg',
        title: 'The Sims 2',
        date: '14.9.2004', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Life Sim', // Must match one in categories
        status: 'played', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'The Sims',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },		
    {		
        image: 'images/Video game covers/theurbzsimsinthecityps2.jpg',
        title: 'The Urbz: Sims in the City',
        date: '9.11.2004', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'Life Sim', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'The Sims',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/wwfsmackdownps1.jpg',
        title: 'WWF Smackdown!',
        date: '2.3.2000', // Format: Month.Year (e.g., '12.2023')
    console: 'PlayStation', // Must match one in categories
        genre: 'Wrestling Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'WWE',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/wwfsmackdown2knowyourroleps1.jpg',
        title: 'WWF Smackdown! 2: Know Your Role',
        date: '20.11.2000', // Format: Month.Year (e.g., '12.2023')
    console: 'PlayStation', // Must match one in categories
        genre: 'Wrestling Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'WWE',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/wwfsmackdownjustbringitps2.jpg',
        title: 'WWF Smackdown! Just Bring It',
        date: '16.11.2001', // Format: Month.Year (e.g., '12.2023')
    console: 'PlayStation 2', // Must match one in categories
        genre: 'Wrestling Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'WWE',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/wwesmackdownshutyourmouthps2.jpg',
        title: 'WWE Smackdown! Shut Your Mouth',
        date: '31.10.2002', // Format: Month.Year (e.g., '12.2023')
    console: 'PlayStation 2', // Must match one in categories
        genre: 'Wrestling Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'WWE',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },   
    {		
        image: 'images/Video game covers/wwesmackdownherecomesthepainps2.jpg',
        title: 'WWE Smackdown! Here Comes the Pain',
        date: '27.10.2003', // Format: Month.Year (e.g., '12.2023')
    console: 'PlayStation 2', // Must match one in categories
        genre: 'Wrestling Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'WWE',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/wwesmackdownvsrawps2.jpg',
        title: 'WWE Smackdown! vs. Raw',
        date: '2.11.2004', // Format: Month.Year (e.g., '12.2023')
    console: 'PlayStation 2', // Must match one in categories
        genre: 'Wrestling Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'WWE',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/wwesmackdownvsraw2006ps2.jpg',
        title: 'WWE Smackdown! vs. Raw 2006',
        date: '11.11.2005', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'Wrestling Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'WWE',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/wwesmackdownvsraw2007xbox360.jpg',
        title: 'WWE Smackdown! vs. Raw 2007',
        date: '10.11.2006', // Format: Month.Year (e.g., '12.2023')
        console: 'Xbox 360', // Must match one in categories
        genre: 'Wrestling Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'WWE',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/wwesmackdownvsraw2010ps2.jpg',
        title: 'WWE Smackdown! vs. Raw 2010',
        date: '20.10.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'Wrestling Sim', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'WWE',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/shoguntotalwarpc.jpg',
        title: 'Shogun: Total War',
        date: '13.6.2000', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['4X', 'Turn-based Strategy', 'Real-time Tactics'], // Must match one in categories
        status: 'played', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '2/5', // Your rating format
        notes: '' // Optional
    },		
    {		
        image: 'images/Video game covers/deusexpc.jpg',
        title: 'Deus Ex',
        date: '23.6.2000', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'gog',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },		
    {		
        image: 'images/Video game covers/specopsIIomegasquaddreamcast.jpg',
        title: 'Spec Ops II: Omega Squad',
        date: '24.10.2000', // Format: Month.Year (e.g., '12.2023')
        console: 'Sega Dreamcast', // Must match one in categories
        genre: ['Tactical', 'First-person Shooter'], // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Spec Ops',
		ownership: null,
        watchedReviews: false, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '2/5', // Your rating format
        notes: '' // Optional
    },		
    {		
        image: 'images/Video game covers/specopsthelinepc.jpg',
        title: 'Spec Ops: The Line',
        date: '25.6.2012', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Third-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Spec Ops',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },		
    {		
        image: 'images/Video game covers/midnightclubstreetracingps2.jpg',
        title: 'Midnight Club: Street Racing',
        date: '25.10.2000', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'Arcade Racing', // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format
        notes: '' // Optional
    },		
    {		
        image: 'images/Video game covers/donaldduckgoinquackersps1.jpg',
        title: 'Donald Duck: Goin\' Quackers',
        date: '10.2000', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation', // Must match one in categories
        genre: '3D Platformer', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Disney',
		ownership: null,
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },		
    {		
        image: 'images/Video game covers/donaldduckgoinquackerspc.jpg',
        title: 'Donald Duck: Goin\' Quackers',
        date: '12.2000', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: '3D Platformer', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Disney',
		ownership: null,
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },		
    {		
        image: 'images/Video game covers/hitmancodename47pc.jpg',
        title: 'Hitman: Codename 47',
        date: '19.11.2000', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Stealth', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },		
    {		
        image: 'images/Video game covers/kaothekangaroopc.jpg',
        title: 'Kao the Kangaroo',
        date: '23.11.2000', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: '3D Platformer', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },		
    {		
        image: 'images/Video game covers/nicktoonsracinggbc.jpg',
        title: 'Nicktoons Racing',
        date: '27.11.2000', // Format: Month.Year (e.g., '12.2023')
        console: 'Game Boy Color', // Must match one in categories
        genre: ['Top-down', 'Racing'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '2.5/5', // Your rating format
        notes: '' // Optional
    },		
    {		
        image: 'images/Video game covers/evildeadhailtothekingps1.jpg',
        title: 'Evil Dead: Hail to the King',
        date: '5.12.2000', // Format: Month.Year (e.g., '12.2023')
    console: 'PlayStation', // Must match one in categories
        genre: 'Survival Horror', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format
        notes: '' // Optional
    },		
    {		
        image: 'images/Video game covers/americanmcgeesalicepc.jpg',
        title: 'American McGee\'s Alice',
        date: '6.12.2000', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Third-person Shooter', 'Action-adventure'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },		
    {		
        image: 'images/Video game covers/serioussamthefirstencounterpc.jpg',
        title: 'Serious Sam: The First Encounter',
        date: '21.3.2001', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Serious Sam',
		ownership: ['physical','steam'],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },		
    {		
        image: 'images/Video game covers/serioussamthesecondencounterpc.jpg',
        title: 'Serious Sam: The Second Encounter',
        date: '18.1.2002', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Serious Sam',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/serioussamxbox.jpg',
        title: 'Serious Sam',
        date: '10.11.2002', // Format: Month.Year (e.g., '12.2023')
        console: 'Xbox', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Serious Sam',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/serioussamIIxbox.jpg',
        title: 'Serious Sam 2',
        date: '10.10.2005', // Format: Month.Year (e.g., '12.2023')
        console: 'Xbox', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Serious Sam',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/serioussamiipc.jpg',
        title: 'Serious Sam 2',
        date: '11.10.2005', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Serious Sam',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/serioussamhdthefirstencounterpc.jpg',
        title: 'Serious Sam HD: The First Encounter',
        date: '24.11.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Serious Sam',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: 'Co-op /w Joro' // Optional
    },
    {		
        image: 'images/Video game covers/serioussamhdthesecondencounterpc.jpg',
        title: 'Serious Sam HD: The Second Encounter',
        date: '28.4.2010', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Serious Sam',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/serioussam3bfepc.jpg',
        title: 'Serious Sam 3: BFE',
        date: '22.11.2011', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Serious Sam',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/serioussamclassicsrevolutionpc.jpg',
        title: 'Serious Sam: Classics Revolution',
        date: '30.8.2019', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Serious Sam',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/sidmeierscivilizationiiipc.jpg',
        title: 'Sid Meier\'s Civilization III',
        date: '30.10.2001', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['4X', 'Turn-based Strategy'], // Must match one in categories
        status: 'played', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Sid Meier\'s Civilization',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '2.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/sidmeierscivilizationivbeyondtheswordpc.jpg',
        title: 'Sid Meier\'s Civilization IV: Beyond the Sword',
        date: '20.7.2007', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['4X', 'Turn-based Strategy'], // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Sid Meier\'s Civilization',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/projectgothamracingxbox.jpg',
        title: 'Project Gotham Racing',
        date: '14.11.2001', // Format: Month.Year (e.g., '12.2023')
        console: 'Xbox', // Must match one in categories
        genre: 'Arcade Racing', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/harrypotterandthesorcersstonepc.jpg',
        title: 'Harry Potter and the Sorcerer\'s Stone',
        date: '16.11.2001', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Harry Potter',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/harrypotterandthesorcersstoneps1.jpg',
        title: 'Harry Potter and the Sorcerer\'s Stone',
        date: '16.11.2001', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Harry Potter',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/harrypotterandthechamberofsecretspc.jpg',
        title: 'Harry Potter and the Chamber of Secrets',
        date: '15.11.2002', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Harry Potter',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/harrypotterandthechamberofsecretsps2.jpg',
        title: 'Harry Potter and the Chamber of Secrets',
        date: '15.11.2002', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Harry Potter',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/harrypotterquidditchworldcuppc.jpg',
        title: 'Harry Potter: Quidditch World Cup',
        date: '28.10.2003', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Sports Sim', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Harry Potter',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/harrypotterandthesorcersstoneps2.jpg',
        title: 'Harry Potter and the Sorcerer\'s Stone',
        date: '9.12.2003', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Harry Potter',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/harrypotterandtheprisonerofazkabanpc.jpg',
        title: 'Harry Potter and the Prisoner of Azkaban',
        date: '25.5.2004', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Harry Potter',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/harrypotterandthegobletoffirepc.jpg',
        title: 'Harry Potter and the Goblet of Fire',
        date: '8.11.2005', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Shoot \'em up', 'Action-adventure'], // Must match one in categories
        status: '100percent', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Harry Potter',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: 'Co-op /w Joro, Chokoikata & Gopeto' // Optional
    },
    {		
        image: 'images/Video game covers/harrypotterandtheorderofthephoenixpc.jpg',
        title: 'Harry Potter and the Order of the Phoenix',
        date: '25.6.2007', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Harry Potter',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/harrypotterandtheorderofthephoenixps2.jpg',
        title: 'Harry Potter and the Order of the Phoenix',
        date: '25.6.2007', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Harry Potter',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/harrypotterandthehalfbloodprincepc.jpg',
        title: 'Harry Potter and the Half-Blood Prince',
        date: '30.6.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Harry Potter',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/harrypotterandthedeathlyhallowspart1pc.jpg',
        title: 'Harry Potter and the Deathly Hallows - Part 1',
        date: '16.11.2010', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Harry Potter',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/harrypotterandthedeathlyhallowspart2pc.jpg',
        title: 'Harry Potter and the Deathly Hallows - Part 2',
        date: '12.7.2011', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Harry Potter',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/hogwartslegacypc.jpg',
        title: 'Hogwarts Legacy',
        date: '10.2.2023', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: '100percent', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Harry Potter',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/returntocastlewolfensteinpc.jpg',
        title: 'Return to Castle Wolfenstein',
        date: '19.11.2001', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: '100percent', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Wolfenstein',
		ownership: ['physical', 'steam'],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/returntocastlewolfensteintidesofwarxbox.jpg',
        title: 'Return to Castle Wolfenstein: Tides of War',
        date: '6.5.2003', // Format: Month.Year (e.g., '12.2023')
        console: 'Xbox', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: '100percent', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'Wolfenstein',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/returntocastlewolfensteinoperationresurrectionps2.jpg',
        title: 'Return to Castle Wolfenstein: Operation Resurrection',
        date: '30.5.2003', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: '100percent', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: 'true',		
		franchise: 'Wolfenstein',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/wolfensteinpc.jpg',
        title: 'Wolfenstein',
        date: '18.8.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Wolfenstein',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/wolfensteintheneworderpc.jpg',
        title: 'Wolfenstein: The New Order',
        date: '19.5.2014', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Wolfenstein',
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/yugiohforbiddenmemoriesps1.jpg',
        title: 'Yu-Gi-Oh! Forbidden Memories',
        date: '20.3.2002', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation', // Must match one in categories
        genre: 'Card Game', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/mafiapc.jpg',
        title: 'Mafia',
        date: '27.8.2002', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Mafia',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/mafiaiipc.jpg',
        title: 'Mafia II',
        date: '24.8.2010', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Mafia',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'false', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/thethingxbox.jpg',
        title: 'The Thing',
        date: '3.9.2002', // Format: Month.Year (e.g., '12.2023')
        console: 'Xbox', // Must match one in categories
        genre: ['Third-person Shooter', 'Survival Horror'], // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/battlefield1942pc.jpg',
        title: 'Battlefield 1942',
        date: '10.9.2002', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Tactical', 'First-person Shooter'], // Must match one in categories
        status: 'played', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/kingdomheartsps2.jpg',
        title: 'Kingdom Hearts',
        date: '16.9.2002', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'Action RPG', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/blinxthetimesweeperxbox.jpg',
        title: 'Blinx: The Time Sweeper',
        date: '8.10.2002', // Format: Month.Year (e.g., '12.2023')
        console: 'Xbox', // Must match one in categories
        genre: ['3D Platformer', 'Action-adventure'], // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/tomclancyssplintercellxbox.jpg',
        title: 'Tom Clancy\'s Splinter Cell',
        date: '18.11.2002', // Format: Month.Year (e.g., '12.2023')
        console: 'Xbox', // Must match one in categories
        genre: 'Stealth', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Tom Clancy\'s Splinter Cell',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/tomclancyssplintercellpandoratomorrowps2.jpg',
        title: 'Tom Clancy\'s Splinter Cell: Pandora Tomorrow',
        date: '11.6.2004', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'Stealth', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Tom Clancy\'s Splinter Cell',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/igi2covertstrikepc.jpg',
        title: 'I.G.I.-2: Covert Strike',
        date: '21.2.2003', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Tactical', 'First-person Shooter', 'Stealth'], // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/halocombatevolvedpc.jpg',
        title: 'Halo: Combat Evolved',
        date: '30.9.2003', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Halo',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/halo2xbox.jpg',
        title: 'Halo 2',
        date: '9.11.2004', // Format: Month.Year (e.g., '12.2023')
        console: 'Xbox', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Halo',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/warhammer40000firewarriorpc.jpg',
        title: 'Warhammer 40,000: Fire Warrior',
        date: '3.10.2003', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'gog',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/tomclancysghostreconps2.jpg',
        title: 'Tom Clancy\'s Ghost Recon',
        date: '1.12.2002', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: ['Tactical', 'First-person Shooter'], // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/callofdutypc.jpg',
        title: 'Call of Duty',
        date: '29.10.2003', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Call of Duty',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: true, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/callofdutyunitedoffensivepc.jpg',
        title: 'Call of Duty: United Offensive',
        date: '14.9.2004', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Call of Duty',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/callofdutyfinesthourps2.jpg',
        title: 'Call of Duty: Finest Hour',
        date: '16.11.2004', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Call of Duty',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/callofduty2pc.jpg',
        title: 'Call of Duty 2',
        date: '25.10.2005', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Call of Duty',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: true, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/callofduty2bigredonegc.jpg',
        title: 'Call of Duty 2: Big Red One',
        date: '1.11.2005', // Format: Month.Year (e.g., '12.2023')
        console: 'GameCube', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Call of Duty',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/callofduty2bigredonexbox.jpg',
        title: 'Call of Duty 2: Big Red One',
        date: '1.11.2005', // Format: Month.Year (e.g., '12.2023')
        console: 'Xbox', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Call of Duty',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/callofduty3ps3.jpg',
        title: 'Call of Duty 3',
        date: '14.11.2006', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Call of Duty',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/callofdutyroadstovictorypsp.jpg',
        title: 'Call of Duty: Roads to Victory',
        date: '13.3.2007', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation Portable', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Call of Duty',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/callofduty4modernwarfarepc.jpg',
        title: 'Call of Duty 4: Modern Warfare',
        date: '5.11.2007', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Call of Duty',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/callofdutyworldatwarpc.jpg',
        title: 'Call of Duty: World at War',
        date: '10.11.2008', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Call of Duty',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/callofdutyworldatwarfinalfrontsps2.jpg',
        title: 'Call of Duty: World at War - Final Fronts',
        date: '10.11.2008', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Call of Duty',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: false, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/callofdutymodernwarfare2pc.jpg',
        title: 'Call of Duty: Modern Warfare 2',
        date: '10.11.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Call of Duty',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/callofdutyblackopspc.jpg',
        title: 'Call of Duty: Black Ops',
        date: '9.11.2010', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Call of Duty',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/callofdutymodernwarfare3pc.jpg',
        title: 'Call of Duty: Modern Warfare 3',
        date: '8.11.2011', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Call of Duty',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/callofdutyblackopsiipc.jpg',
        title: 'Call of Duty: Black Ops II',
        date: '12.11.2012', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Call of Duty',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/callofdutyghostspc.jpg',
        title: 'Call of Duty: Ghosts',
        date: '4.11.2013', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Call of Duty',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/callofdutyadvancedwarfarepc.jpg',
        title: 'Call of Duty: Advanced Warfare',
        date: '3.11.2014', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Call of Duty',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/callofdutyblackopsiiipc.jpg',
        title: 'Call of Duty: Black Ops III',
        date: '5.11.2015', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Call of Duty',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/callofdutyinfinitewarfarepc.jpg',
        title: 'Call of Duty: Infinite Warfare',
        date: '3.11.2016', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Call of Duty',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/callofdutymodernwarfareremasteredpc.jpg',
        title: 'Call of Duty: Modern Warfare Remastered',
        date: '3.11.2016', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Call of Duty',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/callofdutywwiipc.jpg',
        title: 'Call of Duty WWII',
        date: '2.11.2017', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Call of Duty',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/callofdutymodernwarfare2019pc.jpg',
        title: 'Call of Duty: Modern Warfare',
        date: '25.10.2019', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Call of Duty',
		ownership: 'battlenet',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/callofdutymodernwarfare2019ps4.jpg',
        title: 'Call of Duty: Modern Warfare',
        date: '25.10.2019', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Call of Duty',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/callofdutymodernwarfare2remasteredpc.jpg',
        title: 'Call of Duty: Modern Warfare 2 Campaign Remastered',
        date: '30.4.2020', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Call of Duty',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/callofdutyblackopscoldwarpc.jpg',
        title: 'Call of Duty: Black Ops Cold War',
        date: '13.11.2020', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Call of Duty',
		ownership: 'battlenet',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/callofdutyvanguardpc.jpg',
        title: 'Call of Duty: Vanguard',
        date: '5.11.2021', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Call of Duty',
		ownership: 'battlenet',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/callofdutymodernwarfareIIpc.jpg',
        title: 'Call of Duty: Modern Warfare II ',
        date: '28.11.2022', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Call of Duty',
		ownership: 'battlenet',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/thelordoftheringsthereturnofthekingps2.jpg',
        title: 'The Lord of the Rings: Return of the King ',
        date: '6.11.2003', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: ['Action-adventure', 'Hack and Slash'], // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/dinerdashpc.jpg',
        title: 'Diner Dash ',
        date: '3.12.2003', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Time Management', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: null,
        watchedReviews: false, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/flipnicps2.jpg',
        title: 'Flipnic: Ultimate Pinball ',
        date: '23.1.2004', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'Pinball', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/feedingfrenzypc.jpeg',
        title: 'Feeding Frenzy ',
        date: '11.2.2004', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Simulation', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Feeding Frenzy',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/feedingrenzy2shipwreckshowdownpc.jpg',
        title: 'Feeding Frenzy 2: Shipwreck Showdown ',
        date: '15.3.2006', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Simulation', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Feeding Frenzy',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/farcrypc.jpg',
        title: 'Far Cry',
        date: '23.3.2004', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Far Cry',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/farcryinstinctsxbox.jpg',
        title: 'Far Cry: Instincts',
        date: '27.9.2005', // Format: Month.Year (e.g., '12.2023')
        console: 'Xbox', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Far Cry',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/farcryinstinctsevolutionxbox.jpg',
        title: 'Far Cry: Instincts - Evolution',
        date: '28.3.2006', // Format: Month.Year (e.g., '12.2023')
        console: 'Xbox', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Far Cry',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/farcryprimalpc.jpg',
        title: 'Far Cry Primal',
        date: '29.2.2016', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['First-person Shooter', 'Open World'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Far Cry',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/painkillerpc.jpg',
        title: 'Painkiller',
        date: '12.4.2004', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
    genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Painkiller',
		ownership: ['physical', 'steam'],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/painkillerbattleoutofhellpc.jpg',
        title: 'Painkiller: Battle Out of Hell',
        date: '1.12.2004', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
    genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Painkiller',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/painkillerhellwarsxbox.jpg',
        title: 'Painkiller: Hell Wars',
        date: '7.7.2006', // Format: Month.Year (e.g., '12.2023')
        console: 'Xbox', // Must match one in categories
    genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Painkiller',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/painkilleroverdosepc.jpg',
        title: 'Painkiller: Overdose',
        date: '26.10.2007', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Painkiller',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/painkillerresurrectionpc.jpg',
        title: 'Painkiller: Resurrection',
        date: '27.10.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Painkiller',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/zumadeluxepc.jpg',
        title: 'Zuma Deluxe',
        date: '15.4.2004', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Puzzle', // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: false, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/reddeadrevolverps2.jpg',
        title: 'Red Dead Revolver',
        date: '3.5.2004', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'Third-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Red Dead',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/reddeadredemptionps3.jpg',
        title: 'Red Dead Redemption',
        date: '18.5.2010', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Red Dead',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/reddeadredemptionundeadnightmareps3.jpg',
        title: 'Red Dead Redemption: Undead Nightmare',
        date: '22.11.2010', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Red Dead',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/reddeadredemption2ps4.jpg',
        title: 'Red Dead Redemption 2',
        date: '26.10.2018', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Red Dead',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/reddeadredemption2pc.jpg',
        title: 'Red Dead Redemption 2',
        date: '5.11.2019', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: '100percent', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Red Dead',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/reddeadredemptionps4.jpg',
        title: 'Red Dead Redemption',
        date: '17.8.2023', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Red Dead',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/shrek2pc.jpg',
        title: 'Shrek 2',
        date: '3.5.2004', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/monsterhunterps2.jpg',
        title: 'Monster Hunter',
        date: '21.9.2004', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'Action RPG', // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/leisuresuitlarrymagnacumlaudeps2.jpg',
        title: 'Leisure Suit Larry: Magna Cum Laude',
        date: '5.10.2004', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: ['Adventure', 'Mini-games'], // Must match one in categories
        status: '100percent', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Leisure Suit Larry',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/leisuresuitlarrymagnacumlaudexbox.jpg',
        title: 'Leisure Suit Larry: Magna Cum Laude',
        date: '5.10.2004', // Format: Month.Year (e.g., '12.2023')
        console: 'Xbox', // Must match one in categories
        genre: ['Adventure', 'Mini-games'], // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Leisure Suit Larry',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/fightclub.jpg',
        title: 'Fight Club',
        date: '16.10.2004', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'Fighting', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/theincredibles.jpg',
        title: 'The Incredibles',
        date: '31.10.2004', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/timesplittersfutureperfectps2.jpg',
        title: 'TimeSplitters: Future Perfect',
        date: '21.3.2005', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'TimeSplitters',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: 'Co-op /w Joro' // Optional
    },
    {		
        image: 'images/Video game covers/timesplittersfutureperfectgc.jpg',
        title: 'TimeSplitters: Future Perfect',
        date: '21.3.2005', // Format: Month.Year (e.g., '12.2023')
        console: 'GameCube', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'TimeSplitters',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/godofwarps2.jpg',
        title: 'God of War',
        date: '22.3.2005', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: ['Hack and Slash', 'Action-adventure'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'God of War',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/godofwariips2.jpg',
        title: 'God of War II',
        date: '13.3.2007', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: ['Hack and Slash', 'Action-adventure'], // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'God of War',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/godofwarchainsofolympuspsp.jpg',
        title: 'God of War: Chains of Olympus',
        date: '4.3.2008', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation Portable', // Must match one in categories
        genre: ['Hack and Slash', 'Action-adventure'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'God of War',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/godofwarcollectionps3.jpg',
        title: 'God of War Collection',
        date: '17.11.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: 'Compilation', // Must match one in categories
        status: 'platinum', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'God of War',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: 'Platinum only on 1' // Optional
    },
    {		
        image: 'images/Video game covers/godofwarIIIps3.jpg',
        title: 'God of War III',
        date: '16.3.2010', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: ['Hack and Slash', 'Action-adventure'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'God of War',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/godofwarghostofspartapsp.jpg',
        title: 'God of War: Ghost of Sparta',
        date: '2.11.2010', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation Portable', // Must match one in categories
        genre: ['Hack and Slash', 'Action-adventure'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'God of War',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/godofwaroriginscollectionps3.jpg',
        title: 'God of War: Origins Collection',
        date: '13.9.2011', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: 'Compilation', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'God of War',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/godofwarascensionps3.jpg',
        title: 'God of War: Ascension',
        date: '12.3.2013', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: ['Hack and Slash', 'Action-adventure'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'God of War',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/godofwar3remasteredps4.jpg',
        title: 'God of War III Remastered',
        date: '14.7.2015', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: ['Hack and Slash', 'Action-adventure'], // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'God of War',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/godofwar2018ps4.jpg',
        title: 'God of War',
        date: '20.4.2018', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'God of War',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/godofwarragnarokps4.jpg',
        title: 'God of War: Ragnarok',
        date: '9.11.2022', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'platinum', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'God of War',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'false', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/psychonautspc.jpg',
        title: 'Psychonauts',
        date: '19.4.2005', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: '3D Platformer', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/madagascarps2.jpg',
        title: 'Madagascar',
        date: '23.5.2005', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/pathologicpc.jpg',
        title: 'Pathologic',
        date: '9.6.2005', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Adventure', 'Survival'], // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: ['physical', 'steam'],
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/urbanreignps2.jpg',
        title: 'Urban Reign',
        date: '13.9.2005', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'Beat \'em up', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/totaloverdoseagunslingerstaleinmexicopc.jpg',
        title: 'Total Overdose: A Gunslinger\'s Tale in Mexico',
        date: '16.9.2005', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Third-person Shooter', 'Open World'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'gog',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/sniperelitepc.jpg',
        title: 'Sniper Elite',
        date: '30.9.2005', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Stealth', 'Third-person Shooter'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Sniper Elite',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/sniperelitev2pc.jpg',
        title: 'Sniper Elite v2',
        date: '30.4.2012', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Stealth', 'Third-person Shooter'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Sniper Elite',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/ratchetdeadlockedps2.jpg',
        title: 'Ratchet: Deadlocked',
        date: '25.10.2005', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: ['Third-person Shooter', '3D Platformer'], // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Ratchet & Clank',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/ratchet&clankcollectionps3.jpg',
        title: 'Ratchet & Clank Collection',
        date: '27.6.2012', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: 'Compilation', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Ratchet & Clank',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: 'Only the first one' // Optional
    },
    {		
        image: 'images/Video game covers/soulcalibur3ps2.jpg',
        title: 'SoulCalibur III',
        date: '25.10.2005', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'Fighting', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/guitarherops2.jpg',
        title: 'Guitar Hero',
        date: '7.11.2005', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Guitar Hero',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/guitarheroiips2.jpg',
        title: 'Guitar Hero II',
        date: '7.11.2006', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Guitar Hero',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/guitarheroencorerocksthe80sps2.jpg',
        title: 'Guitar Hero Encore: Rocks the 80s',
        date: '24.7.2007', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Guitar Hero',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/guitarheroiiilegendsofrockps2.jpg',
        title: 'Guitar Hero III: Legends of Rock',
        date: '28.10.2007', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Guitar Hero',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/guitarheroiiilegendsofrockpc.jpg',
        title: 'Guitar Hero III: Legends of Rock',
        date: '13.11.2007', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Guitar Hero',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/guitarheroontourds.jpg',
        title: 'Guitar Hero: On Tour',
        date: '22.6.2008', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo DS', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Guitar Hero',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '2.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/guitarheroaerosmithpc.jpg',
        title: 'Guitar Hero: Aerosmith',
        date: '17.10.2008', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Guitar Hero',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/guitarheroworldtourps3.jpg',
        title: 'Guitar Hero: World Tour',
        date: '26.10.2008', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Guitar Hero',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: 'Guitar' // Optional
    },
    {		
        image: 'images/Video game covers/guitarheroontourdecadesds.jpg',
        title: 'Guitar Hero On Tour: Decades',
        date: '16.11.2008', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo DS', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Guitar Hero',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '2/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/guitarherometallicawii.jpg',
        title: 'Guitar Hero: Metallica',
        date: '29.3.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo Wii', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Guitar Hero',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: 'Guitar' // Optional
    },
    {		
        image: 'images/Video game covers/guitarherometallicaps3.jpg',
        title: 'Guitar Hero: Metallica',
        date: '29.3.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Guitar Hero',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: 'Guitar' // Optional
    },
    {		
        image: 'images/Video game covers/guitarherometallicaps2.jpg',
        title: 'Guitar Hero: Metallica',
        date: '14.4.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Guitar Hero',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/guitarheroontourmodernhitsds.jpg',
        title: 'Guitar Hero On Tour: Modern Hits',
        date: '9.6.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo DS', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Guitar Hero',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '2/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/guitarherosmashhitswii.jpg',
        title: 'Guitar Hero: Smash Hits',
        date: '19.6.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo Wii', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Guitar Hero',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: 'Guitar' // Optional
    },
    {		
        image: 'images/Video game covers/guitarherosmashhitsps3.jpg',
        title: 'Guitar Hero: Smash Hits',
        date: '19.6.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Guitar Hero',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: 'Guitar' // Optional
    },
    {		
        image: 'images/Video game covers/guitarheroworldtourpc.jpg',
        title: 'Guitar Hero: World Tour',
        date: '26.7.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Guitar Hero',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: 'Guitar' // Optional
    },
    {		
        image: 'images/Video game covers/guitarhero5wii.jpg',
        title: 'Guitar Hero 5',
        date: '1.9.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo Wii', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Guitar Hero',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: 'Guitar' // Optional
    },
    {		
        image: 'images/Video game covers/guitarhero5ps3.jpg',
        title: 'Guitar Hero 5',
        date: '1.9.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Guitar Hero',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: 'Guitar' // Optional
    },
    {		
        image: 'images/Video game covers/guitarhero5ps2.jpg',
        title: 'Guitar Hero 5',
        date: '1.9.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Guitar Hero',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/bandherowii.jpg',
        title: 'Band Hero',
        date: '3.11.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo Wii', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Guitar Hero',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: 'Guitar' // Optional
    },
    {		
        image: 'images/Video game covers/bandherops3.jpg',
        title: 'Band Hero',
        date: '3.11.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Guitar Hero',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: 'Guitar' // Optional
    },
    {		
        image: 'images/Video game covers/bandherods.jpg',
        title: 'Band Hero',
        date: '3.11.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo DS', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Guitar Hero',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '1.5/5', // Your rating format
        notes: 'Guitar' // Optional
    },
    {		
        image: 'images/Video game covers/guitarherovanhalenwii.jpg',
        title: 'Guitar Hero: Van Halen',
        date: '22.12.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo Wii', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Guitar Hero',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: 'Guitar' // Optional
    },
    {		
        image: 'images/Video game covers/guitarherovanhalenps3.jpg',
        title: 'Guitar Hero: Van Halen',
        date: '22.12.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Guitar Hero',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: 'Guitar' // Optional
    },
    {		
        image: 'images/Video game covers/guitarherowarriorsofrockwii.jpg',
        title: 'Guitar Hero: Warriors of Rock',
        date: '24.9.2010', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo Wii', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Guitar Hero',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: 'Guitar' // Optional
    },
    {		
        image: 'images/Video game covers/guitarherowarriorsofrockps3.jpg',
        title: 'Guitar Hero: Warriors of Rock',
        date: '24.9.2010', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Guitar Hero',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: 'Guitar' // Optional
    },
    {		
        image: 'images/Video game covers/condemnedcriminaloriginspc.jpg',
        title: 'Condemned: Criminal Origins',
        date: '11.4.2006', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['First-person Action', 'Survival Horror'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/brainagetrainyourbraininminutesadayds.jpg',
        title: 'Brain Age: Train Your Brain in Minutes a Day!',
        date: '17.4.2006', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo DS', // Must match one in categories
        genre: ['Puzzle', 'Mini-games'], // Must match one in categories
        status: 'played', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/overthehedgegc.jpg',
        title: 'Over the Hedge',
        date: '9.5.2006', // Format: Month.Year (e.g., '12.2023')
        console: 'GameCube', // Must match one in categories
        genre: 'Beat \'em up', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/c64classix2pc.jpg',
        title: 'C64 Classix 2',
        date: '16.6.2006', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Compilation', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: null,
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/narutoultimateninjaps2.jpg',
        title: 'Naruto: Ultimate Ninja',
        date: '26.6.2006', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'Fighting', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/yakuzaps2.jpg',
        title: 'Yakuza',
        date: '5.9.2006', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Yakuza',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '4K' // Optional
    },
    {		
        image: 'images/Video game covers/theyakuzaremasteredcollectionps4.jpg',
        title: 'The Yakuza Remastered Collection',
        date: '20.8.2019', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: 'Compilation', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Yakuza',
		ownership: null,
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/companyofheroespc.jpg',
        title: 'Company of Heroes',
        date: '13.9.2006', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Real-time Strategy', // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/justcausepc.jpg',
        title: 'Just Cause',
        date: '22.9.2006', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Third-person Shooter', 'Open World'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Just Cause',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/justcause2pc.jpg',
        title: 'Just Cause 2',
        date: '23.3.2010', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Third-person Shooter', 'Open World'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Just Cause',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/bullyps2.jpg',
        title: 'Bully',
        date: '17.10.2006', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Bully',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/bullyscholarshipeditionpc.jpg',
        title: 'Bully: Scholarship Edition',
        date: '21.10.2008', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: '100percent', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Bully',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: true, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/penumbraoverturepc.jpg',
        title: 'Penumbra: Overture',
        date: '30.3.2007', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Survival Horror', 'Stealth', 'Puzzle'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Penumbra',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/penumbrablackplaguepc.jpg',
        title: 'Penumbra: Black Plague',
        date: '12.2.2008', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Survival Horror', 'Stealth', 'Puzzle'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Penumbra',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/lineage2thechaoticthronepc.jpg',
        title: 'Lineage 2: The Chaotic Throne',
        date: '11.4.2007', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'MMORPG', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/burgerislandpc.jpg',
        title: 'Burger Island',
        date: '8.5.2007', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Time Management', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: null,
        watchedReviews: false, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/thedarknessps3.jpg',
        title: 'The Darkness',
        date: '25.6.2007', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'The Darkness',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/thedarknessIIpc.jpg',
        title: 'The Darkness II',
        date: '6.2.2012', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'The Darkness',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'false', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/burgershoppc.jpg',
        title: 'Burger Shop',
        date: '7.10.2007', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Time Management', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Burger Shop',
		ownership: 'steam',
        watchedReviews: false, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/burgershop2pc.jpg',
        title: 'Burger Shop 2',
        date: '29.7.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Time Management', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Burger Shop',
		ownership: 'steam',
        watchedReviews: false, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/portalpc.jpg',
        title: 'Portal',
        date: '10.10.2007', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Puzzle', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/ben10protectorofearthps2.jpg',
        title: 'Ben 10: Protector of Earth',
        date: '30.10.2007', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'Beat \'em up', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: 'Co-op /w Ediz' // Optional
    },
    {		
        image: 'images/Video game covers/thesimpsonsgameps2.jpg',
        title: 'The Simpsons Game',
        date: '30.10.2007', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/gearsofwarpc.jpg',
        title: 'Gears of War',
        date: '6.11.2007', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Third-person Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/masseffectpc.jpg',
        title: 'Mass Effect',
        date: '16.11.2007', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Third-person Shooter', 'Action RPG'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Mass Effect',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/masseffect2pc.jpg',
        title: 'Mass Effect 2',
        date: '26.1.2010', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Third-person Shooter', 'Action RPG'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Mass Effect',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/masseffect3pc.jpg',
        title: 'Mass Effect 3',
        date: '6.3.2012', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Third-person Shooter', 'Action RPG'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Mass Effect',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/masseffectandromedapc.jpg',
        title: 'Mass Effect: Andromeda',
        date: '21.3.2017', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Third-person Shooter', 'Action RPG', 'Open World'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Mass Effect',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/masseffectlegendaryeditionpc.jpg',
        title: 'Mass Effect: Legendary Edition',
        date: '14.5.2021', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Compilation', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Mass Effect',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/uncharteddrakesfortuneps3.jpg',
        title: 'Uncharted: Drake\'s Fortune',
        date: '16.11.2007', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: ['Third-person Shooter', 'Open World'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Uncharted',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/unchartedthenathandrakecollectionps4.jpg',
        title: 'Uncharted: The Nathan Drake Collection',
        date: '7.10.2015', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: 'Compilation', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Uncharted',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/uncharted4athiefsendps4.jpg',
        title: 'Uncharted 4: A Thief\'s End',
        date: '10.5.2016', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: ['Third-person Shooter', 'Open World'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Uncharted',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/unchartedthelostlegacyps4.jpg',
        title: 'Uncharted: The Lost Legacy',
        date: '22.8.2017', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: ['Third-person Shooter', 'Open World'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Uncharted',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/rockbandps3.jpg',
        title: 'Rock Band',
        date: '20.11.2007', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Rock Band',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: 'Guitar' // Optional
    },
    {		
        image: 'images/Video game covers/rockbandps2.jpg',
        title: 'Rock Band',
        date: '18.12.2007', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Rock Band',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: 'Guitar' // Optional
    },
    {		
        image: 'images/Video game covers/rockbandtrackpackvolume1ps2.jpg',
        title: 'Rock Band: Track Pack - Volume 1',
        date: '15.7.2008', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Rock Band',
		ownership: null,
        watchedReviews: false, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format
        notes: 'Guitar' // Optional
    },
    {		
        image: 'images/Video game covers/rockband2ps3.jpg',
        title: 'Rock Band 2',
        date: '19.10.2008', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Rock Band',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: 'Guitar' // Optional
    },
    {		
        image: 'images/Video game covers/acdcliverockbandtrackapckps3.jpg',
        title: 'AC/DC Live: Rock Band Track Pack',
        date: '2.11.2008', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Rock Band',
		ownership: null,
        watchedReviews: false, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format
        notes: 'Guitar' // Optional
    },
    {		
        image: 'images/Video game covers/acdcliverockbandtrackapckwii.jpg',
        title: 'AC/DC Live: Rock Band Track Pack',
        date: '16.11.2008', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo Wii', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Rock Band',
		ownership: null,
        watchedReviews: false, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format
        notes: 'Guitar' // Optional
    },
    {		
        image: 'images/Video game covers/rockbandtrackpackvolume2ps2.jpg',
        title: 'Rock Band: Track Pack - Volume 2',
        date: '17.11.2008', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 2', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Rock Band',
		ownership: null,
        watchedReviews: false, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/rockbandtrackpackvolume2ps3.jpg',
        title: 'Rock Band: Track Pack - Volume 2',
        date: '17.11.2008', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Rock Band',
		ownership: null,
        watchedReviews: false, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format
        notes: 'Guitar' // Optional
    },
    {		
        image: 'images/Video game covers/rockband2wii.jpg',
        title: 'Rock Band 2',
        date: '18.12.2008', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo Wii', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Rock Band',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: 'Guitar' // Optional
    },
    {		
        image: 'images/Video game covers/rockbandtrackpackclassicrockps3.jpg',
        title: 'Rock Band Track Pack: Classic Rock',
        date: '19.5.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Rock Band',
		ownership: null,
        watchedReviews: false, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: 'Guitar' // Optional
    },
    {		
        image: 'images/Video game covers/rockbandunpluggedpsp.jpg',
        title: 'Rock Band Unplugged',
        date: '9.6.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation Portable', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Rock Band',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/rockbandcountrytrackpackps3.jpg',
        title: 'Rock Band Country Track Pack',
        date: '21.7.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Rock Band',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: 'Guitar' // Optional
    },
    {		
        image: 'images/Video game covers/thebeatlesrockbandwii.jpg',
        title: 'The Beatles: Rock Band',
        date: '9.9.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo Wii', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Rock Band',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: 'Guitar' // Optional
    },
    {		
        image: 'images/Video game covers/thebeatlesrockbandps3.jpg',
        title: 'The Beatles: Rock Band',
        date: '9.9.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Rock Band',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: 'Guitar' // Optional
    },
    {		
        image: 'images/Video game covers/rockbandmetaltrackpackps3.jpg',
        title: 'Rock Band Metal Track Pack',
        date: '22.9.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Rock Band',
		ownership: null,
        watchedReviews: false, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: 'Guitar' // Optional
    },
    {		
        image: 'images/Video game covers/legorockbandwii.jpg',
        title: 'Lego Rock Band',
        date: '3.11.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo Wii', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Rock Band',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format
        notes: 'Guitar' // Optional
    },
    {		
        image: 'images/Video game covers/legorockbandps3.jpg',
        title: 'Lego Rock Band',
        date: '3.11.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Rock Band',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format
        notes: 'Guitar' // Optional
    },
    {		
        image: 'images/Video game covers/greendayrockbandwii.jpg',
        title: 'Green Day: Rock Band',
        date: '8.6.2010', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo Wii', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Rock Band',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: 'Guitar' // Optional
    },
    {		
        image: 'images/Video game covers/greendayrockbandps3.jpg',
        title: 'Green Day: Rock Band',
        date: '8.6.2010', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Rock Band',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: 'Guitar' // Optional
    },
    {		
        image: 'images/Video game covers/rockband3ps3.jpg',
        title: 'Rock Band 3',
        date: '26.10.2010', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Rock Band',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: 'Guitar' // Optional
    },
    {		
        image: 'images/Video game covers/rockbandcountrytrackpack2ps3.jpg',
        title: 'Rock Band Country Track Pack 2',
        date: '1.2.2011', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: 'Music Sim', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Rock Band',
		ownership: null,
        watchedReviews: false, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: 'Guitar' // Optional
    },
    {		
        image: 'images/Video game covers/assassinscreedaltairschroniclesds.jpg',
        title: 'Assassin\'s Creed: Altair\'s Chronicles',
        date: '5.2.2008', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo DS', // Must match one in categories
        genre: ['2D Platformer', 'Action-adventure'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: 'Assassin\'s Creed',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/assassinscreedpc.jpg',
        title: 'Assassin\'s Creed',
        date: '8.4.2008', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Assassin\'s Creed',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: true, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/assassinscreedbloodlinespsp.jpg',
        title: 'Assassin\'s Creed: Bloodlines',
        date: '17.11.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation Portable', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Assassin\'s Creed',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/assassinscreediipc.jpg',
        title: 'Assassin\'s Creed II',
        date: '4.3.2010', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Assassin\'s Creed',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: true, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/assassinscreedbrotherhoodpc.jpg',
        title: 'Assassin\'s Creed: Brotherhood',
        date: '17.3.2011', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Assassin\'s Creed',
		ownership: 'ubisoft',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: true, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'false', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/assassinscreedrevelationspc.jpg',
        title: 'Assassin\'s Creed: Revelations',
        date: '29.11.2011', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Assassin\'s Creed',
		ownership: 'ubisoft',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: true, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'false', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/assassinscreediiipc.jpg',
        title: 'Assassin\'s Creed III',
        date: '20.11.2012', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Assassin\'s Creed',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: true, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'false', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/assassinscreedivblackflagpc.jpg',
        title: 'Assassin\'s Creed IV: Black Flag',
        date: '19.11.2013', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Assassin\'s Creed',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: true, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'false', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/assassinscreediiiliberationhdpc.jpg',
        title: 'Assassin\'s Creed III: Liberation HD',
        date: '15.1.2014', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Assassin\'s Creed',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: true, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/professorlaytonandthecuriousvillageds.jpg',
        title: 'Professor Layton and the Curious Village',
        date: '10.2.2008', // Format: Month.Year (e.g., '12.2023')
        console: 'Nintendo DS', // Must match one in categories
        genre: ['Puzzle', 'Mini-games'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/cookingacademypc.jpg',
        title: 'Cooking Academy',
        date: '4.4.2008', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Cooking Sim', // Must match one in categories
        status: '100percent', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Cooking Academy',
		ownership: null,
        watchedReviews: false, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/cookingacademy2worldcuisinepc.jpg',
        title: 'Cooking Academy 2: World Cuisine',
        date: '21.1.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Cooking Sim', // Must match one in categories
        status: '100percent', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Cooking Academy',
		ownership: null,
        watchedReviews: false, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/cookingacademy3recipeforsuccesspc.jpg',
        title: 'Cooking Academy 3: Recipe for Success',
        date: '2.6.2012', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Cooking Sim', // Must match one in categories
        status: '100percent', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Cooking Academy',
		ownership: null,
        watchedReviews: false, // true or false
        watchedTrailers: false, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/turokpc.jpg',
        title: 'Turok',
        date: '22.4.2008', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/racedrivergridpc.jpg',
        title: 'Race Driver: Grid',
        date: '30.5.2008', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Arcade Racing', // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Grid',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/grid2pc.jpg',
        title: 'GRID 2',
        date: '27.5.2013', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Arcade Racing', // Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Grid',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/gogogourmetpc.jpg',
        title: 'Go-Go Gourmet',
        date: '23.6.2008', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Hidden Object', // Must match one in categories
        status: '100percent', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Go-Go Gourmet',
		ownership: null,
        watchedReviews: false, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/gogogourmet2chefoftheyearpc.jpg',
        title: 'Go-Go Gourmet 2: Chef of the Year',
        date: '8.9.2008', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Hidden Object', // Must match one in categories
        status: '100percent', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Go-Go Gourmet',
		ownership: null,
        watchedReviews: false, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/americanmcgeesgrimmpc.jpg',
        title: 'American McGee\'s Grimm',
        date: '31.7.2008', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Action-adventure', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'gog',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/thewitcherenhancededitionpc.jpg',
        title: 'The Witcher: Enhanced Edition',
        date: '16.9.2008', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Action RPG', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'The Witcher',
		ownership: 'gog',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'false', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/thewitcher2assassinsofkingspc.jpg',
        title: 'The Witcher 2: Assassins of Kings',
        date: '17.5.2011', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Action RPG', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'The Witcher',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/left4deadpc.jpg',
        title: 'Left 4 Dead',
        date: '17.11.2008', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['First-person Shooter', 'Survival Horror'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/mirrorsedgepc.jpg',
        title: 'Mirror\'s Edge',
        date: '21.1.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['First-person Action', '3D Platformer'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'false', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/xbladespc.jpg',
        title: 'X-Blades',
        date: '6.2.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Hack and Slash', 'Action-adventure'], // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/alienshooter2reloadedpc.jpg',
        title: 'Alien Shooter 2: Reloaded',
        date: '14.3.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Twin-stick Shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/infamousps3.jpg',
        title: 'Infamous',
        date: '26.5.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Infamous',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/infamous2ps3.jpg',
        title: 'Infamous 2',
        date: '7.6.2011', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Infamous',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/infamoussecondsonps4.jpg',
        title: 'Infamous: Second Son',
        date: '21.3.2014', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Infamous',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/infamousfirstlightps4.jpg',
        title: 'Infamous: First Light',
        date: '26.8.2014', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: ['Action-adventure', 'Open World'], // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Infamous',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/demonssoulsps3.jpg',
        title: 'Demon\'s Souls',
        date: '16.10.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: 'Action RPG', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/dragonageoriginspc.jpg',
        title: 'Dragon Age: Origins',
        date: '3.11.2009', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Action RPG', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Dragon Age',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/dragonageoriginsawakeningpc.jpg',
        title: 'Dragon Age: Origins - Awakening',
        date: '16.3.2010', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Action RPG', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Dragon Age',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/darksidersps3.jpg',
        title: 'Darksiders',
        date: '5.1.2010', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: ['Hack and Slash', 'Action-adventure'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: true,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/dantesinfernops3.jpg',
        title: 'Dante\'s Inferno',
        date: '4.2.2010', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: ['Hack and Slash', 'Action-adventure'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/heavyrainps3.jpg',
        title: 'Heavy Rain',
        date: '23.2.2010', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: 'Narrative Adventure', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/metro2033pc.jpg',
        title: 'Metro 2033',
        date: '16.3.2010', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
    genre: ['First-person Shooter', 'Survival Horror'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Metro',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/metrolastlightpc.jpg',
        title: 'Metro: Last Light',
        date: '14.5.2013', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['First-person shooter', 'Survival Horror'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Metro',
		ownership: 'steam',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/samandmaxthedevilsplayhousepc.jpg',
        title: 'Sam & Max: The Devil\'s Playhouse',
        date: '15.4.2010', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
    genre: 'Point-and-click adventure', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Sam & Max',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/samandmaxsavetheworldremasteredpc.jpg',
        title: 'Sam & Max Save the World Remastered',
        date: '2.12.2020', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
    genre: 'Point-and-click adventure', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Sam & Max',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/goldenaxepc.jpg',
        title: 'Golden Axe',
        date: '1.6.2010', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Hack and Slash', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/singularitypc.jpg',
        title: 'Singularity',
        date: '25.6.2010', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter', // Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/amnesiathedarkdescentpc.jpg',
        title: 'Amnesia: The Dark Descent',
        date: '8.9.2010', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Survival Horror', 'Stealth'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Amnesia',
		ownership: ['steam', 'gog'],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/amnesiaamachineforpigspc.jpg',
        title: 'Amnesia: A Machine for Pigs',
        date: '10.9.2013', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Survival Horror', 'Stealth'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Amnesia',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/amnesiarebirthpc.jpg',
        title: 'Amnesia: Rebirth',
        date: '15.9.2020', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Survival Horror', 'Stealth'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Amnesia',
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/borderlandsgameoftheyeareditionpc.jpg',
        title: 'Borderlands: Game of the Year Edition',
        date: '12.10.2010', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['First-person shooter', 'Action RPG', 'Open World'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Borderlands',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/borderlands2gameoftheyeareditionpc.jpg',
        title: 'Borderlands 2: Game of the Year Edition',
        date: '8.10.2013', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['First-person shooter', 'Action RPG', 'Open World'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Borderlands',
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '4K' // Optional
    },
    {		
        image: 'images/Video game covers/gunstarheroespc.jpg',
        title: 'Gunstar Heroes',
        date: '26.1.2011', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Shoot \'em up', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/homefrontpc.jpg',
        title: 'Homefront',
        date: '14.3.2011', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person shooter', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/dirt3pc.jpg',
        title: 'Dirt 3',
        date: '23.5.2011', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Arcade Racing', // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/dirtshowdownpc.jpg',
        title: 'Dirt: Showdown',
        date: '23.5.2012', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Arcade Racing', 'Vehicular Combat'], // Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/dirtrallypc.jpg',
        title: 'Dirt Rally',
        date: '27.4.2015', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Racing Sim',// Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/dukenukemforeverpc.jpg',
        title: 'Duke Nukem Forever',
        date: '10.6.2011', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: true, // true or false
        readTVTropes: true, // true or false
        playedDLC: 'false', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/shadowsofthedamnedps3.jpg',
        title: 'Shadows of the Damned',
        date: '21.6.2011', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 3', // Must match one in categories
        genre: 'Third-person Shooter',// Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/limbopc.jpg',
        title: 'Limbo',
        date: '2.8.2011', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['2D Platformer', 'Puzzle'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
    ownership: ['steam', 'gog'],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/lanoirethecompleteeditionpc.jpg',
        title: 'L.A. Noire: The Complete Edition',
        date: '8.11.2011', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Action-adventure', 'Open World'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/cavestorypc.jpg',
        title: 'Cave Story+',
        date: '22.11.2011', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Metroidvania',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/alanwakepc.jpg',
        title: 'Alan Wake',
        date: '16.2.2012', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Action-adventure', 'Survival Horror'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Alan Wake',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'false', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/alanwakesamericannightmarepc.jpg',
        title: 'Alan Wake\'s American Nightmare',
        date: '22.5.2012', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Action-adventure', 'Survival Horror'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Alan Wake',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/controlpc.jpg',
        title: 'Control',
        date: '27.8.2019', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Action-adventure', 'Third-person Shooter'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Alan Wake',
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '4K' // Optional
    },
    {		
        image: 'images/Video game covers/cryoffearpc.jpg',
        title: 'Cry of Fear',
        date: '22.2.2012', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Survival Horror', 'First-person Shooter'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/binarydomainpc.jpg',
        title: 'Binary Domain',
        date: '27.4.2012', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Third-person Shooter',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/astoryaboutmyunclepc.jpg',
        title: 'A Story About My Uncle',
        date: '30.7.2012', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Puzzle', '3D Platformer'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/darksoulspreparetodieeditionpc.jpg',
        title: 'Dark Souls: Prepare to Die Edition',
        date: '23.8.2012', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Action RPG',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Dark Souls',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/darksoulsiipc.jpg',
        title: 'Dark Souls II',
        date: '24.4.2014', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Action RPG',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Dark Souls',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/darksoulsiischolarofthefirstsinpc.jpg',
        title: 'Dark Souls II: Scholar of the First Sin',
        date: '1.4.2015', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Action RPG',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Dark Souls',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/darksoulsiiipc.jpg',
        title: 'Dark Souls III',
        date: '11.4.2016', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Action RPG',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Dark Souls',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/darksoulsremasteredpc.jpg',
        title: 'Dark Souls Remastered',
        date: '23.5.2018', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Action RPG',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Dark Souls',
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/jetsetradiohdpc.jpg',
        title: 'Jet Set Radio HD',
        date: '19.9.2012', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Skating Sim',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/hellyeahwrathofthedeadrabbitpc.jpg',
        title: 'Hell Yeah! Wrath of the Dead Rabbit',
        date: '3.10.2012', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Metroidvania',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'false', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/cookservedeliciouspc.jpg',
        title: 'Cook, Serve, Delicious!',
        date: '5.10.2012', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Cooking Sim',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'gog',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/dishonoredpc.jpg',
        title: 'Dishonored',
        date: '9.10.2012', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Stealth',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Dishonored',
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/dishonored2ps4.jpg',
        title: 'Dishonored 2',
        date: '11.11.2016', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: 'Stealth',// Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Dishonored',
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/vikingbattleforasgardpc.jpg',
        title: 'Viking: Battle for Asgard',
        date: '17.10.2012', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Action-adventure', 'Hack and Slash'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/guacameleegoldeditionpc.jpg',
        title: 'Guacamelee! Gold Edition',
        date: '8.8.2013', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre:'Metroidvania',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/brotherataleoftwosonspc.jpg',
        title: 'Brother - A Tale of Two Sons',
        date: '3.9.2013', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre:'Puzzle',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/outlastpc.jpg',
        title: 'Outlast',
        date: '3.9.2013', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre:['Survival Horror', 'Stealth'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: ['steam', 'epic'],
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/outlast2pc.jpg',
        title: 'Outlast 2',
        date: '24.4.2017', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Survival Horror', 'Stealth'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/mirrormooneppc.jpg',
        title: 'MirrorMoon EP',
        date: '4.9.2013', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Space Sim',// Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '2.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/killzoneshadowfallps4.jpg',
        title: 'Killzone Shadow Fall',
        date: '15.11.2013', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: 'First-person Shooter',// Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/knackps4.jpg',
        title: 'Knack',
        date: '15.11.2013', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: ['Beat \'em up', 'Action-adventure'],// Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/knackiips4.jpg',
        title: 'Knack II',
        date: '5.9.2017', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: ['Beat \'em up', 'Action-adventure'],// Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/longestnightpc.png',
        title: 'Longest Night',
        date: '21.12.2013', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Narrative Adventure',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: null,
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/southparkthestickoftruthpc.jpg',
        title: 'South Park: The Stick of Truth',
        date: '4.3.2014', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Turn-based RPG',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/killerisdeadnightmareeditionpc.jpg',
        title: 'Killer Is Dead: Nightmare Edition',
        date: '23.5.2014', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Hack and Slash',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/lifelessplanetpc.jpg',
        title: 'Lifeless Planet',
        date: '6.6.2014', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Narrative Adventure', 'Puzzle', '3D Platformer'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/spintirespc.jpg',
        title: 'SpinTires',
        date: '13.6.2014', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Vehicle Sim',// Must match one in categories
        status: 'played', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: null,
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '2/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/thelastofusremasteredps4.jpg',
        title: 'The Last of Us Remastered',
        date: '29.7.2014', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: 'Action-adventure',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'The Last of Us',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/thelastofuspartiips4.jpg',
        title: 'The Last of Us Part II',
        date: '19.6.2020', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: 'Action-adventure',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'The Last of Us',
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/neveralonekisimaingitchunapc.jpg',
        title: 'Never Alone (Kisima Ingitchuna)',
        date: '18.11.2014', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: '2D Platformer',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/dyinglightpc.jpg',
        title: 'Dying Light',
        date: '27.1.2015', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Action-adventure', 'Open World'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/sunlessseapc.jpg',
        title: 'Sunless Sea',
        date: '6.2.2015', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Roguelike', 'Simulation'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,
        assisted: true,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: 'Used cheats' // Optional
    },
    {		
        image: 'images/Video game covers/theorder1886ps4.jpg',
        title: 'The Order: 1886',
        date: '20.2.2015', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: 'Third-person Shooter',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/bloodborneps4.jpg',
        title: 'Bloodborne',
        date: '24.3.2015', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: 'Action RPG',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/spookysjumpscaremansionpc.jpg',
        title: 'Spooky\'s Jump Scare Mansion',
        date: '24.4.2015', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Survival Horror',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'false', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/f12015pc.jpg',
        title: 'F1 2015',
        date: '9.7.2015', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Racing Sim',// Must match one in categories
        status: 'played', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/untildawnps4.jpg',
        title: 'Until Dawn',
        date: '9.7.2015', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: ['Narrative Adventure', 'Survival Horror'],// Must match one in categories
        status: 'platinum', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/undertalepc.jpg',
        title: 'Undertale',
        date: '15.9.2015', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Turn-based RPG',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/somapc.jpg',
        title: 'Soma',
        date: '21.9.2015', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Survival Horror', 'Stealth'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'gog',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/minecraftstorymodeseason1pc.jpg',
        title: 'Minecraft: Story Mode Season 1',
        date: '13.10.2015', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Narrative Adventure',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/humanresourcemachinepc.jpg',
        title: 'Human Resource Machine',
        date: '13.10.2015', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Puzzle',// Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/darkestdungeonpc.jpg',
        title: 'Darkest Dungeon',
        date: '19.1.2016', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Turn-based RPG', 'Roguelike'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '4K' // Optional
    },
    {		
        image: 'images/Video game covers/forgottenhillfallbrowser.webp',
        title: 'Forgotten Hill: Fall',
        date: '22.1.2016', // Format: Month.Year (e.g., '12.2023')
        console: 'Browser', // Must match one in categories
        genre: 'Puzzle',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Forgotten Hill',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: 'Co-op /w Reni❤️' // Optional
    },
    {		
        image: 'images/Video game covers/forgottenhillpuppeteerbrowser.png',
        title: 'Forgotten Hill: Puppeteer',
        date: '30.6.2016', // Format: Month.Year (e.g., '12.2023')
        console: 'Browser', // Must match one in categories
        genre: 'Puzzle',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Forgotten Hill',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: 'Co-op /w Reni❤️' // Optional
    },
    {		
        image: 'images/Video game covers/forgottenhillsurgerybrowser.png',
        title: 'Forgotten Hill: Surgery',
        date: '21.12.2016', // Format: Month.Year (e.g., '12.2023')
        console: 'Browser', // Must match one in categories
        genre: 'Puzzle',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Forgotten Hill',
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: 'Co-op /w Reni❤️' // Optional
    },
    {		
        image: 'images/Video game covers/layersoffearpc.jpg',
        title: 'Layers of Fear',
        date: '16.2.2016', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Narrative Adventure',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/enterthegungeonpc.jpg',
        title: 'Enter the Gungeon',
        date: '5.4.2016', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Twin-stick Shooter', 'Roguelike'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/overwatchpc.jpg',
        title: 'Overwatch',
        date: '24.5.2016', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Hero Shooter',// Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/deadbydaylightpc.jpg',
        title: 'Dead by Daylight',
        date: '14.6.2016', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Survival Horror',// Must match one in categories
        status: 'played', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/insidepc.jpg',
        title: 'Inside',
        date: '7.7.2016', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: '2D Platformer',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/abzupc.jpg',
        title: 'Abzu',
        date: '2.8.2016', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Narrative Adventure',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/sallyfacepc.jpg',
        title: 'Sally Face',
        date: '16.8.2016', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
    genre: 'Point-and-click adventure',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: 'Co-op /w Reni❤️' // Optional
    },
    {		
        image: 'images/Video game covers/titanquestanniversaryeditionpc.jpg',
        title: 'Titan Quest: Anniversary Edition',
        date: '31.8.2016', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Isometric', 'Action RPG'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'false', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/bioshockremasteredpc.jpg',
        title: 'Bioshock Remastered',
        date: '16.9.2016', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Bioshock',
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/bioshock2remasteredpc.jpg',
        title: 'Bioshock 2 Remastered',
        date: '16.9.2016', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: 'Bioshock',
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '4K' // Optional
    },
    {		
        image: 'images/Video game covers/jotunvalhallaeditionpc.jpg',
        title: 'Jotun: Valhalla Edition',
        date: '2.11.2016', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Isometric', 'Action-adventure'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/thelastguardianps4.jpg',
        title: 'The Last Guardian',
        date: '6.12.2016', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: ['Action-adventure', 'Puzzle'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'physical',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/niohps4.jpg',
        title: 'Nioh',
        date: '7.2.2017', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: 'Action RPG',// Must match one in categories
        status: 'playing', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/littlenightmarespc.jpg',
        title: 'Little Nightmares',
        date: '27.4.2017', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: '3D Platformer',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'false', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/magesofmystraliapc.jpg',
        title: 'Mages of Mystralia',
        date: '18.5.2017', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Action-adventure',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/hellbladesenuassacrificeps4.jpg',
        title: 'Hellblade: Senua\'s Sacrifice',
        date: '8.8.2017', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: 'Action-adventure',// Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/catquestpc.jpg',
        title: 'Cat Quest',
        date: '8.8.2017', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: 'Action RPG',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/marvelvscapcominfiniteps4.jpg',
        title: 'Marvel vs. Capcom: Infinite',
        date: '19.9.2017', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: 'Fighting',// Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/aermemoriesofoldpc.jpg',
        title: 'Aer: Memories of Old',
        date: '25.10.2017', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Narrative Adventure', 'Puzzle'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/amongthesleepenhancededitionpc.jpg',
        title: 'Among the Sleep: Enhanced Edition',
        date: '2.11.2017', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Survival Horror', 'Stealth'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/horizonzerodawncompleteeditionps4.jpg',
        title: 'Horizon: Zero Dawn Complete Edition',
        date: '5.12.2017', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: ['Action-adventure', 'Open World'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/celestepc.jpg',
        title: 'Celeste',
        date: '25.11.2018', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: '2D Platformer',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/dandaratrialsoffeareditionpc.jpg',
        title: 'Dandara: Trials of Fear Edition',
        date: '6.2.2018', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Metroidvania',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/devilmaycryhdcollectionpc.jpg',
        title: 'Devil May Cry HD Collection',
        date: '13.3.2018', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Compilation',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: 'Only played first one' // Optional
    },
    {		
        image: 'images/Video game covers/devilmaycry5ps4.jpg',
        title: 'Devil May Cry 5',
        date: '8.3.2019', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: 'Hack and Slash',// Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/cityofbrasspc.jpg',
        title: 'City of Brass',
        date: '4.5.2018', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['First-person Action', 'Roguelike'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/deathsgambitpc.jpg',
        title: 'Death\'s Gambit',
        date: '14.8.2018', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Metroidvania',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/duskpc.jpg',
        title: 'Dusk',
        date: '10.12.2018', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/mytimeatportiapc.jpg',
        title: 'My Time at Portia',
        date: '15.1.2019', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Farming Sim', 'Action RPG'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/apeoutpc.jpg',
        title: 'Ape Out',
        date: '28.2.2019', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Twin-stick Action',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/sekiroshadowsdietwicepc.jpg',
        title: 'Sekiro: Shadows Die Twice',
        date: '22.3.2019', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Action-adventure',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/godstriggerpc.jpg',
        title: 'God\'s Trigger',
        date: '18.4.2019', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Twin-stick Shooter',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/closetothesunpc.jpg',
        title: 'Close to the Sun',
        date: '18.4.2019', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Narrative Adventure', 'Survival Horror'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format
        notes: '4K' // Optional
    },
    {		
        image: 'images/Video game covers/aplaguetaleinnocencepc.jpg',
        title: 'A Plague Tale: Innocence',
        date: '13.5.2019', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Action-adventure',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/hellisotherdemonspc.jpg',
        title: 'Hell is Other Demons',
        date: '20.5.2019', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Twin-stick Shooter',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/amidevilpc.jpg',
        title: 'Amid Evil',
        date: '20.6.2019', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/automachefpc.jpg',
        title: 'Automachef',
        date: '23.7.2019', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Simulation',// Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/ionfurypc.jpg',
        title: 'Ion Fury',
        date: '15.8.2019', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'false', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/blairwitchpc.jpg',
        title: 'Blair Witch',
        date: '30.8.2019', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Narrative Adventure', 'Survival Horror'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/thewalkingdeadthetelltaledefinitiveseriespc.jpg',
        title: 'The Walking Dead: The Telltale Definitive Series',
        date: '10.9.2019', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Narrative Adventure',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/medievilps4.jpg',
        title: 'Medievil',
        date: '25.10.2019', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: 'Action-adventure',// Must match one in categories
        status: 'unplayed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'physical',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: null, // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/murderbynumberspc.jpg',
        title: 'Murder by Numbers',
        date: '6.3.2020', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Puzzle',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/movingoutpc.jpg',
        title: 'Moving Out',
        date: '28.4.2020', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Puzzle', 'Action'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/maneaterpc.jpg',
        title: 'Maneater',
        date: '22.5.2020', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Action-adventure',// Must match one in categories
        status: '100percent', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/deathstrandingpc.jpg',
        title: 'Death Stranding',
        date: '14.7.2020', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Action-adventure', 'Open world'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '4K' // Optional
    },
    {		
        image: 'images/Video game covers/ghostoftsushimaps4.jpg',
        title: 'Ghost of Tsushima',
        date: '17.7.2020', // Format: Month.Year (e.g., '12.2023')
        console: 'PlayStation 4', // Must match one in categories
        genre: ['Action-adventure', 'Open world'],// Must match one in categories
        status: 'platinum', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/maidofskerpc.jpg',
        title: 'Maid of Sker',
        date: '28.7.2020', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Survival Horror', 'Stealth'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/mortalshellpc.jpg',
        title: 'Mortal Shell',
        date: '18.8.2020', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Action RPG',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/ghostrunnerpc.jpg',
        title: 'Ghostrunner',
        date: '27.10.2020', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['First-person Action', '3D Platformer'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/bloodrayne2terminalcutpc.jpg',
        title: 'Bloodrayne 2: Terminal Cut',
        date: '20.11.2020', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Hack and Slash', 'Action-adventure'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/loopheropc.jpg',
        title: 'Loop Hero',
        date: '4.3.2021', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['RPG', 'Roguelike', 'Deck-building'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/cristalespc.jpg',
        title: 'Cris Tales',
        date: '20.7.2021', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Turn-based RPG',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/encasedpc.jpg',
        title: 'Encased',
        date: '7.9.2021', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Isometric', 'Turn-based RPG'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/quakeenhancedpc.jpg',
        title: 'Quake Enhanced',
        date: '19.8.2021', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'First-person Shooter',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'gog',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/twelveminutespc.jpg',
        title: 'Twelve Minutes',
        date: '19.8.2021', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Puzzle',// Must match one in categories
        status: '100percent', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'steam',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: 'Co-op /w Reni❤️' // Optional
    },
    {		
        image: 'images/Video game covers/fistforgedinshadowtorchpc.jpg',
        title: 'F.I.S.T.: Forged in Shadow Torch',
        date: '3.10.2021', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Metroidvania',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/modelbuilderpc.jpg',
        title: 'Model Builder',
        date: '8.2.2022', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Simulation',// Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: null, // true or false
        watchedTrailers: null, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/kardboardkingspc.jpg',
        title: 'Kardboard Kings',
        date: '10.2.2022', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Simulation',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/eldenringpc.jpg',
        title: 'Elden Ring',
        date: '25.2.2022', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Action RPG',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '4.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/ghostwiretokyopc.jpg',
        title: 'Ghostwire: Tokyo',
        date: '25.3.2022', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['First-person Shooter', 'Open world'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3.5/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/godlikeburgerpc.jpg',
        title: 'Godlike Burger',
        date: '21.4.2022', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Simulation', 'Time Management'],// Must match one in categories
        status: 'notbeat', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/eternalthreadspc.jpg',
        title: 'Eternal Threads',
        date: '19.5.2022', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Puzzle',// Must match one in categories
        status: '100percent', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/lumbearjackpc.jpg',
        title: 'LumbearJack',
        date: '11.7.2022', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Simulation', 'Puzzle'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '3/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/escapeacademypc.jpg',
        title: 'Escape Academy',
        date: '14.7.2022', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Puzzle',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'true', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/isletspc.jpg',
        title: 'Islets',
        date: '24.8.2022', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Metroidvania',// Must match one in categories
        status: '100percent', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/miraculousriseofthesphinxpc.jpg',
        title: 'Miraculous: Rise of the Sphinx',
        date: '25.10.2022', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Beat \'em up',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: null,
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '2/5', // Your rating format
        notes: 'Co-op /w Reni❤️' // Optional
    },
    {		
        image: 'images/Video game covers/invinciblepresentsatomevepc.jpg',
        title: 'Invincible Presents: Atom Eve',
        date: '14.11.2023', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: ['Visual Novel', 'Turn-based RPG'],// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },
    {		
        image: 'images/Video game covers/killknightpc.jpg',
        title: 'KILL KNIGHT',
        date: '2.10.2024', // Format: Month.Year (e.g., '12.2023')
        console: 'PC', // Must match one in categories
        genre: 'Twin-stick Shooter',// Must match one in categories
        status: 'completed', // Must be one of: played, unplayed, playing, completed, 100percent, notbeat, platinum
		emulated: null,		
		franchise: null,
		ownership: 'epic',
        watchedReviews: true, // true or false
        watchedTrailers: true, // true or false
        listenedSoundtrack: null, // true or false
        readTVTropes: null, // true or false
        playedDLC: 'na', // 'true', 'false', or 'na'
        rating: '4/5', // Your rating format
        notes: '' // Optional
    },




];


    function formatStatus(status) {
        const statusMap = {
            'unplayed': 'Not Played',
            'played': 'Played',
            'playing': 'Currently Playing', 
            'completed': 'Beat',
            '100percent': '100%',
			'notbeat': 'Not Beat',
			'platinum': 'Platinum'
        };
        return statusMap[status] || status;
    }

function formatDLC(dlcStatus) {
    const dlcMap = {
        'true': 'Yes',
        'false': 'No',
        'na': 'N/A'
    };
    return dlcMap[dlcStatus] || dlcStatus;
}


function shouldDisplayField(value, fieldType = 'general') {
    if (value === undefined || value === null) {
        return false;
    }
    
    if (fieldType === 'boolean') {
        // For boolean fields, only show if they have an actual boolean value
        return typeof value === 'boolean';
    }
    
    if (fieldType === 'array') {
        // For arrays, only show if it's a non-empty array
        return Array.isArray(value) && value.length > 0;
    }
    
    // For arrays in general context
    if (Array.isArray(value)) {
        return value.length > 0;
    }
    
    // For strings, numbers, etc. - exclude empty strings, 'na', and falsy values
    if (typeof value === 'string') {
        return value.trim() !== '' && value.trim().toLowerCase() !== 'na';
    }
    
    // For other types, check if it has a meaningful value
    return value !== '' && value !== 'na';
}
function formatGenres(genres) {
    if (!genres) return '';
    
    if (Array.isArray(genres)) {
        return genres.join(', ');
    }
    
    return genres;
}

function calculateMissingFields(game) {
    const missingFields = [];
    
    // Check each field - only consider it missing if it's undefined/null
    // (not if it's explicitly set to false)
    if (!shouldDisplayField(game.watchedReviews, 'boolean')) {
        missingFields.push('reviews');
    }
    
    if (!shouldDisplayField(game.watchedTrailers, 'boolean')) {
        missingFields.push('trailers');
    }
    
    if (!shouldDisplayField(game.listenedSoundtrack, 'boolean')) {
        missingFields.push('soundtrack');
    }
    
    if (!shouldDisplayField(game.readTVTropes, 'boolean')) {
        missingFields.push('tvtropes');
    }
    
    return missingFields;
}

function getFieldTooltip(field) {
    const tooltips = {
        'reviews': 'Missing Reviews info',
        'trailers': 'Missing Trailers info', 
        'soundtrack': 'Missing Soundtrack info',
        'tvtropes': 'Missing TVTropes info'
    };
    return tooltips[field] || 'Missing information';
}
function getFieldTooltip(field) {
    const tooltips = {
        'reviews': 'Missing Reviews info',
        'trailers': 'Missing Trailers info', 
        'soundtrack': 'Missing Soundtrack info',
        'tvtropes': 'Missing TVTropes info'
    };
    return tooltips[field] || 'Missing information';
}

// ========== ADD THESE TWO NEW FUNCTIONS HERE ==========
function getPlatformInfo(platform) {
    const platformMap = {
        'steam': { class: 'steam', tooltip: 'Steam' },
        'psn': { class: 'psn', tooltip: 'PlayStation Network' },		
        'epic': { class: 'epic', tooltip: 'Epic Games' },
        'gog': { class: 'gog', tooltip: 'GOG' },
        'ea': { class: 'ea', tooltip: 'EA App' },
        'battlenet': { class: 'battlenet', tooltip: 'Battle.net' },
        'ubisoft': { class: 'ubisoft', tooltip: 'Ubisoft Connect' },
        'physical:cartridge': { class: 'cartridge', tooltip: 'Physical Cartridge' },
        'physical:cd': { class: 'physical', tooltip: 'Physical CD/DVD' },
        'physical': { class: 'physical', tooltip: 'Physical Copy' } // This line should use your icon
    };
    
    return platformMap[platform] || { class: 'physical', tooltip: platform };
}

function hasPhysicalMedia(ownership) {
    return ownership && ownership.some(platform => platform.includes('physical'));
}

function displayGames() {
    const gamesContainer = document.getElementById('gamesContainer');
    gamesContainer.innerHTML = '';
    
    console.log('Total games to display:', games.length); // Debug
        
    games.forEach((game, index) => {
        // Calculate missing fields
        const missingFields = calculateMissingFields(game);
        const hasMissingFields = missingFields.length > 0;
        
        // Base classes
        let cardClasses = `game-card status-${game.status.toLowerCase()}`;
// Check if rating is 5/5 to determine favorite status        
if (game.rating && game.rating === '5/5') {
    cardClasses += ' favorite';
}
        
        // Add missing info classes
        if (hasMissingFields) {
            cardClasses += ' missing-info has-missing-fields';
            missingFields.forEach(field => {
                cardClasses += ` missing-${field}-border`;
            });
        }
        
        const gameCard = document.createElement('div');
        gameCard.className = cardClasses;
        gameCard.setAttribute('data-game-index', index);
        gameCard.setAttribute('data-played-dlc', game.playedDLC);
        gameCard.setAttribute('data-emulated', game.emulated === true || game.emulated === 'true' ? 'true' : 'false');
        gameCard.setAttribute('data-assisted', game.assisted === true || game.assisted === 'true' ? 'true' : 'false');
        
        // Add data attributes for filtering
        gameCard.setAttribute('data-console', game.console || '');
        
        // Handle franchise (can be array or string)
        const franchiseData = Array.isArray(game.franchise) ? game.franchise.join(',') : (game.franchise || '');
        gameCard.setAttribute('data-franchise', franchiseData);
        
        // Handle genre (can be array or string)
        const genreData = Array.isArray(game.genre) ? game.genre.join(',') : (game.genre || '');
        gameCard.setAttribute('data-genre', genreData);
        
        gameCard.setAttribute('data-rating', game.rating || '');
        gameCard.setAttribute('data-status', game.status || '');
        gameCard.setAttribute('data-notes', game.notes || '');
        
        // Extract year from date for filtering
        const year = extractYearFromDate(game.date);
        gameCard.setAttribute('data-year', year || '');
        // Add data attribute for co-op partners
if (game.notes && game.notes.includes('Co-op')) {
    const coopMatch = game.notes.match(/Co-op\s*\/w\s*(.+)/i);
    if (coopMatch) {
        const partnersRaw = coopMatch[1].trim();
        const partners = partnersRaw
            .split(/\s*,\s*|\s*&\s*|\s+and\s+/i)
            .flatMap(part => part.split(/\s*;\s*|\s*\/\s*|\s*\+\s*/i))
            .map(p => p.trim())
            .filter(Boolean);
        gameCard.setAttribute('data-coop', partners.join(','));
    }
}
        
        // Add ownership data attribute (normalize values to match category names)
        const ownershipArray = Array.isArray(game.ownership)
            ? game.ownership
            : (game.ownership ? [game.ownership] : []);

        const ownershipNormalized = ownershipArray.map(platform => {
            if (platform === 'physical') {
                return 'Physical';
            }
            if (platform === 'steam') {
                return 'Steam';
            }
            if (platform === 'epic') {
                return 'Epic';
            }
            if (platform === 'gog') {
                return 'GOG';
            }
            if (platform === 'ea') {
                return 'EA';
            }
            if (platform === 'battlenet') {
                return 'Battle.net';
            }
            if (platform === 'ubisoft') {
                return 'Ubisoft';
            }
            if (platform === 'psn' || platform === 'playstation network') {
                return 'PlayStation Network';
            }
            // Default: capitalize first letter
            return platform.charAt(0).toUpperCase() + platform.slice(1);
        });

        gameCard.setAttribute('data-ownership', ownershipNormalized.join(','));
        
        // Card content
        gameCard.innerHTML = `
            <div class="image-container">
                <img src="${game.image}" alt="${game.title}" class="game-image">
            </div>
            <div class="game-text-container">
                <div class="game-title">${game.title}</div>
                <div class="game-console">${game.console}</div>
                <div class="game-date">${game.date}</div>
            </div>
            ${game.rating ? `<div class="game-rating">${game.rating}</div>` : ''}
        `;
        
        // Add platform icons
        if (game.ownership) {
            // Handle both arrays and strings for backward compatibility
            const ownershipArray = Array.isArray(game.ownership) ? game.ownership : [game.ownership];
            
            if (ownershipArray.length > 0) {
                const platformIcons = document.createElement('div');
                platformIcons.className = 'platform-icons';
                
                if (hasPhysicalMedia(ownershipArray)) {
                    platformIcons.classList.add('has-physical');
                }
                
                ownershipArray.forEach(platform => {
                    const platformInfo = getPlatformInfo(platform);
                    const icon = document.createElement('div');
                    icon.className = `platform-icon ${platformInfo.class}`;
                    icon.setAttribute('data-tooltip', platformInfo.tooltip);
                    platformIcons.appendChild(icon);
                });
                
                gameCard.appendChild(platformIcons);
            }
        }

        // Add missing field badges (AFTER platform icons)
        if (hasMissingFields) {
            const missingBadges = document.createElement('div');
            missingBadges.className = 'missing-badges';
            
            missingFields.forEach(field => {
                const badge = document.createElement('div');
                badge.className = `missing-badge ${field}`;
                
                // Use abbreviations for each field
                const abbreviations = {
                    'reviews': 'Rev',
                    'trailers': 'Trail', 
                    'soundtrack': 'Snd',
                    'tvtropes': 'Tropes'
                };
                
                badge.textContent = abbreviations[field] || field.substring(0, 4);
                badge.setAttribute('data-tooltip', getFieldTooltip(field));
                missingBadges.appendChild(badge);
            });
            
            gameCard.appendChild(missingBadges);
        }

        // Add EMU badge if game is emulated
        if (game.emulated === true || game.emulated === 'true') {
            const emuBadge = document.createElement('div');
            emuBadge.className = 'emu-badge';
            emuBadge.textContent = 'EMU';
            gameCard.appendChild(emuBadge);
        }

        // Add warning badge if game was beaten with assistance
        if (game.assisted === true || game.assisted === 'true') {
            const warningBadge = document.createElement('div');
            warningBadge.className = 'warning-badge';
            warningBadge.textContent = 'CHEAT';
            gameCard.appendChild(warningBadge);
        }

        // Add co-op badge if game was played in co-op
        if (game.notes && game.notes.includes('Co-op')) {
            const coopBadge = document.createElement('div');
            coopBadge.className = 'coop-badge';
            gameCard.appendChild(coopBadge);
        }

        gameCard.addEventListener('click', () => showGamePopup(game, index));
        gamesContainer.appendChild(gameCard);
    });
} 
// This closes displayGames function

// ... (rest of the code remains the same)
// Define showGamePopup function
function showGamePopup(game, index) {
    const popupOverlay = document.getElementById('popupOverlay');
    const popupCover = document.getElementById('popupCover');
    const popupTitle = document.getElementById('popupTitle');
    const popupDetails = document.getElementById('popupDetails');
    
    popupCover.src = game.image;
    popupTitle.textContent = game.title;
    
    // Build the details HTML dynamically - only include fields that have values
    let detailsHTML = '';
    
    // Console (always show, but handle empty)
    if (shouldDisplayField(game.console)) {
        detailsHTML += `
            <div class="detail-item">
                <div class="detail-label">Console</div>
                <div class="detail-value">${game.console}</div>
            </div>`;
    }
    
    // Release Date
    if (shouldDisplayField(game.date)) {
        detailsHTML += `
            <div class="detail-item">
                <div class="detail-label">Release Date</div>
                <div class="detail-value">${game.date}</div>
            </div>`;
    }
    
    // Genre - handle both arrays and strings
    if (shouldDisplayField(game.genre)) {
        detailsHTML += `
            <div class="detail-item">
                <div class="detail-label">Genre</div>
                <div class="detail-value">${formatGenres(game.genre)}</div>
            </div>`;
    }
    
    // Status (always show, but handle formatting)
    detailsHTML += `
        <div class="detail-item">
            <div class="detail-label">Status</div>
            <div class="detail-value status-${game.status}">${formatStatus(game.status)}</div>
        </div>`;
 
   // Emulated status - only show if it exists AND is not 'na'
    if (shouldDisplayField(game.emulated) && game.emulated !== 'na') {
        detailsHTML += `
            <div class="detail-item">
                <div class="detail-label">Emulated</div>
                <div class="detail-value emulated-${game.emulated}">${formatEmulated(game.emulated)}</div>
            </div>`;
    }
    
    // OWNERSHIP SECTION - Only show if there are actual ownership platforms
    if (shouldDisplayField(game.ownership)) {
        // Handle both arrays and strings for backward compatibility
        const ownershipArray = Array.isArray(game.ownership) ? game.ownership : [game.ownership];
        
        if (ownershipArray.length > 0) {
            detailsHTML += `
                <div class="detail-item">
                    <div class="detail-label">Ownership</div>
                    <div class="detail-value">
                        <div class="ownership-list">`;
            
            ownershipArray.forEach(platform => {
                const platformClass = platform.toLowerCase().replace('.', '').replace(' ', '');
                detailsHTML += `<span class="ownership-tag ${platformClass}">${platform}</span>`;
            });
            
            detailsHTML += `</div></div></div>`;
        }
    }
    
    // Boolean fields - only show if they have actual boolean values (not empty/na)
    if (shouldDisplayField(game.watchedReviews, 'boolean') && typeof game.watchedReviews === 'boolean') {
        detailsHTML += `
            <div class="detail-item">
                <div class="detail-label">Watched Reviews</div>
                <div class="detail-value ${game.watchedReviews ? 'true-value checked-true' : 'false-value checked-false'}">${game.watchedReviews ? 'Yes' : 'No'}</div>
            </div>`;
    }

    if (shouldDisplayField(game.watchedTrailers, 'boolean') && typeof game.watchedTrailers === 'boolean') {
        detailsHTML += `
            <div class="detail-item">
                <div class="detail-label">Watched Trailers</div>
                <div class="detail-value ${game.watchedTrailers ? 'true-value checked-true' : 'false-value checked-false'}">${game.watchedTrailers ? 'Yes' : 'No'}</div>
            </div>`;
    }

    if (shouldDisplayField(game.listenedSoundtrack, 'boolean') && typeof game.listenedSoundtrack === 'boolean') {
        detailsHTML += `
            <div class="detail-item">
                <div class="detail-label">Listened to Soundtrack</div>
                <div class="detail-value ${game.listenedSoundtrack ? 'true-value checked-true' : 'false-value checked-false'}">${game.listenedSoundtrack ? 'Yes' : 'No'}</div>
            </div>`;
    }

    if (shouldDisplayField(game.readTVTropes, 'boolean') && typeof game.readTVTropes === 'boolean') {
        detailsHTML += `
            <div class="detail-item">
                <div class="detail-label">Read TVTropes</div>
                <div class="detail-value ${game.readTVTropes ? 'true-value checked-true' : 'false-value checked-false'}">${game.readTVTropes ? 'Yes' : 'No'}</div>
            </div>`;
    }
    
// Played DLC - only show if it exists AND is not 'na'
if (shouldDisplayField(game.playedDLC) && game.playedDLC !== 'na') {
    // Handle both boolean true/false and string 'true'/'false'
    const isTrue = game.playedDLC === true || game.playedDLC === 'true';
    detailsHTML += `
        <div class="detail-item">
            <div class="detail-label">Played DLC</div>
            <div class="detail-value dlc-${game.playedDLC} ${isTrue ? 'dlc-true' : 'dlc-false'}">
                ${isTrue ? '✓ Yes' : '✗ No'}
            </div>
        </div>`;
}

    
    // Rating - only show if it exists
if (shouldDisplayField(game.rating)) {
    const isFiveStar = game.rating === '5/5';
    detailsHTML += `
        <div class="detail-item">
            <div class="detail-label">Rating</div>
            <div class="detail-value ${isFiveStar ? 'true-value' : ''}">${game.rating} ${isFiveStar ? '⭐' : ''}</div>
        </div>`;
}
    
    
    // Notes - always show, but handle empty case
    detailsHTML += `
        <div class="detail-item" style="grid-column: 1 / -1;">
            <div class="detail-label">Notes</div>
            <div class="detail-value">${game.notes || ''}</div>
        </div>
    `;
    
    popupDetails.innerHTML = detailsHTML;
    popupOverlay.style.display = 'flex';
} // This closes showGamePopup function

    // CATEGORY SYSTEM - MOVED OUTSIDE THE POPUP FUNCTION
    const activeFilters = document.getElementById('activeFilters');
    let activeCategories = new Set();
    let searchTerm = '';
    let isSearching = false;
const categories = {
    consoles: {
        name: 'Console',
        items: {
            'Arcade': { image: 'images/Console Pictures/arcade.png', count: 0 },
            'Atari 2600': { image: 'images/Console Pictures/atari2600.png', count: 0 },
            'Apple II': { image: 'images/Console Pictures/appleii.png', count: 0 },
            'Acorn Electron': { image: 'images/Console Pictures/acornelectron.png', count: 0 },
            'Nintendo Entertainment System': { image: 'images/Console Pictures/nes.png', count: 0 },
            'Famicom Disk System': { image: 'images/Console Pictures/fds.png', count: 0 },
            'Super Nintendo Entertainment System': { image: 'images/Console Pictures/snes.png', count: 0 },
            'Game Boy': { image: 'images/Console Pictures/gameboy.png', count: 0 },
            'Sega Genesis': { image: 'images/Console Pictures/genesis.png', count: 0 },
            'Sega CD': { image: 'images/Console Pictures/segacd.png', count: 0 },
            'Amstrad CPC': { image: 'images/Console Pictures/amstradcpc.png', count: 0 },
            'Amiga': { image: 'images/Console Pictures/amiga.png', count: 0 },
            'MSX2': { image: 'images/Console Pictures/msx2.png', count: 0 },
            'TurboGrafx-CD': { image: 'images/Console Pictures/turbografxcd.png', count: 0 },
            'Nintendo 64': { image: 'images/Console Pictures/n64.png', count: 0 },
            'Game Boy Color': { image: 'images/Console Pictures/gbc.png', count: 0 },
            'PlayStation': { image: 'images/Console Pictures/psx.png', count: 0 },
            'Sega Saturn': { image: 'images/Console Pictures/saturn.png', count: 0 },
            'DOS': { image: 'images/Console Pictures/dos.png', count: 0 },
            '3DO': { image: 'images/Console Pictures/3do.png', count: 0 },
            'Game Boy Advance': { image: 'images/Console Pictures/gba.png', count: 0 },
            'Nintendo GameCube': { image: 'images/Console Pictures/gamecube.png', count: 0 },
            'PlayStation 2': { image: 'images/Console Pictures/ps2.png', count: 0 },
            'Xbox': { image: 'images/Console Pictures/xbox.png', count: 0 },
            'Xbox 360': { image: 'images/Console Pictures/x360.png', count: 0 },
            'Nintendo DS': { image: 'images/Console Pictures/ds.png', count: 0 },
            'Browser': { image: 'images/Console Pictures/browser.png', count: 0 },
            'PlayStation Portable': { image: 'images/Console Pictures/psp.png', count: 0 },
            'PC': { image: 'images/Console Pictures/PC.png', count: 0 },
            'Xbox One': { image: 'images/Console Pictures/xbone.png', count: 0 },
            'PlayStation 3': { image: 'images/Console Pictures/ps3.png', count: 0 },
            'PlayStation 4': { image: 'images/Console Pictures/ps4.png', count: 0 },
            'PlayStation 5': { image: 'images/Console Pictures/ps5.png', count: 0 },
            'Nintendo Wii': { image: 'images/Console Pictures/wii.png', count: 0 },
            'Nintendo 3DS': { image: 'images/Console Pictures/3ds.png', count: 0 },
            'Atari Jaguar': { image: 'images/Console Pictures/jaguar.png', count: 0 },
            'Sega Dreamcast': { image: 'images/Console Pictures/dreamcast.png', count: 0 },
        }
    },
    years: {
        name: 'Year',
        items: {
            '1980': { count: 0 },
            '1981': { count: 0 },
            '1982': { count: 0 },
            '1983': { count: 0 },
            '1984': { count: 0 },
            '1985': { count: 0 },
            '1986': { count: 0 },
            '1987': { count: 0 },
            '1988': { count: 0 },
            '1989': { count: 0 },
            '1990': { count: 0 },
            '1991': { count: 0 },
            '1992': { count: 0 },
            '1993': { count: 0 },
            '1994': { count: 0 },
            '1995': { count: 0 },
            '1996': { count: 0 },
            '1997': { count: 0 },
            '1998': { count: 0 },
            '1999': { count: 0 },
            '2000': { count: 0 },
            '2001': { count: 0 },
            '2002': { count: 0 },
            '2003': { count: 0 },
            '2004': { count: 0 },
            '2005': { count: 0 },
            '2006': { count: 0 },
            '2007': { count: 0 },
            '2008': { count: 0 },
            '2009': { count: 0 },
            '2010': { count: 0 },
            '2011': { count: 0 },
            '2012': { count: 0 },
            '2013': { count: 0 },
            '2014': { count: 0 },
            '2015': { count: 0 },
            '2016': { count: 0 },
            '2017': { count: 0 },
            '2018': { count: 0 },
            '2019': { count: 0 },
            '2020': { count: 0 },
            '2021': { count: 0 },
            '2022': { count: 0 },
            '2023': { count: 0 },
            '2024': { count: 0 },
            '2025': { count: 0 }
        }
    },
    status: {
        name: 'Status',
        items: {
            'Not Played': { count: 0 },
            'Played': { count: 0 },
            'Currently Playing': { count: 0 },
            'Beat': { count: 0 },
            '100%': { count: 0 },
            'Not Beat': { count: 0 },
            'Platinum': { count: 0 }
        }
    },
    genre: {
        name: 'Genre',
        items: {
            'Action': { count: 0 },
            'Adventure': { count: 0 },
            'Action-adventure': { count: 0 },
            '2D Platformer': { count: 0 },
            '3D Platformer': { count: 0 },
            'Strategy': { count: 0 },
            'Puzzle': { count: 0 },
            'Beat \'em up': { count: 0 },
            'Stealth': { count: 0 },
            'Hack and Slash': { count: 0 },
            'Open World': { count: 0 },
            'Text Adventure': { count: 0 },
            'Space Flight Sim': { count: 0 },
            'Kart racing': { count: 0 },
            'Fighting': { count: 0 },
            'First-person Shooter': { count: 0 },
            'Turn-based RPG': { count: 0 },
            'Action RPG': { count: 0 },
            'MMORPG': { count: 0 },
            'Real-time Strategy': { count: 0 },
            'City Sim': { count: 0 },
            'Golf Sim': { count: 0 },
            'Football Sim': { count: 0 },
            'Skating Sim': { count: 0 },
            'Racing Sim': { count: 0 },
            'Arcade Racing': { count: 0 },
            'Shoot \'em up': { count: 0 },
            'Vertically-scrolling': { count: 0 },
            'Horizontally-scrolling': { count: 0 },
            'Isometric': { count: 0 },
            'Survival Horror': { count: 0 },
            'Point-and-click adventure': { count: 0 },
            'Visual Novel': { count: 0 },
            'Rail Shooter': { count: 0 },
            'Compilation': { count: 0 },
            'Life Sim': { count: 0 },
            'Simulation': { count: 0 },
            '4X': { count: 0 },
            'Turn-based Strategy': { count: 0 },
            'Real-time Tactics': { count: 0 },
            'Tactical': { count: 0 },
            'Third-person Shooter': { count: 0 },
            'Top-down': { count: 0 },
            'Wrestling Sim': { count: 0 },
            'Card Game': { count: 0 },
            'Racing': { count: 0 },
            'Time Management': { count: 0 },
            'Pinball': { count: 0 },
            'Mini-games': { count: 0 },
            'Music Sim': { count: 0 },
            'First-person Action': { count: 0 },
            'Cooking Sim': { count: 0 },
            'Hidden Object': { count: 0 },
            'Narrative Adventure': { count: 0 },
            'Twin-stick Shooter': { count: 0 },
            'Vehicular Combat': { count: 0 },
            'Metroidvania': { count: 0 },
            'Space Sim': { count: 0 },
            'Vehicle Sim': { count: 0 },
            'Roguelike': { count: 0 },
            'Hero Shooter': { count: 0 },
            'Farming Sim': { count: 0 },
            'Twin-stick Action': { count: 0 },
            'RPG': { count: 0 },
            'Deck-building': { count: 0 },
        }
    },
    franchise: {
        name: 'Franchise',
        items: {
            'Donkey Kong': { image: 'images/Franchise Pictures/donkeykong.png', count: 0 },
            'Marvel': { image: 'images/Franchise Pictures/marvel.png', count: 0 },
            'Super Mario': { image: 'images/Franchise Pictures/supermario.png', count: 0 },
            'Castlevania': { image: 'images/Franchise Pictures/castlevania.png', count: 0 },
            'DC': { image: 'images/Franchise Pictures/dc.png', count: 0 },
            'Ghostbusters': { image: 'images/Franchise Pictures/ghostbusters.png', count: 0 },
            'Metal Gear': { image: 'images/Franchise Pictures/metalgear.png', count: 0 },
            'Teenage Mutant Ninja Turtles': { image: 'images/Franchise Pictures/tmnt.png', count: 0 },
            'Sonic the Hedgehog': { image: 'images/Franchise Pictures/sonicthehedgehog.png', count: 0 },
            'Mortal Kombat': { image: 'images/Franchise Pictures/mortalkombat.png', count: 0 },
            'The Elder Scrolls': { image: 'images/Franchise Pictures/theelderscrolls.png', count: 0 },
            'Doom': { image: 'images/Franchise Pictures/doom.png', count: 0 },
            'Warcraft': { image: 'images/Franchise Pictures/warcraft.png', count: 0 },
            'Tekken': { image: 'images/Franchise Pictures/tekken.png', count: 0 },
            'Tomb Raider': { image: 'images/Franchise Pictures/tombraider.png', count: 0 },
            'Shadow Warrior': { image: 'images/Franchise Pictures/shadowwarrior.png', count: 0 },
            'Blood': { image: 'images/Franchise Pictures/blood.png', count: 0 },
            'Age of Empires': { image: 'images/Franchise Pictures/ageofempires.png', count: 0 },
            'Fallout': { image: 'images/Franchise Pictures/fallout.png', count: 0 },
            'Grand Theft Auto': { image: 'images/Franchise Pictures/grandtheftauto.png', count: 0 },
            'Pokemon': { image: 'images/Franchise Pictures/pokemon.png', count: 0 },
            'Half-Life': { image: 'images/Franchise Pictures/halflife.png', count: 0 },
            'Unreal': { image: 'images/Franchise Pictures/unreal.png', count: 0 },
            'Silent Hill': { image: 'images/Franchise Pictures/silenthill.png', count: 0 },
            'Lego': { image: 'images/Franchise Pictures/lego.png', count: 0 },
            'Star Wars': { image: 'images/Franchise Pictures/starwars.png', count: 0 },
            'Harry Potter': { image: 'images/Franchise Pictures/harrypotter.png', count: 0 },
            'The Sims': { image: 'images/Franchise Pictures/thesims.png', count: 0 },
            'WWE': { image: 'images/Franchise Pictures/wwe.png', count: 0 },
            'Spec Ops': { image: 'images/Franchise Pictures/specops.png', count: 0 },
            'Disney': { image: 'images/Franchise Pictures/disney.png', count: 0 },
            'Serious Sam': { image: 'images/Franchise Pictures/serioussam.png', count: 0 },
            'Sid Meier\'s Civilization': { image: 'images/Franchise Pictures/civilization.png', count: 0 },
            'Wolfenstein': { image: 'images/Franchise Pictures/wolfenstein.png', count: 0 },
            'Mafia': { image: 'images/Franchise Pictures/mafia.png', count: 0 },
            'Tom Clancy\'s Splinter Cell': { image: 'images/Franchise Pictures/splintercell.png', count: 0 },
            'Halo': { image: 'images/Franchise Pictures/halo.png', count: 0 },
            'Call of Duty': { image: 'images/Franchise Pictures/callofduty.png', count: 0 },
            'Feeding Frenzy': { image: 'images/Franchise Pictures/feedingfrenzy.png', count: 0 },
            'Far Cry': { image: 'images/Franchise Pictures/farcry.png', count: 0 },
            'Painkiller': { image: 'images/Franchise Pictures/painkiller.png', count: 0 },
            'Red Dead': { image: 'images/Franchise Pictures/reddead.png', count: 0 },
            'Leisure Suit Larry': { image: 'images/Franchise Pictures/leisuresuitlarry.png', count: 0 },
            'TimeSplitters': { image: 'images/Franchise Pictures/timesplitters.png', count: 0 },
            'God of War': { image: 'images/Franchise Pictures/godofwar.png', count: 0 },
            'Sniper Elite': { image: 'images/Franchise Pictures/sniperelite.png', count: 0 },
            'Ratchet & Clank': { image: 'images/Franchise Pictures/ratchet&clank.png', count: 0 },
            'Guitar Hero': { image: 'images/Franchise Pictures/guitarhero.png', count: 0 },
            'Yakuza': { image: 'images/Franchise Pictures/yakuza.png', count: 0 },
            'Just Cause': { image: 'images/Franchise Pictures/justcause.png', count: 0 },
            'Bully': { image: 'images/Franchise Pictures/bully.png', count: 0 },
            'Penumbra': { image: 'images/Franchise Pictures/penumbra.png', count: 0 },
            'The Darkness': { image: 'images/Franchise Pictures/thedarkness.png', count: 0 },
            'Burger Shop': { image: 'images/Franchise Pictures/burgershop.png', count: 0 },
            'Mass Effect': { image: 'images/Franchise Pictures/masseffect.png', count: 0 },
            'Uncharted': { image: 'images/Franchise Pictures/uncharted.png', count: 0 },
            'Rock Band': { image: 'images/Franchise Pictures/rockband.png', count: 0 },
            'Assassin\'s Creed': { image: 'images/Franchise Pictures/assassinscreed.png', count: 0 },
            'Cooking Academy': { image: 'images/Franchise Pictures/cookingacademy.png', count: 0 },
            'Grid': { image: 'images/Franchise Pictures/grid.png', count: 0 },
            'Go-Go Gourmet': { image: 'images/Franchise Pictures/gogogourmet.png', count: 0 },
            'The Witcher': { image: 'images/Franchise Pictures/thewitcher.png', count: 0 },
            'Infamous': { image: 'images/Franchise Pictures/infamous.png', count: 0 },
            'Dragon Age': { image: 'images/Franchise Pictures/dragonage.png', count: 0 },
            'Metro': { image: 'images/Franchise Pictures/metro.png', count: 0 },
            'Sam & Max': { image: 'images/Franchise Pictures/samandmax.png', count: 0 },
            'Amnesia': { image: 'images/Franchise Pictures/amnesia.png', count: 0 },
            'Borderlands': { image: 'images/Franchise Pictures/borderlands.png', count: 0 },
            'Alan Wake': { image: 'images/Franchise Pictures/alanwake.png', count: 0 },
            'Dark Souls': { image: 'images/Franchise Pictures/darksouls.png', count: 0 },
            'Dishonored': { image: 'images/Franchise Pictures/dishonored.png', count: 0 },
            'Outlast': { image: 'images/Franchise Pictures/outlast.png', count: 0 },
            'Knack': { image: 'images/Franchise Pictures/knack.png', count: 0 },
            'The Last of Us': { image: 'images/Franchise Pictures/thelastofus.png', count: 0 },
            'Bioshock': { image: 'images/Franchise Pictures/bioshock.png', count: 0 },
            'Devil May Cry': { image: 'images/Franchise Pictures/devilmaycry.png', count: 0 },
       }
    },
    rating: {
        name: 'Rating',
        items: {
            '1': { count: 0 },
            '1.5': { count: 0 },
            '2': { count: 0 },
            '2.5': { count: 0 },
            '3': { count: 0 },
            '3.5': { count: 0 },
            '4': { count: 0 },
            '4.5': { count: 0 },
            '5': { count: 0 }
        }
    },
    ownership: {
        name: 'Ownership',
        items: {
            'Physical': { image: 'images/Icons/physical.png', count: 0 },
            'Steam': { image: 'images/Icons/steam.png', count: 0 },
            'PlayStation Network': { image: 'images/Icons/psn.png', count: 0 },
            'Epic': { image: 'images/Icons/epic.png', count: 0 },
            'GOG': { image: 'images/Icons/gog.png', count: 0 },
            'EA': { image: 'images/Icons/ea.png', count: 0 },
            'Battle.net': { image: 'images/Icons/battlenet.png', count: 0 },
            'Ubisoft': { image: 'images/Icons/ubisoft.png', count: 0 }
        }
    },
    coop: {
        name: 'Co-op Partners',
        items: {}
    },
    assisted: {
        name: 'Assisted',
        items: {
            'Cheats': { count: 0 },
            'Save States': { count: 0 },
            'Walkthrough': { count: 0 }
        }
    }
};


function updateCategoryCounts() {
    Object.values(categories).forEach(category => {
        Object.keys(category.items).forEach(item => {
            category.items[item].count = 0;
        });
    });

    games.forEach(game => {
        // Count consoles - only if game has a console value
        if (shouldDisplayField(game.console) && categories.consoles.items[game.console]) {
            categories.consoles.items[game.console].count++;
        }
        
        // Count years - only if game has a date
        const year = extractYearFromDate(game.date);
        if (year && categories.years.items[year]) {
            categories.years.items[year].count++;
        }
        
        // Count status
        const formattedStatus = formatStatus(game.status);
        if (categories.status.items[formattedStatus]) {
            categories.status.items[formattedStatus].count++;
        }
        
        // Count genre - handle both arrays and strings for backward compatibility
        if (shouldDisplayField(game.genre)) {
            if (Array.isArray(game.genre)) {
                // Multiple genres - count each one
                game.genre.forEach(singleGenre => {
                    if (categories.genre.items[singleGenre]) {
                        categories.genre.items[singleGenre].count++;
                    }
                });
            } else {
                // Single genre (backward compatibility)
                if (categories.genre.items[game.genre]) {
                    categories.genre.items[game.genre].count++;
                }
            }
        }
        
        // Count franchise - handle both arrays and strings
        if (shouldDisplayField(game.franchise)) {
            if (Array.isArray(game.franchise)) {
                // Multiple franchises - count each one
                game.franchise.forEach(singleFranchise => {
                    if (categories.franchise.items[singleFranchise]) {
                        categories.franchise.items[singleFranchise].count++;
                    }
                });
            } else if (categories.franchise.items[game.franchise]) {
                // Single franchise
                categories.franchise.items[game.franchise].count++;
            }
        }
        
        // Count ratings
        if (shouldDisplayField(game.rating)) {
            // Extract just the number part (e.g., "2/5" becomes "2")
            const ratingValue = game.rating.split('/')[0];
            if (categories.rating.items[ratingValue]) {
                categories.rating.items[ratingValue].count++;
            }
        }
        
        
        // Count ownership - handle both arrays and strings for backward compatibility
        if (shouldDisplayField(game.ownership)) {
            // Handle both arrays and strings for backward compatibility
            const ownershipArray = Array.isArray(game.ownership) ? game.ownership : [game.ownership];
            
            ownershipArray.forEach(platform => {
                // Map game ownership values to category platform names
                let categoryPlatformName;
                
                // Handle different platform naming conventions
                if (platform === 'physical') {
                    categoryPlatformName = 'Physical';
                } else if (platform === 'steam') {
                    categoryPlatformName = 'Steam';
                } else if (platform === 'epic') {
                    categoryPlatformName = 'Epic';
                } else if (platform === 'gog') {
                    categoryPlatformName = 'GOG';
                } else if (platform === 'ea') {
                    categoryPlatformName = 'EA';
                } else if (platform === 'battlenet') {
                    categoryPlatformName = 'Battle.net';
                } else if (platform === 'ubisoft') {
                    categoryPlatformName = 'Ubisoft';
                } else if (platform === 'psn') {
                    categoryPlatformName = 'PlayStation Network';
                } else {
                    // Default: capitalize first letter
                    categoryPlatformName = platform.charAt(0).toUpperCase() + platform.slice(1);
                }
                
                // Count if the platform exists in categories
                if (categories.ownership.items[categoryPlatformName]) {
                    categories.ownership.items[categoryPlatformName].count++;
                }
            });
        }
        
// Count co-op partners - extract from notes and handle multiple partners
if (game.notes && game.notes.includes('Co-op')) {
    const coopMatch = game.notes.match(/Co-op\s*\/w\s*(.+)/i);
    if (coopMatch) {
        const partnersRaw = coopMatch[1].trim();
        // Improved splitting that handles commas, ampersands, and the word 'and'
        const partners = partnersRaw
            .split(/\s*,\s*|\s*&\s*|\s+and\s+/i)
            .flatMap(part => part.split(/\s*;\s*|\s*\/\s*|\s*\+\s*/i))
            .map(p => p.trim())
            .filter(Boolean);
        
        partners.forEach(partner => {
            if (!categories.coop.items[partner]) {
                categories.coop.items[partner] = { count: 0 };
            }
            categories.coop.items[partner].count++;
        });
    }
}
        
        // Count assisted types - extract from notes (allow multiple types per game)
        if (game.assisted === true || game.assisted === 'true') {
            if (game.notes) {
                if (/cheat/i.test(game.notes)) {
                    categories.assisted.items['Cheats'].count++;
                }
                if (/save state/i.test(game.notes)) {
                    categories.assisted.items['Save States'].count++;
                }
                if (/walkthrough|guide/i.test(game.notes)) {
                    categories.assisted.items['Walkthrough'].count++;
                }
            }
        }
    });
}

function debugOwnershipCounts() {
    console.log("=== OWNERSHIP COUNTS DEBUG ===");
    Object.entries(categories.ownership.items).forEach(([platform, data]) => {
        console.log(`${platform}: ${data.count} games`);
    });
    
    console.log("=== GAMES WITH OWNERSHIP ===");
    games.forEach((game, index) => {
        if (shouldDisplayField(game.ownership)) {
            console.log(`${index}: ${game.title} - ownership:`, game.ownership);
        }
    });
}

function displayFranchises() {
    const franchiseSection = document.querySelector('#franchiseCategory .category-items');
    franchiseSection.innerHTML = '';
    
    Object.entries(categories.franchise.items).forEach(([franchiseName, franchiseData]) => {
        const franchiseItem = document.createElement('div');
        franchiseItem.className = 'franchise-item';
        franchiseItem.setAttribute('data-category', 'franchise');
        franchiseItem.setAttribute('data-value', franchiseName);
        
        // Debug: Log the image path
        console.log(`Franchise: ${franchiseName}, Image path: ${franchiseData.image}`);
        
        // Update image path to be relative to the HTML file location
        let imagePath = '';
        if (franchiseData.image) {
            // Fix path to use 'images/Franchise Pictures' instead of 'Franchise images'
            imagePath = franchiseData.image.replace(/Franchise images\//g, 'images/Franchise Pictures/')
                                         .replace(/Franchise%20images\//g, 'Franchise%20Pictures/');
            imagePath = `./${imagePath}`; // Make path relative to HTML file
        }
        
        console.log(`Final franchise image path: ${imagePath}`);
        
        // Create image element separately to avoid template literal nesting issues
        const img = document.createElement('img');
        img.src = imagePath || '';
        img.alt = franchiseName;
        img.className = 'franchise-item-image';
        img.onerror = function() {
            console.error('Failed to load image:', this.src);
            const fallback = document.createElement('div');
            fallback.style.cssText = 'width:100px;height:100px;background:#333;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;border-radius:5px;';
            const span = document.createElement('span');
            span.style.cssText = 'color:white;font-size:12px;';
            span.textContent = franchiseName;
            fallback.appendChild(span);
            this.parentNode.replaceChild(fallback, this);
        };
        
        // Create the rest of the elements
        const nameDiv = document.createElement('div');
        nameDiv.className = 'franchise-item-name';
        nameDiv.textContent = franchiseName;
        
        const countDiv = document.createElement('div');
        countDiv.className = 'franchise-item-count';
        countDiv.textContent = `${franchiseData.count} games`;
        
        // Clear and append all elements
        franchiseItem.innerHTML = '';
        franchiseItem.appendChild(img);
        franchiseItem.appendChild(nameDiv);
        franchiseItem.appendChild(countDiv);
        
        franchiseItem.addEventListener('click', () => toggleCategoryFilter('franchise', franchiseName));
        franchiseSection.appendChild(franchiseItem);
    });
}

function displayRatings() {
    const ratingSection = document.querySelector('#ratingCategory .category-items');
    ratingSection.innerHTML = '';
    
    // Get all rating entries (no need to separate Favorite anymore)
    const ratingEntries = Object.entries(categories.rating.items);
    
    // Sort numeric ratings numerically (convert to numbers for proper sorting)
    ratingEntries.sort(([a], [b]) => {
        // Convert to numbers for proper numerical sorting
        const numA = parseFloat(a);
        const numB = parseFloat(b);
        return numA - numB; // Ascending order
    });
    
    // Display the sorted ratings
    ratingEntries.forEach(([ratingName, ratingData]) => {
        const ratingItem = document.createElement('div');
        ratingItem.className = `rating-item rating-${ratingName.replace('.', '-')}`;
        ratingItem.setAttribute('data-category', 'rating');
        ratingItem.setAttribute('data-value', ratingName);
        
        ratingItem.innerHTML = `
            <div class="rating-item-name">${ratingName}/5</div>
            <div class="rating-item-count">${ratingData.count} games</div>
        `;
        
        ratingItem.addEventListener('click', () => toggleCategoryFilter('rating', ratingName));
        ratingSection.appendChild(ratingItem);
    });
}
function displayOwnership() {
    const ownershipSection = document.querySelector('#ownershipCategory .category-items');
    if (!ownershipSection) return;
    
    ownershipSection.innerHTML = '';
    
    // Convert to array, sort by count (descending), then display
    Object.entries(categories.ownership.items)
        .sort(([, a], [, b]) => b.count - a.count) // Sort by count descending
        .forEach(([platformName, platformData]) => {
            const ownershipItem = document.createElement('div');
            ownershipItem.className = 'franchise-item';
            ownershipItem.setAttribute('data-category', 'ownership');
            ownershipItem.setAttribute('data-value', platformName);
            
            // Debug: Log the image path
            console.log(`Ownership: ${platformName}, Image path: ${platformData.image}`);
            
            // Update image path to be relative to the HTML file location
            let imagePath = '';
            if (platformData.image) {
                // Ensure consistent path formatting
                imagePath = platformData.image
                    .replace(/Franchise images\//g, 'Franchise%20Pictures/')
                    .replace(/Icons\//g, 'Icons/');
                imagePath = `./${imagePath}`; // Make path relative to HTML file
            }
            
            console.log(`Final ownership image path: ${imagePath}`);
            
            // Create image element separately to avoid template literal nesting issues
            const img = document.createElement('img');
            img.src = imagePath || '';
            img.alt = platformName;
            img.className = 'franchise-item-image';
            img.onerror = function() {
                console.error('Failed to load image:', this.src);
                const fallback = document.createElement('div');
                fallback.style.cssText = 'width:100px;height:100px;background:#333;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;border-radius:5px;';
                const span = document.createElement('span');
                span.style.cssText = 'color:white;font-size:12px;';
                span.textContent = platformName;
                fallback.appendChild(span);
                this.parentNode.replaceChild(fallback, this);
            };
            
            // Create the rest of the elements
            const nameDiv = document.createElement('div');
            nameDiv.className = 'franchise-item-name';
            nameDiv.textContent = platformName;
            
            const countDiv = document.createElement('div');
            countDiv.className = 'franchise-item-count';
            countDiv.textContent = `${platformData.count} games`;
            
            // Clear and append all elements
            ownershipItem.innerHTML = '';
            if (imagePath) {
                ownershipItem.appendChild(img);
            } else {
                const fallback = document.createElement('div');
                fallback.style.cssText = 'width:100px;height:100px;background:#333;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;border-radius:5px;';
                const span = document.createElement('span');
                span.style.cssText = 'color:white;font-size:12px;';
                span.textContent = platformName;
                fallback.appendChild(span);
                ownershipItem.appendChild(fallback);
            }
            ownershipItem.appendChild(nameDiv);
            ownershipItem.appendChild(countDiv);
            
            ownershipItem.addEventListener('click', () => toggleCategoryFilter('ownership', platformName));
            ownershipSection.appendChild(ownershipItem);
        });
}

function displayCoop() {
    const coopSection = document.querySelector('#coopCategory .category-items');
    if (!coopSection) return;
    
    coopSection.innerHTML = '';
    
    // Convert to array, sort by count (descending), then display
    Object.entries(categories.coop.items)
        .sort(([, a], [, b]) => b.count - a.count) // Sort by count descending
        .forEach(([partnerName, partnerData]) => {
            const coopItem = document.createElement('div');
            coopItem.className = 'category-item';
            coopItem.setAttribute('data-category', 'coop');
            coopItem.setAttribute('data-value', partnerName);
            
            coopItem.innerHTML = `
                <div class="category-item-name">${partnerName}</div>
                <div class="category-item-count">${partnerData.count} games</div>
            `;
            
            coopItem.addEventListener('click', () => toggleCategoryFilter('coop', partnerName));
            coopSection.appendChild(coopItem);
        });
}

function displayAssisted() {
    const assistedSection = document.querySelector('#assistedCategory .category-items');
    if (!assistedSection) return;
    
    assistedSection.innerHTML = '';
    
    // Convert to array, sort by count (descending), then display
    Object.entries(categories.assisted.items)
        .sort(([, a], [, b]) => b.count - a.count) // Sort by count descending
        .forEach(([assistType, assistData]) => {
            const assistItem = document.createElement('div');
            assistItem.className = 'category-item';
            assistItem.setAttribute('data-category', 'assisted');
            assistItem.setAttribute('data-value', assistType);
            
            assistItem.innerHTML = `
                <div class="category-item-name">${assistType}</div>
                <div class="category-item-count">${assistData.count} games</div>
            `;
            
            assistItem.addEventListener('click', () => toggleCategoryFilter('assisted', assistType));
            assistedSection.appendChild(assistItem);
        });
}

function extractYearFromDate(dateString) {
    // Format 1: "M.YYYY" or "MM.YYYY" (10.1980, 5.2023) - Month.Year
    if (dateString.includes('.') && dateString.split('.').length === 2) {
        const parts = dateString.split('.');
        const monthPart = parts[0];
        const yearPart = parts[1];
        
        // Check if month is 1-2 digits and year is 4 digits
        if ((monthPart.length === 1 || monthPart.length === 2) && /^\d{1,2}$/.test(monthPart) &&
            yearPart.length === 4 && /^\d{4}$/.test(yearPart)) {
            return yearPart;
        }
    }
    
    // Format 2: "DD.MM.YYYY" (15.10.1980) - Day.Month.Year (both 2 digits)
    if (dateString.includes('.') && dateString.split('.').length === 3) {
        const parts = dateString.split('.');
        const dayPart = parts[0];
        const monthPart = parts[1];
        const yearPart = parts[2];
        
        // Check if day and month are both 2 digits, year is 4 digits
        if (dayPart.length === 2 && /^\d{2}$/.test(dayPart) &&
            monthPart.length === 2 && /^\d{2}$/.test(monthPart) &&
            yearPart.length === 4 && /^\d{4}$/.test(yearPart)) {
            return yearPart;
        }
    }
    
    // Format 3: "D.M.YYYY" (1.5.1984) - Day(1 digit).Month(1 digit).Year
    if (dateString.includes('.') && dateString.split('.').length === 3) {
        const parts = dateString.split('.');
        const dayPart = parts[0];
        const monthPart = parts[1];
        const yearPart = parts[2];
        
        // Check if day is 1 digit, month is 1 digit, year is 4 digits
        if (dayPart.length === 1 && /^\d{1}$/.test(dayPart) &&
            monthPart.length === 1 && /^\d{1}$/.test(monthPart) &&
            yearPart.length === 4 && /^\d{4}$/.test(yearPart)) {
            return yearPart;
        }
    }
    
    // Format 4: "D.MM.YYYY" (5.10.1980) - Day(1 digit).Month(2 digits).Year
    if (dateString.includes('.') && dateString.split('.').length === 3) {
        const parts = dateString.split('.');
        const dayPart = parts[0];
        const monthPart = parts[1];
        const yearPart = parts[2];
        
        // Check if day is 1 digit, month is 2 digits, year is 4 digits
        if (dayPart.length === 1 && /^\d{1}$/.test(dayPart) &&
            monthPart.length === 2 && /^\d{2}$/.test(monthPart) &&
            yearPart.length === 4 && /^\d{4}$/.test(yearPart)) {
            return yearPart;
        }
    }
    
    // Format 5: "DD.M.YYYY" (15.5.1980) - Day(2 digits).Month(1 digit).Year
    if (dateString.includes('.') && dateString.split('.').length === 3) {
        const parts = dateString.split('.');
        const dayPart = parts[0];
        const monthPart = parts[1];
        const yearPart = parts[2];
        
        // Check if day is 2 digits, month is 1 digit, year is 4 digits
        if (dayPart.length === 2 && /^\d{2}$/.test(dayPart) &&
            monthPart.length === 1 && /^\d{1}$/.test(monthPart) &&
            yearPart.length === 4 && /^\d{4}$/.test(yearPart)) {
            return yearPart;
        }
    }
    
    // Format 6: Just the year "YYYY" (1980)
    if (/^\d{4}$/.test(dateString)) {
        return dateString;
    }
    
    console.warn(`Could not extract year from date: "${dateString}"`);
    return null;
}

// Call the function to process dates

function displayCategories() {
    console.log("displayCategories() called");

    updateCategoryCounts();
    
    // Display consoles category
    const consolesSection = document.querySelector('#consolesCategory .category-items');
    if (consolesSection) {
        consolesSection.innerHTML = '';

        // Convert to array, sort by count (descending), then display
        Object.entries(categories.consoles.items)
            .sort(([, a], [, b]) => b.count - a.count) // <-- sort by count descending
            .forEach(([consoleName, consoleData]) => {
                const consoleItem = document.createElement('div');
                consoleItem.className = 'franchise-item';
                consoleItem.setAttribute('data-category', 'consoles');
                consoleItem.setAttribute('data-value', consoleName);
     
                
                // Debug: Log the image path
                console.log(`Console: ${consoleName}, Image path: ${consoleData.image}`);
                
                // Update image path to be relative to the HTML file location
                let imagePath = '';
                if (consoleData.image) {
                    // Ensure consistent path formatting
                    imagePath = consoleData.image
                        .replace(/Franchise Pictures\//g, 'Console%20Pictures/')
                        .replace(/Franchise%20Pictures\//g, 'Console%20Pictures/')
                        .replace(/Icons\//g, 'images/Icons/');
                    imagePath = `./${imagePath}`; // Make path relative to HTML file
                }
                
                console.log(`Final image path: ${imagePath}`);
                
                // Create image element separately to avoid template literal nesting issues
                const img = document.createElement('img');
                img.src = imagePath || '';
                img.alt = consoleName;
                img.className = 'franchise-item-image';
                img.onerror = function() {
                    console.error('Failed to load image:', this.src);
                    const fallback = document.createElement('div');
                    fallback.style.cssText = 'width:100px;height:100px;background:#333;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;border-radius:5px;';
                    const span = document.createElement('span');
                    span.style.cssText = 'color:white;font-size:12px;';
                    span.textContent = consoleName;
                    fallback.appendChild(span);
                    this.parentNode.replaceChild(fallback, this);
                };
                
                // Create the rest of the elements
                const nameDiv = document.createElement('div');
                nameDiv.className = 'franchise-item-name';
                nameDiv.textContent = consoleName;
                
                const countDiv = document.createElement('div');
                countDiv.className = 'franchise-item-count';
                countDiv.textContent = `${consoleData.count} games`;
                
                // Clear and append all elements
                consoleItem.innerHTML = '';
                if (imagePath) {
                    consoleItem.appendChild(img);
                } else {
                    const fallback = document.createElement('div');
                    fallback.style.cssText = 'width:100px;height:100px;background:#333;display:flex;align-items:center;justifyify-content:center;margin:0 auto 10px;border-radius:5px;';
                    const span = document.createElement('span');
                    span.style.cssText = 'color:white;font-size:12px;';
                    span.textContent = consoleName;
                    fallback.appendChild(span);
                    consoleItem.appendChild(fallback);
                }
                consoleItem.appendChild(nameDiv);
                consoleItem.appendChild(countDiv);
                
                consoleItem.addEventListener('click', () => toggleCategoryFilter('consoles', consoleName));
                consolesSection.appendChild(consoleItem);
            });
        console.log("Consoles displayed:", consolesSection.children.length);
    }

    // Display years category
    const yearsSection = document.querySelector('#yearsCategory .category-items');
    if (yearsSection) {
        yearsSection.innerHTML = '';
        Object.entries(categories.years.items).forEach(([year, yearData]) => {
            const yearItem = document.createElement('div');
            yearItem.className = 'year-item';
            yearItem.setAttribute('data-category', 'years');
            yearItem.setAttribute('data-value', year);
            
            yearItem.innerHTML = `
                <div class="year-item-name">${year}</div>
                <div class="year-item-count">${yearData.count}</div>
            `;
            
            yearItem.addEventListener('click', () => toggleCategoryFilter('years', year));
            yearsSection.appendChild(yearItem);
        });
        console.log("Years displayed:", yearsSection.children.length);
    }
    // DISPLAY STATUS CATEGORY - SORTED BY COUNT
    const statusSection = document.querySelector('#statusCategory .category-items');
    statusSection.innerHTML = '';
    
    // Convert to array, sort by count (descending), then display
    Object.entries(categories.status.items)
        .sort(([, a], [, b]) => b.count - a.count) // Sort by count descending
        .forEach(([statusName, statusData]) => {
            const statusItem = document.createElement('div');
            statusItem.className = 'category-item';
            statusItem.setAttribute('data-category', 'status');
            statusItem.setAttribute('data-value', statusName);
            
            statusItem.innerHTML = `
                <div class="category-item-name">${statusName}</div>
                <div class="category-item-count">${statusData.count} games</div>
            `;
            
            statusItem.addEventListener('click', () => toggleCategoryFilter('status', statusName));
            statusSection.appendChild(statusItem);
        });
		
// DISPLAY GENRE CATEGORY - SORTED BY COUNT
const genreSection = document.querySelector('#genreCategory .category-items');
genreSection.innerHTML = '';

// Convert to array, sort by count (descending), then display
Object.entries(categories.genre.items)
    .sort(([, a], [, b]) => b.count - a.count) // Sort by count descending
    .forEach(([genreName, genreData]) => {
        const genreItem = document.createElement('div');
        genreItem.className = 'genre-item';
        genreItem.setAttribute('data-category', 'genre');
        genreItem.setAttribute('data-value', genreName);
        
        genreItem.innerHTML = `
            <div class="genre-item-name">${genreName}</div>
            <div class="genre-item-count">${genreData.count}</div>
        `;
        
        genreItem.addEventListener('click', () => toggleCategoryFilter('genre', genreName));
        genreSection.appendChild(genreItem);
    });

// Display franchises category
    displayFranchises();
    
    // Display ratings category
    displayRatings();
	
    // Display ownership category
    displayOwnership();
}

function formatEmulated(emulatedStatus) {
    const emulatedMap = {
        'true': 'Yes',
        'na': 'N/A'
    };
    return emulatedMap[emulatedStatus] || emulatedStatus;
}

function toggleCategoryFilter(categoryType, value) {
    const filterKey = `${categoryType}:${value}`;
    
    // Toggle the filter - add if not present, remove if present
    if (activeCategories.has(filterKey)) {
        activeCategories.delete(filterKey);
        console.log('Removed filter:', filterKey);
    } else {
        activeCategories.add(filterKey);
        console.log('Added filter:', filterKey);
    }
    

    // Update the visual state of category items
    updateCategoryItemsVisualState();
    
    // Update the filter display and games
    updateActiveFiltersDisplay();
    filterGames();

    // Save state after filter change
    saveCategoryState();
}

function updateCategoryDropdown(selectedCategory, selectedValue) {
    const categorySelect = document.getElementById('categorySelect');
    if (!categorySelect) return;
        
    // Find the option that matches the selected value
    const options = categorySelect.options;
    for (let i = 0; i < options.length; i++) {
        if (options[i].value === selectedValue) {
            categorySelect.selectedIndex = i;
            break;
        }
    }
}

// Set up category select handler
function setupCategorySelect() {
    const categorySelect = document.getElementById('categorySelect');
    if (categorySelect) {
        categorySelect.addEventListener('change', function() {
            const selectedValue = this.value;
            console.log('Category dropdown changed to:', selectedValue);
            
            // Save the dropdown selection
            localStorage.setItem('selectedCategory', selectedValue);
                
            // Hide all category sections first
            const allSections = document.querySelectorAll('.category-section');
            console.log('Found', allSections.length, 'category sections');
            allSections.forEach(section => {
                section.style.display = 'none';
            });
        
            if (selectedValue === 'all') {
                // Hide all categories when 'All Games' is selected
                console.log('Hiding all categories (All Games selected)');
                // Keep existing filters intact - just hide the category panels
            } else {
                // Show only the selected category section
                const sectionId = selectedValue + 'Category';
                console.log('Looking for section with ID:', sectionId);
                const selectedSection = document.getElementById(sectionId);
                if (selectedSection) {
                    console.log('Found section, showing it');
                    selectedSection.style.display = 'block';
                } else {
                    console.error('Section not found:', sectionId);
                }
            }
        });
    } else {
        console.error('categorySelect element not found');
    }
}

// Set up popup close button
function setupPopupHandlers() {
    const closeBtn = document.getElementById('closeBtn');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            document.getElementById('popupOverlay').style.display = 'none';
        });
    }
    
    // Set up popup overlay click handler
    const popupOverlay = document.getElementById('popupOverlay');
    if (popupOverlay) {
        popupOverlay.addEventListener('click', function(e) {
            if (e.target === this) {
                popupOverlay.style.display = 'none';
            }
        });
    }
}

// Set up scroll position persistence
function setupScrollPersistence() {
    const leftPanel = document.querySelector('.left-panel');
    if (leftPanel) {
        // Save scroll position before page unload
        window.addEventListener('beforeunload', function() {
            localStorage.setItem('gamesListScrollPosition', leftPanel.scrollTop);
        });
        
        // Restore scroll position when page loads
        const savedScrollPosition = localStorage.getItem('gamesListScrollPosition');
        if (savedScrollPosition) {
            setTimeout(() => {
                leftPanel.scrollTop = parseInt(savedScrollPosition);
            }, 100);
        }
        
        // Save scroll position when user scrolls
        leftPanel.addEventListener('scroll', function() {
            localStorage.setItem('gamesListScrollPosition', this.scrollTop);
        });
    }
}

// Initialize the application
function initializeApp() {
    // Update category counts
    updateCategoryCounts();
    
    // Display all content
    displayGames();
    displayCategories();
    displayFranchises();
    displayRatings();
    displayOwnership();
    displayCoop();
    displayAssisted();
    
    // Set up event handlers
    setupCategorySelect();
    setupPopupHandlers();
    setupScrollPersistence();
    
    
    // Set initial state - hide all categories (default is "All Games")
    document.querySelectorAll('.category-section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Restore saved category dropdown selection
    const savedCategory = localStorage.getItem('selectedCategory');
    const categorySelect = document.getElementById('categorySelect');
    if (savedCategory && categorySelect) {
        categorySelect.value = savedCategory;
        // Show the saved category section
        if (savedCategory !== 'all') {
            const sectionId = savedCategory + 'Category';
            const selectedSection = document.getElementById(sectionId);
            if (selectedSection) {
                selectedSection.style.display = 'block';
            }
        }
    }
    
    // Restore saved filters
    const savedFilters = localStorage.getItem('activeFilters');
    if (savedFilters) {
        try {
            const filtersArray = JSON.parse(savedFilters);
            filtersArray.forEach(filter => activeCategories.add(filter));
            updateCategoryItemsVisualState();
            updateActiveFiltersDisplay();
            filterGames();
        } catch (e) {
            console.error('Error restoring filters:', e);
        }
    }
    
    // Log initial category counts
    console.log("PC games count:", categories.consoles.items["PC"].count);
    console.log("PlayStation games count:", categories.consoles.items["PlayStation"].count);
}

// Save category state to localStorage
function saveCategoryState() {
    // Save active filters as a JSON string
    const filtersArray = Array.from(activeCategories);
    localStorage.setItem('activeFilters', JSON.stringify(filtersArray));
}

// Filter games based on active categories
function filterGames() {
    const allGames = document.querySelectorAll('.game-card');
    console.log('Filtering games. Total games:', allGames.length);
    console.log('Active categories:', Array.from(activeCategories));
    
    if (activeCategories.size === 0) {
        // Show all games if no filters are active
        console.log('No active filters, showing all games');
        allGames.forEach(game => game.style.display = '');
        return;
    }
    
    allGames.forEach(game => {
        const gameConsole = game.dataset.console;
        const gameFranchise = game.dataset.franchise;
        const gameGenre = game.dataset.genre;
        const gameRating = game.dataset.rating;
        const gameStatus = game.dataset.status;
        const gameYear = game.dataset.year;
        const gameOwnership = game.dataset.ownership;
        
        let shouldShow = false;
        
        activeCategories.forEach(filter => {
            const [categoryType, categoryValue] = filter.split(':');
            
            if (categoryType === 'consoles' && gameConsole === categoryValue) {
                shouldShow = true;
            } else if (categoryType === 'years' && gameYear === categoryValue) {
                shouldShow = true;
            } else if (categoryType === 'franchise') {
                // Handle franchise arrays (some games have multiple franchises)
                // Split by comma and check for exact match
                if (gameFranchise) {
                    const franchises = gameFranchise.split(',');
                    if (franchises.includes(categoryValue)) {
                        shouldShow = true;
                    }
                }
            } else if (categoryType === 'genre') {
                // Handle genre arrays (some games have multiple genres)
                // Split by comma and check for exact match
                if (gameGenre) {
                    const genres = gameGenre.split(',');
                    if (genres.includes(categoryValue)) {
                        shouldShow = true;
                    }
                }
            } else if (categoryType === 'rating') {
                // Extract just the number part from the rating (e.g., "4.5/5" becomes "4.5")
                const ratingValue = gameRating ? gameRating.split('/')[0] : '';
                if (ratingValue === categoryValue) {
                    shouldShow = true;
                }
            } else if (categoryType === 'status') {
                // Format the raw status value to match the display name
                const formattedGameStatus = formatStatus(gameStatus);
                if (formattedGameStatus === categoryValue) {
                    shouldShow = true;
                }
            } else if (categoryType === 'ownership') {
                // Handle ownership (can be multiple platforms)
                // Split by comma and check for exact match
                if (gameOwnership) {
                    const platforms = gameOwnership.split(',');
                    if (platforms.includes(categoryValue)) {
                        shouldShow = true;
                    }
                }
} else if (categoryType === 'coop') {
    // Get the comma-separated list of partners from data-coop attribute
    const gameCoop = game.dataset.coop || '';
    if (gameCoop) {
        // Split the comma-separated string into an array of partners
        const partners = gameCoop.split(',');
        // Check if any partner matches the selected value
        if (partners.includes(categoryValue)) {
            shouldShow = true;
        }
    }
                
            } else if (categoryType === 'assisted') {
                // Handle assisted filtering
                const gameAssisted = game.dataset.assisted;
                const gameNotes = game.dataset.notes || '';
                if (gameAssisted === 'true' && gameNotes) {
                    if (categoryValue === 'Cheats' && /cheat/i.test(gameNotes)) {
                        shouldShow = true;
                    } else if (categoryValue === 'Save States' && /save state/i.test(gameNotes)) {
                        shouldShow = true;
                    } else if (categoryValue === 'Walkthrough' && /walkthrough|guide/i.test(gameNotes)) {
                        shouldShow = true;
                    }
                }
            }
        });
        
        game.style.display = shouldShow ? '' : 'none';
    });
}

// Update the visual state of category items to show which are active
function updateCategoryItemsVisualState() {
    // Remove 'active' class from all category items
    document.querySelectorAll('[data-category][data-value]').forEach(item => {
        item.classList.remove('active');
    });
    
    // Add 'active' class to currently filtered items
    activeCategories.forEach(filter => {
        const [categoryType, categoryValue] = filter.split(':');
        const selector = `[data-category="${categoryType}"][data-value="${categoryValue}"]`;
        const items = document.querySelectorAll(selector);
        items.forEach(item => {
            item.classList.add('active');
        });
    });
}

// Update active filters display
function updateActiveFiltersDisplay() {
    const activeFilters = document.getElementById('activeFilters');
    if (!activeFilters) return;
    
    activeFilters.innerHTML = '';
    
    if (activeCategories.size === 0) {
        activeFilters.innerHTML = '<span class="no-filters">No active filters</span>';
        return;
    }
    
    activeCategories.forEach(filter => {
        const [categoryType, categoryValue] = filter.split(':');
        const filterTag = document.createElement('span');
        filterTag.className = 'filter-tag';
        filterTag.textContent = `${categoryValue}`;
        filterTag.style.cursor = 'pointer';
        
        // Make the entire tag clickable to remove the filter
        filterTag.onclick = () => {
            toggleCategoryFilter(categoryType, categoryValue);
        };
        
        const removeBtn = document.createElement('button');
        removeBtn.textContent = '×';
        removeBtn.className = 'remove-filter';
        removeBtn.onclick = (e) => {
            e.stopPropagation(); // Prevent double trigger
            toggleCategoryFilter(categoryType, categoryValue);
        };
        
        filterTag.appendChild(removeBtn);
        activeFilters.appendChild(filterTag);
    });
}

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', initializeApp);

// Clear category state (optional, for debugging)
function clearCategoryState() {
    localStorage.removeItem('categoryState');
    localStorage.removeItem('activeFilters');
    localStorage.removeItem('selectedCategory');
    activeCategories.clear();
    updateCategoryItemsVisualState();
    updateActiveFiltersDisplay();
    filterGames();
    
    // Reset dropdown to "All Games"
    const categorySelect = document.getElementById('categorySelect');
    if (categorySelect) {
        categorySelect.value = 'all';
    }
    
    // Hide all category sections
    document.querySelectorAll('.category-section').forEach(section => {
        section.style.display = 'none';
    });
}
// Search functionality
function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const resultsCount = document.getElementById('searchResultsCount');
    const allGames = document.querySelectorAll('.game-card');
    
    let visibleCount = 0;
    
    if (searchTerm === '') {
        // If search is empty, show all games and hide results count
        isSearching = false;
        resultsCount.classList.remove('show');
        allGames.forEach(game => {
            game.style.display = '';
        });
        // Re-apply category filters if any
        if (activeCategories.size > 0) {
            filterGames();
        }
        return;
    }
    
    isSearching = true;
    
    allGames.forEach(game => {
        const gameIndex = parseInt(game.getAttribute('data-game-index'));
        const gameData = games[gameIndex];
        
        // Search in title, console, genre, franchise, and notes
        const searchableText = [
            gameData.title?.toLowerCase() || '',
            gameData.console?.toLowerCase() || '',
            Array.isArray(gameData.genre) ? gameData.genre.join(' ').toLowerCase() : (gameData.genre?.toLowerCase() || ''),
            Array.isArray(gameData.franchise) ? gameData.franchise.join(' ').toLowerCase() : (gameData.franchise?.toLowerCase() || ''),
            gameData.notes?.toLowerCase() || ''
        ].join(' ');
        
        const matchesSearch = searchableText.includes(searchTerm);
        
        // Show game if it matches search AND any active category filters (if any)
        if (matchesSearch) {
            if (activeCategories.size > 0) {
                // If there are active category filters, check if game matches both search AND categories
                let matchesCategory = false;
                activeCategories.forEach(filter => {
                    const [categoryType, categoryValue] = filter.split(':');
                    
                    if (categoryType === 'consoles' && gameData.console === categoryValue) {
                        matchesCategory = true;
                    } else if (categoryType === 'years' && extractYearFromDate(gameData.date) === categoryValue) {
                        matchesCategory = true;
                    } else if (categoryType === 'franchise') {
                        const franchises = Array.isArray(gameData.franchise) ? gameData.franchise : [gameData.franchise];
                        if (franchises.includes(categoryValue)) {
                            matchesCategory = true;
                        }
                    } else if (categoryType === 'genre') {
                        const genres = Array.isArray(gameData.genre) ? gameData.genre : [gameData.genre];
                        if (genres.includes(categoryValue)) {
                            matchesCategory = true;
                        }
                    } else if (categoryType === 'rating') {
                        const ratingValue = gameData.rating ? gameData.rating.split('/')[0] : '';
                        if (ratingValue === categoryValue) {
                            matchesCategory = true;
                        }
                    } else if (categoryType === 'status') {
                        const formattedStatus = formatStatus(gameData.status);
                        if (formattedStatus === categoryValue) {
                            matchesCategory = true;
                        }
                    } else if (categoryType === 'ownership') {
                        const ownershipArray = Array.isArray(gameData.ownership) ? gameData.ownership : [gameData.ownership];
                        const ownershipNormalized = ownershipArray.map(platform => {
                            if (platform === 'physical') return 'Physical';
                            if (platform === 'steam') return 'Steam';
                            if (platform === 'epic') return 'Epic';
                            if (platform === 'gog') return 'GOG';
                            if (platform === 'ea') return 'EA';
                            if (platform === 'battlenet') return 'Battle.net';
                            if (platform === 'ubisoft') return 'Ubisoft';
                            if (platform === 'psn') return 'PlayStation Network';
                            return platform.charAt(0).toUpperCase() + platform.slice(1);
                        });
                        if (ownershipNormalized.includes(categoryValue)) {
                            matchesCategory = true;
                        }
                    }
                });
                
                if (matchesCategory) {
                    game.style.display = '';
                    visibleCount++;
                } else {
                    game.style.display = 'none';
                }
            } else {
                // No category filters, just show based on search
                game.style.display = '';
                visibleCount++;
            }
        } else {
            game.style.display = 'none';
        }
    });
    
    // Show results count
    resultsCount.textContent = `${visibleCount} game${visibleCount !== 1 ? 's' : ''}`;
    resultsCount.classList.add('show');
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    performSearch();
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        // Search on input with debounce
        let searchTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                performSearch();
            }, 300);
        });
        
        // Clear search when Escape key is pressed
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                clearSearch();
            }
        });
    }
}