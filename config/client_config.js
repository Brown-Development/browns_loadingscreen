const Config = {


    serverName: 'Server Name RP', // your server name here 

    serverRules: 'No Exploiting, Cheating, Hacking, Racism, Sexism, or Homophobia', // put your discord rules here

    serverInfo: { // Server info that will show when you click the menu button at the top left of the loading screen

        owner: 'Owner Name Here', // name of the server owner or owners
        roleplayType: 'Serious', // your servers roleplay type (serious, semi-serious, 100kordie, etc.)
        framework: 'QB-Core' // your servers framework (qb-core, esx, nd_core, etc.)

    },

    videoFileName: 'example_video.mp4', // name of video file for background video. Make sure you put this in ui/assets/video folder
    serverLogoFile: 'logo.png', // server logo file name this file should be placed in ui/assets/photos folder

    serverTips: [ // this are tips that show in the menu when you click the menu button at the top left of the loading screen

    // server tips can be used to display any information rather in game or ooc based information that you want users to see as they load in
        {
            title: 'Example Tip #1', // server tip title
            description: 'This is an example of a tip, You can put anything you want here' // server tip message
        },

        {
            title: 'Example Tip #2', // server tip title
            description: 'This is an example of a tip, You can put anything you want here' // server tip message
        },

        // add as many as you want:

        // {
        //     title: 'Some_Title', 
        //     description: 'some_message' 
        // },

    ],

    keepMenuOpen: false, // should the menu that shows server tips and in game photos etc stay open? (this disables the ability to close it)

    inGamePhotos: [ // a list of in game photos that will show in a slider when you click the menu button at top left of loading screen

        { // you can use a Url for the image, if not using url then place the image in ui/assets/photos folder
           usingUrl: false, // is the image path a url link?
           image: 'example_photo1.png' // this can be either the image url or image file name, if url make sure "usingUrl" is set to true
        },

        { 
            usingUrl: false, // is the image path a url link?
            image: 'example_photo2.png' // this can be either the image url or image file name, if url make sure "usingUrl" is set to true
        },

        { 
            usingUrl: false, // is the image path a url link?
            image: 'example_photo3.png' // this can be either the image url or image file name, if url make sure "usingUrl" is set to true
        },

        { 
            usingUrl: false, // is the image path a url link?
            image: 'example_photo4.png' // this can be either the image url or image file name, if url make sure "usingUrl" is set to true
        },

        { 
            usingUrl: false, // is the image path a url link?
            image: 'example_photo5.png' // this can be either the image url or image file name, if url make sure "usingUrl" is set to true
        },

        { 
            usingUrl: false, // is the image path a url link?
            image: 'example_photo6.png' // this can be either the image url or image file name, if url make sure "usingUrl" is set to true
        },

        { 
            usingUrl: false, // is the image path a url link?
            image: 'example_photo7.png' // this can be either the image url or image file name, if url make sure "usingUrl" is set to true
        },

        // add as many as you want:

        // { 
        //     usingUrl: false, 
        //     image: 'some_image_filename_or_image_link.png' 
        // },

    ],

    musicPlayer: { // music settings 
        defaultSongPath: 'example_defaultsong.mp3', // file name of the default song that will play (song files should be placed in ui/assets/songs folder)
        defaultSongName: 'NBA Youngboy - Hit (Feat. DaBaby)', // the title of the default song 
        songList: { // song list options (for music player)

            enable: true, // true or false, enable the ability to play other songs?
            songs: [ // list of addon songs available in the music player
                {
                    songName: 'Jordan Burns - Weekend (Slowed)', // song title here
                    songFileName: 'example_addonsong1.mp3' // name of song file (song files should be placed in ui/assets/songs folder)
                },
                {
                    songName: 'Kate Bush - Running Up That Hill', // song title here
                    songFileName: 'example_addonsong2.mp3' // name of song file (song files should be placed in ui/assets/songs folder)
                },
                {
                    songName: 'Some_Song_Title', // song title here
                    songFileName: 'some_music_file.mp3' // name of song file (song files should be placed in ui/assets/songs folder)
                },
            ]
        }
    }
}

// dont touch this or everything will break:
function initConfig () { 
    return Config
}