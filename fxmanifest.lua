fx_version 'bodacious'
author 'Brown Development'
description 'Loading Screen V1'
game 'gta5'

files {
    'package.json',
    'config/*.json',
    'config/*.js',
    'data/data.json',
    'ui/*.js',
    'ui/*.css',
    'ui/*.html',
    'ui/assets/songs/*.mp3',
    'ui/assets/songs/*.mp4',
    'ui/assets/songs/*.wav',
    'ui/assets/songs/*.ogg',
    'ui/assets/photos/*.png',
    'ui/assets/photos/*.jpg',
    'ui/assets/photos/*.jpeg',
    'ui/assets/photos/*.gif',
    'ui/assets/video/*.mp4',
    'ui/assets/video/*.mov',
    'ui/assets/video/*.avi',
    'ui/assets/video/*.wmv',
    'ui/assets/video/*.webm',
    'ui/assets/video/*.flv'
}

server_script 'server.js'

loadscreen { 'ui/index.html' }

loadscreen_cursor 'yes'
loadscreen_manual_shutdown 'yes'

dependency 'yarn'