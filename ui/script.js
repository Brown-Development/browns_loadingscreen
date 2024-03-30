$(document).ready(()=>{

    $('#nav').hide()
    $('#song-list').hide()
    const parent = document.getElementById('disc-cont-cont')
    const serverName = document.getElementById('name-glitch')
    const navBar = document.getElementById('nav')
    const serverInfo = document.getElementById('server-info')
    const photoGallery = document.getElementById('gallery')
    const infoList = document.getElementById('infolist')
    const Songs = document.getElementById('songs')
    const config = initConfig();

    if (config.keepMenuOpen) {
        $('#nav').show()
        $('#menu').hide()
        $('#rules').css('left', '88%') 
        $('#rules').css('top', '70%') 
    } else {
        $(document).on('click', function(event) {
            if (menuOpen && !mouseBusy && !onNav) {
                menuOpen = false
                mouseBusy = true 
                $('#nav').css('animation', 'slide-in 0.4s forwards')
                setTimeout(() => {
                    $('#nav').hide()
                    $('#menu').show()
                    $('#nav').css('animation', 'slide-out 0.4s forwards')
                    mouseBusy = false
                }, 400);
            }
        });
        $('#menu').click(()=> {
            if (!menuOpen && !mouseBusy) {
                mouseBusy = true 
                $('#menu').hide()
                $('#nav').show()
                setTimeout(() => {
                    menuOpen = true
                    mouseBusy = false
                }, 400);
            }
        })
    }

    $('#logo').attr('src',`./assets/photos/${config.serverLogoFile}`)
    $('#bg-video').attr('src', `./assets/video/${config.videoFileName}`)
    $('#audio').attr('src', `./assets/songs/${config.musicPlayer.defaultSongPath}`)

    let channel = null
    let galleryActive = false 
    let tipActive = false 
    let menuOpen = false
    let mouseBusy = false
    let onNav = false
    let mp3Animating = false

    $('#rules-content').text(config.serverRules)

    var Names = serverName.querySelectorAll('.server-name') 
    Names.forEach( (Name)=> {
        Name.innerHTML = config.serverName
    })

    let list1 = document.createElement('li')
    let list2 = document.createElement('li')
    let list3 = document.createElement('li')

    list1.innerHTML = `<strong>Owner(s):</strong> ${config.serverInfo.owner}`
    list2.innerHTML = `<strong>Roleplay Type:</strong> ${config.serverInfo.roleplayType}`
    list3.innerHTML = `<strong>Framework:</strong> ${config.serverInfo.framework}`

    serverInfo.appendChild(list1)
    serverInfo.appendChild(list2)
    serverInfo.appendChild(list3)

    for (let key of config.inGamePhotos) {

        let item = document.createElement('div')

        switch (galleryActive) {
            case false: 
                item.className = 'carousel-item active'
                galleryActive = true 
                break 
            case true:
                item.className = 'carousel-item'
                break 
            default: break 
        }

        let img = document.createElement('img')
        img.className = 'd-block w-100'

        switch (key.usingUrl) {
            case true:
                img.src = key.image
                break
            case false: 
                img.src = `./assets/photos/${key.image}`
                break 
            default: break 
        }
        item.appendChild(img)
        photoGallery.appendChild(item)
    }

    for (let tip of config.serverTips) {

        let item = document.createElement('div')

        switch (tipActive) {
            case false: 
                item.className = 'carousel-item active'
                tipActive = true 
                break 
            case true:
                item.className = 'carousel-item'
                break 
            default: break 
        }

        item.innerHTML = `<div class="card">
        <div class="card-body">
          <h5 class="card-title">${tip.title}</h5>
          <p class="card-text">${tip.description}</p>
        </div>
      </div>`

      infoList.appendChild(item)
    }


    if (config.musicPlayer.songList.enable) {

        $('#song-li-close').hover(function() {
            $(this).css('background-color', 'silver')
        }, function() {
            $(this).css('background-color', 'transparent')
        })
    
        $('#change-song').click(()=>{
            if (mp3Animating) { return }
            mp3Animating = true 
            $('#song-list').show()
            $('#change-song').css('animation', 'go-out 0.5s forwards')
            setTimeout(() => {
                $('#change-song').hide()
                $('#change-song').css('animation', 'come-in 0.5s forwards')
                mp3Animating = false
            }, 500);
        })
    
        $('#song-li-close').click(()=>{
            if (mp3Animating) { return }
            mp3Animating = true 
            $('#song-list').css('animation', 'go-out 0.5s forwards')
            $('#change-song').show()
            setTimeout(() => {
                $('#song-list').hide()
                $('#song-list').css('animation', 'come-in 0.5s forwards')
                mp3Animating = false
            }, 500);
        })

        let mainCont = document.createElement('div')
        mainCont.className = 'song-li-item'
        let mainBtn = document.createElement('button')
        mainBtn.className = 'song-li-play'
        mainBtn.innerHTML = `<i class="bi bi-play"></i>`
        let mainSong = document.createElement('p')
        mainSong.className = 'song-name'
        mainSong.innerHTML = config.musicPlayer.defaultSongName
        $(mainBtn).click(()=>{
            $('#audio').attr('src', `./assets/songs/${config.musicPlayer.defaultSongPath}`)
            $('#audio')[0].play()
        })
        Songs.appendChild(mainCont)
        mainCont.appendChild(mainBtn)
        mainCont.appendChild(mainSong)
        for (let song of config.musicPlayer.songList.songs) {
            let songCont = document.createElement('div')
            songCont.className = 'song-li-item'
            let songBtn = document.createElement('button')
            songBtn.className = 'song-li-play'
            songBtn.innerHTML = `<i class="bi bi-play"></i>`
            let songName = document.createElement('p')
            songName.className = 'song-name'
            songName.innerHTML = song.songName
            $(songBtn).click(()=>{
                $('#audio').attr('src', `./assets/songs/${song.songFileName}`)
                $('#audio')[0].play()
            })
            Songs.appendChild(songCont)
            songCont.appendChild(songBtn)
            songCont.appendChild(songName)
        }
    } else {  $('#change-song').hide() }

    fetch('../data/data.json')
    .then(response => response.json())
    .then(data => {
        for (let key of data) {
          let cont = document.createElement('div')
          cont.className = 'disc-cont'
          let auth = document.createElement('div')
          auth.className = 'disc-author'
          let authImg = document.createElement('img')
          authImg.className = 'disc-author-img'
          authImg.src = key.url
          let authName = document.createElement('p')
          authName.className = 'disc-author-name'
          authName.innerHTML = key.name
          let msgCont = document.createElement('div')
          msgCont.className = 'disc-author-msg'
          let msgMsg = document.createElement('p')
          msgMsg.className = 'disc-author-content'
          msgMsg.innerHTML = key.msg
          if(!channel) {
            channel = document.getElementById('channel-name')
            channel.innerHTML = `#${key.channel}`
          }
          parent.appendChild(cont)
          cont.appendChild(auth)
          auth.appendChild(authImg)
          auth.appendChild(authName)
          cont.appendChild(msgCont)
          msgCont.appendChild(msgMsg)
      }
    })
    .catch(error => console.error('Error fetching discord channel data:', error));

    $('#nav').hover(function(){
        onNav = true
    }, function() {
        onNav = false
    })
    $('.song-li-play').hover(function(){
        $(this).css('background-color', ' rgba(0, 0, 0, 0.936)')
    }, function() {
        $(this).css('background-color', 'rgba(0, 0, 0, 0.478)')
    })
  

    $('#menu').hover(function(){
        $(this).css('background-color', 'rgba(0, 0, 0, 0.79)')
    }, function() {
        $(this).css('background-color', 'transparent')
    })

    $('.nav-item').hover(function(){
        $(this).css('background-color', 'rgb(255, 255, 255)')
    }, function(){
        $(this).css('background-color', 'rgba(255, 255, 255, 0.632)')
    })

    $('#discord').hover(function(){
        $(this).css('opacity', '0.82')
    }, function(){
        $(this).css('opacity', '0.22')
    })
    
    $('#vol-ctrl').hover(function(){
        $(this).css('background-color', 'rgba(0, 0, 0, 0.62)')
    }, function() {
        $(this).css('background-color', 'rgba(0, 0, 0, 0.22)')
    })

    $("#audio-slider").val(0.5)

    $('#audio').prop('volume', $("#audio-slider").val())

    $("#audio-slider").mouseup(function () {
        $('#audio').prop('volume', $(this).val());
        if ( $(this).val() > 0.6 ) {
            $('#audio-ico').attr('class', 'bi bi-volume-up-fill')
        } else if ($(this).val() > 0.1 && $(this).val() < 0.6) {
            $('#audio-ico').attr('class', 'bi bi-volume-down-fill')
        } else if ($(this).val() < 0.001) {
            $('#audio-ico').attr('class', 'bi bi-volume-mute-fill')
        }
    })
})