const app = Vue.createApp({
    data() {
        return {
            ready: false,
            mapper: null,
            game: null,
            gameIndex: null,
            music: [],
            curSong: new Audio(),
            healFinished: false,
            healed: new Audio(),
            musicVolume: 100,
            sfxVolumeFactor: 0.9, //intended to correct volume so that 100% music = 100% sfx
            worldSfxVolume: 100,
            battleSfxVolume: 100,
            eventSfxVolume: 100,
            wildCheck: true,
            trainerCheck: true,
            customTrainerCheck: true,
            clickCheck: true,
            doorCheck: true,
            bonkCheck: false,
            poisonCheck: false,
            boulderCheck: "Full",
            selectionType: "Accurate",
            minLength: 30,

        }
    },
    methods: {

        playMusic() {
            //this is the main "driver" for the music player that watches for changes and calls pickSong

            this.game = this.mapper.meta.gameName;
            if(this.game.includes("Deprecated")) {
                this.game = this.game.replace(" - Deprecated Mapper", "");
            }
            console.log(this.game);
            let ch1 = musicData[this.game].ch1;
            let map = musicData[this.game].map;
            let bank = musicData[this.game].bank;
            setTimeout(() => { //delay so gamehook can update
                this.pickSong(this.mapper.properties.audio[ch1], this.mapper.properties.audio[map]?.value, this.mapper.properties.audio[bank]?.value, this.mapper, this.game);
            }, 2); //delay so gamehook can update

            // if(selectionType="Streaming") {
            //     this.mapper.properties.overworld.map.change(async (x) => {
            //         channel1id = this.mapper.properties.audio[ch1];
            //         console.log("Entered "+ this.mapper.properties.overworld.map + " in group " +this.mapper.properties.audio[map].value);
            //         setTimeout(() => { //delay so gamehook can update
            //         this.pickSongMapBased(this.mapper.properties.audio[ch1], this.mapper.properties.audio[map].value, this.mapper.properties.audio[bank].value,this.mapper.properties.overworld.map.value, this.mapper, this.game);
            //         }, 2); //delay so gamehook can update
            //     })
            //     return;
            // }
            this.mapper.properties.audio[ch1].change(async (x) => {
                channel1id = this.mapper.properties.audio[ch1];

                setTimeout(() => { //delay so gamehook can update
                this.pickSong(this.mapper.properties.audio[ch1]?.value, this.mapper.properties.audio[map]?.value, this.mapper.properties.audio[bank]?.value, this.mapper, this.game);
                }, 2); //delay so gamehook can update
            })
            // this.mapper.properties.audio[ch1].change(async (x) => {
            //     channel1id = this.mapper.properties.audio[ch1];
            //     setTimeout(() => { //delay so gamehook can update
            //     this.pickSong(this.mapper.properties.audio[ch1], this.mapper.properties.audio[map].value, this.mapper.properties.audio[bank].value, this.mapper, this.game);
            //     }, 2); //delay so gamehook can update
            // })
            //if a song has the "heal" : "heal" propery, it will play to completion.
            //this is really for any short jingles we want to play to the end of the file
            //without letting them get interrupted. 
            this.healed.loop = false;
            this.healed.addEventListener('ended', (event) => {
                this.healed.pause();
                this.healed.currentTime=0;
                this.healFinished = true;
                setTimeout(() => { //delay so gamehook can update
                    let game = musicData[this.mapper.meta.gameName];
                    this.pickSong(this.mapper.properties.audio[ch1], this.mapper.properties.audio[map].value, this.mapper.properties.audio[bank].value, this.mapper, game);
                }, 2); //delay so gamehook can update
            });
        },

        pickSong(ch1id, mapMusic, musicBank, mapper, game) {
            //this function uses logic to figure out which song to play then calls playSong

            // game = this.mapper.meta.gameName;
            game = this.game;
            if(musicData[game] == undefined) {
                console.log("Music data is not present for this game: " + game);
                return;
            }
            setTimeout(() => {
            for (let i = 0; i < musicData[game].music.length; i++) {  
                if (
                    musicData[game].music[i][musicData[game].ch1] == ch1id &&
                    (musicData[game].music[i][musicData[game].map] == mapMusic || musicData[game].music[i][musicData[game].map] == undefined) &&
                    (musicData[game].music[i][musicData[game].bank] == musicBank || musicData[game].music[i][musicData[game].bank] == undefined)
                ) {
                    if(this.selectionType=="Streaming")
                    {
                        console.log("1")
                        if(this.curSong.currentTime>0 && this.curSong.currentTime < this.minLength){
                            console.log("2")
                            if(musicData[game].music[i].battle!="champion") {
                                console.log("3")
                                return;
                            }
                        }
                    }
                    //skip unchecked options
                    if(musicData[game].music[i].battle=="wild" && !this.wildCheck) {
                        return;
                    }
                    if(musicData[game].music[i].heal === "heal") {
                        this.healed.src = musicData[game].music[i].file;
                        this.curSong.pause();
                        this.healed.volume = this.musicOutput;
                        this.healed.play();
                        return;
                    }
                    if(musicData[game].music[i].battle=="trainer" && !this.trainerCheck) {
                        return;
                    }
                    if(ch1id==0) {
                        if(this.mapper.properties.audio.channel2MusicID > 0 && musicData[game].music[i].channel2MusicID != this.mapper.properties.audio.channel2MusicID) {
                            console.log("this track is using ch2 but not ch1. ID: " + this.mapper.properties.audio.channel2MusicID)
                            //console.log("ID2:" + this.mapper.properties.audio.channel2MusicID + "table id2: " + musicData[game].music[i].channel2MusicID);
                            continue;
                        }
                    }
                    if(musicData[game].music[i].file === "music/silent.wav") {
                        //need to figure out what spots really need this or else it disrupts some transitions
                        //may want silence for dramatic pauses ie pkmn league before fighting lance in crystal
                        //may also want pauses during certain sound effect jingles
                        //for now if silence is encountered, nothing happens
                        break;
                    }
                    if((
                            musicData[game].music[i].battle=="trainer" ||
                            musicData[game].music[i].battle=="gymLeader" ||
                            musicData[game].music[i].battle=="rocket" ||
                            musicData[game].music[i].battle=="rival" ||
                            musicData[game].music[i].battle=="eliteFour" ||
                            musicData[game].music[i].battle=="champion"
                        ) && 
                        this.customTrainerCheck &&
                        musicData[game].music[i].stage=="battle"
                    ) {
                        if(customTrainers[game]){
                            for(let j = 0; j < customTrainers[game].trainers?.length; j++) {
                                if(((this.mapper.properties.battle.textBuffer?.value == customTrainers[game].trainers[j].name) && customTrainers[game].trainers[j].name) || 
                                    ((this.mapper.properties.battle.trainer.name?.value == customTrainers[game].trainers[j].name) && customTrainers[game].trainers[j].name) || 
                                    ((this.mapper.properties.battle.trainer.class?.value == customTrainers[game].trainers[j].name) && customTrainers[game].trainers[j].name) || 
                                    ((this.mapper.properties.battle.trainer.opponent?.value == customTrainers[game].trainers[j].opponent) && customTrainers[game].trainers[j].opponent) ||
                                    ((this.mapper.properties.battle.trainer.opponentA?.value == customTrainers[game].trainers[j].opponentA) && customTrainers[game].trainers[j].opponentA)) {
                                        console.log("Now facing: " +this.mapper.properties?.battle?.trainer?.opponent?.value);
                                        console.log("Now playing: "+ customTrainers[game]?.trainers[j]?.opponent)
                                        console.log("index: " +j)
                                    this.playSong(customTrainers[game].trainers[j]?.file);
                                    return;
                                }
                            }
                            for(let j = 0; j < customTrainers[game].classes?.length; j++) {
                                if(this.mapper.properties.battle.trainer.class == customTrainers[game].classes[j].class) {
                                    this.playSong(customTrainers[game].classes[j].file);
                                    return;
                                }
                            }
                            for(let j = 0; j < customTrainers[game].types?.length; j++) {
                                if(musicData[game].music[i].battle == customTrainers[game].types[j].type) {
                                    this.playSong(customTrainers[game].types[j].file);
                                    return;
                                }
                            }
                        }
                    }
                    this.playSong(musicData[game].music[i].file);
                    return musicData[game].music[i].file;
                }
            }
            if(ch1id != 0) {
                //these can help add new ids or help catch missing ones
                console.log("match not found for id:" + ch1id + ", map:" + this.mapper.properties.overworld.mapName.value/*mapMusic*/ + ", bank:" + musicBank);
                if(this.mapper.properties.meta.state=="Battle") {console.log("In battle")}
                // console.log("text: " + this.mapper.properties.battle.textBuffer.value + " Map group:" + this.mapper.properties.overworld.mapGroup.value + " Map Number:" + this.mapper.properties.overworld.mapNumber.value + " y:" + this.mapper.properties.overworld.y.value + " x:" + this.mapper.properties.overworld.x.value + " time:" + this.mapper.properties.time.current.timeOfDay.value);
            }
                return null;
                }, 2); //delay so gamehook can update
        },

        pickSongMapBased(ch1id, mapMusic, musicBank, overworld, mapper, game) {
            //this function uses logic to figure out which song to play then calls playSong
            
            // game = this.mapper.meta.gameName;
            game = this.game;
            if(musicData[game] == undefined) {
                console.log("Music data is not present for this game: " + game);
                return;
            }
            setTimeout(() => {
            console.log("overworld:  " + overworld);
            for (let i = 0; i < musicData[game].music.length; i++) {  
                /*if (
                    musicData[game].music[i][musicData[game].ch1] == ch1id &&
                    (musicData[game].music[i][musicData[game].map] == mapMusic || musicData[game].music[i][musicData[game].map] == undefined) &&
                    (musicData[game].music[i][musicData[game].bank] == musicBank || musicData[game].music[i][musicData[game].bank] == undefined)
                )*/
                // console.log(musicData[game].overworldMap)
                // console.log("loop: " + musicData[game].music[i].overworldMap)
                if(musicData[game].music[i].overworldMap == undefined) {
                    continue;
                }
                
                // console.log(musicData[game].overworldMap)
                // console.log("loop: " + musicData[game].music[i].overworld)
               
                if (
                    musicData[game].music[i][musicData[game].overworldMap].includes(overworld)
                ) {
                    if(this.selectionType=="Streaming")
                    {
                        console.log("1")
                        if(this.curSong.currentTime>0 && this.curSong.currentTime < this.minLength){
                            console.log("2")
                            console.log(musicData[game].music[i].priority!="high")
                            if(musicData[game].music[i].battle!="champion" && musicData[game].music[i].priority!="high") {
                                console.log("3")
                                return;
                            }
                        }
                    }
                    //skip unchecked options
                    if(musicData[game].music[i].battle=="wild" && !this.wildCheck) {
                        return;
                    }
                    if(musicData[game].music[i].heal === "heal") {
                        this.healed.src = musicData[game].music[i].file;
                        this.curSong.pause();
                        this.healed.volume = this.musicOutput;
                        this.healed.play();
                        return;
                    }
                    if(musicData[game].music[i].battle=="trainer" && !this.trainerCheck) {
                        return;
                    }
                    if(ch1id==0) {
                        if(this.mapper.properties.audio.channel2MusicID > 0 && musicData[game].music[i].channel2MusicID != this.mapper.properties.audio.channel2MusicID) {
                            console.log("this track is using ch2 but not ch1. ID: " + this.mapper.properties.audio.channel2MusicID)
                            //console.log("ID2:" + this.mapper.properties.audio.channel2MusicID + "table id2: " + musicData[game].music[i].channel2MusicID);
                            continue;
                        }
                    }
                    if(musicData[game].music[i].file === "music/silent.wav") {
                        //need to figure out what spots really need this or else it disrupts some transitions
                        //may want silence for dramatic pauses ie pkmn league before fighting lance in crystal
                        //may also want pauses during certain sound effect jingles
                        //for now if silence is encountered, nothing happens
                        break;
                    }
                    if((
                            musicData[game].music[i].battle=="trainer" ||
                            musicData[game].music[i].battle=="gymLeader" ||
                            musicData[game].music[i].battle=="rocket" ||
                            musicData[game].music[i].battle=="rival" ||
                            musicData[game].music[i].battle=="champion"
                        ) && 
                        this.customTrainerCheck &&
                        musicData[game].music[i].stage=="battle"
                    ) {
                        if(customTrainers[game]){
                            for(let j = 0; j < customTrainers[game].trainers.length; j++) {
                                if(this.mapper.properties.battle.textBuffer == customTrainers[game].trainers[j].name || this.mapper.properties.battle.trainer.name == customTrainers[game].trainers[j].name || this.mapper.properties.battle.trainer.class == customTrainers[game].trainers[j].name) {
                                    this.playSong(customTrainers[game].trainers[j].file);
                                    return;
                                }
                            }
                            for(let j = 0; j < customTrainers[game].classes.length; j++) {
                                if(this.mapper.properties.battle.trainer.class == customTrainers[game].classes[j].class) {
                                    this.playSong(customTrainers[game].classes[j].file);
                                    return;
                                }
                            }
                            for(let j = 0; j < customTrainers[game].types.length; j++) {
                                if(musicData[game].music[i].battle == customTrainers[game].types[j].type) {
                                    this.playSong(customTrainers[game].types[j].file);
                                    return;
                                }
                            }
                        }
                    }
                    this.playSong(musicData[game].music[i].file);
                    return musicData[game].music[i].file;
                }
            }
            // if(ch1id != 0) {
            //     //these can help add new ids or help catch missing ones
            //     console.log("match not found for id:" + ch1id + ", map:" + mapMusic + ", bank:" + musicBank);
            //     // console.log("text: " + this.mapper.properties.battle.textBuffer.value + " Map group:" + this.mapper.properties.overworld.mapGroup.value + " Map Number:" + this.mapper.properties.overworld.mapNumber.value + " y:" + this.mapper.properties.overworld.y.value + " x:" + this.mapper.properties.overworld.x.value + " time:" + this.mapper.properties.time.current.timeOfDay.value);
            // }
                return null;
                }, 2); //delay so gamehook can update
        },

        playSong(yourSong) {
            
            if(!this.curSong || !this.healed){
                console.log("error:this.curSong undefined")
                return;
            }
            else{
                if(((this.getRelativePath(this.curSong.src) != yourSong) && this.healed.paused) || this.healFinished === true) {
                    this.changeAndPlayAudio(this.curSong, yourSong);
                    this.curSong.volume = this.musicOutput;
                    this.healFinished = false;
                }
            }
        },

        // async skipIntroSilence(audioElement, audioUrl) {
        //     // const audioBlob = await this.fetchAudioAsBlob(audioUrl);
        //     // const audioBlobUrl = URL.createObjectURL(audioBlob);
        
        //     // audioElement.src = audioBlobUrl;
        
        //     const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        //     const analyser = audioContext.createAnalyser();
        //     const source = audioContext.createMediaElementSource(this.curSong);// audioContext.createMediaElementSource(audioElement);
        //     source.connect(analyser);
        //     analyser.connect(audioContext.destination);
        
            // const silenceThreshold = -40; // Adjust this value as needed
        
            // analyser.fftSize = 256;
            // const bufferLength = analyser.frequencyBinCount;
            // const dataArray = new Uint8Array(bufferLength);
        
            // function detectSilence() {
            //   analyser.getByteFrequencyData(dataArray);
            //   const amplitude = Math.max(...dataArray);
        
            //   if (amplitude < silenceThreshold) {
            //     audioElement.currentTime += 0.1; // Adjust the skip duration as needed
            //   } else {
            //     audioElement.removeEventListener('play', detectSilence);
            //   }
            //   requestAnimationFrame(detectSilence);
            // }
        
            // audioElement.addEventListener('play', detectSilence);
        //   },
        
        //   async fetchAudioAsBlob(audioUrl) {
        //     const response = await fetch(audioUrl);
        //     if (!response.ok) {
        //       throw new Error('Failed to fetch audio');
        //     }
        //     return await response.blob();
        //   },
        //   async playAudioWithIntroSkip(audioElement, audioUrl) {
        //     try {
        //       await this.skipIntroSilence(audioElement, audioUrl);
        //       audioElement.play();
        //     } catch (error) {
        //       console.error(error);
        //     }
        //   },

        changeAndPlayAudio(curSong, newSrc) {
            const vm = this;
            if(this.getRelativePath(curSong.src) == newSrc) {
                // console.log("already playing");
                if(curSong.paused) {
                    curSong.currentTime=0;
                    curSong.play();
                }
            }
            else{
                this.curSong.src = newSrc;
                try {
                    curSong.load(); // Load the new audio source
                    curSong.addEventListener('canplaythrough', function onCanPlay() {
                        curSong.removeEventListener('canplaythrough', onCanPlay);
                        //vm.skipIntroSilence(curSong); 
                        // vm.playAudioWithIntroSkip(curSong,curSong.src)
                        curSong.play();
                        curSong.loop=true;
                        // console.log("now playing: " +this.curSong.src)
                    });
                }
                catch{
                    console.log("error playing");
                }
            }
        },

        toggleAudio() {
            if (this.curSong.paused) {
              this.curSong.play();
            } else {
              this.curSong.pause();
            }
        },

        getRelativePath(fullUrl) {
            const baseUrl = window.location.href;
            const basePath = baseUrl.substring(0, baseUrl.lastIndexOf('/') + 1);
            const relativePath = fullUrl.replace(basePath, '');
            return decodeURIComponent(relativePath);
        },

        playSoundAudio(yourSound, category) {
            this.game = this.mapper.meta.gameName;
            if(this.game.includes("Deprecated")) {
                this.game = this.game.replace(" - Deprecated Mapper", "");
            }
            let newSound = new Audio(yourSound);
            //you can put these categories in soundData.js like so: "category" : "yourstuffhere"
            //right now these are just for volume controls but could maybe be used for other things
            switch(category) {
                case "world": 
                    newSound.volume = this.worldSfxOutput;
                    break;
                case "event": 
                    newSound.volume = this.eventSfxOutput; 
                    break;
                case "battle": 
                    newSound.volume = this.battleSfxOutput;
                    break;
                default: 
                    newSound.volume = this.eventSfxOutput;
                    break;
            }
            try {
                newSound.load(); // Load the new audio source
                newSound.addEventListener('canplaythrough', function onCanPlay() {
                newSound.removeEventListener('canplaythrough', onCanPlay); // Remove the event listener
                newSound.play(); // Play the audio
                newSound.loop=false;
                // console.log("now playing: " + newSound.src)
            });
            }
            catch{
                console.log("error playing");
            }
        },

        playSound() {
            this.game = this.mapper.meta.gameName;
            if(this.game.includes("Deprecated")) {
                this.game = this.game.replace(" - Deprecated Mapper", "");
            }
            if(soundData[this.game] == undefined) {
                console.log("Sound effect data is not present for this game: " + this.game);
                return;
            }
            for(let i =4; i <= 8; i++)
            {
                if(soundData[this.game]["ch"+i.toString()])
                {
                    this.playChannelSfx(i);
                }
            }
        },

        playChannelSfx (channel) {
            this.game = this.mapper.meta.gameName;
            if(this.game.includes("Deprecated")) {
                this.game = this.game.replace(" - Deprecated Mapper", "");
            }
            let chx = "ch" + channel.toString();
            if(soundData[this.game] == undefined) {
                console.log("Sound effect data is not present for this game: " + this.game);
                return;
            }
            let chxname = soundData[this.game][chx];
            this.mapper.properties.audio[chxname].change(async (x) => {
                // uncomment these when trying to find the IDs for a new game
                // if(this.mapper.properties.audio.currentSound!= 1 &&this.mapper.properties.audio.currentSound!= 2 && this.mapper.properties.audio.currentSound!= 3 && this.mapper.properties.audio.currentSound!= 17 && this.mapper.properties.audio.currentSound!= 151 && this.mapper.properties.audio.currentSound!= 18 && this.mapper.properties.audio.currentSound!= 19 && this.mapper.properties.audio.currentSound!= 144 && this.mapper.properties.audio.currentSound!= 140 && this.mapper.properties.audio.currentSound!= 145 && this.mapper.properties.audio.currentSound!= 147){
                // if (this.mapper.properties.audio[chxname] > 20 && this.mapper.properties.audio[chxname]!=144) {console.log("Sound Change ch" + channel+" - " + this.mapper.properties.audio[chxname])};//}       
                let battle = this.mapper.properties.battle.type.value;
                setTimeout(() => {
                    for (let i = 0; i < soundData[this.game].sounds.length; i++) { 
                        if (
                            soundData[this.game].sounds[i][chxname] == this.mapper.properties.audio[chxname] &&
                            (soundData[this.game].sounds[i].context ==  battle|| soundData[this.game].sounds[i].context2 ==  battle || soundData[this.game].sounds[i].context == undefined) 
                            //if more conditions need to be added to correctly identify a sound here or inside this statement is a good place to add them
                        ) {
                            boulderMaps = ["Victory Road", "Fuchsia City - House 2", "Unknown Dungeon", "Seafoam Islands"]
                            if(soundData[this.game].sounds[i].type=="cut" && boulderMaps.includes(this.mapper.properties.overworld.map.value)) {
                                return;
                            }
                            if(soundData[this.game].sounds[i].type=="boulder" && this.boulderCheck == "Full") {
                                soundData[this.game].sounds[i].file = "sounds/yellow/SFX_PUSH_BOULDER.wav";
                            }
                            if(soundData[this.game].sounds[i].type=="boulder" && this.boulderCheck == "Short") {
                                soundData[this.game].sounds[i].file = "sounds/yellow/SFX_SNARE_9.wav";
                            }
                            if(soundData[this.game].sounds[i].type=="boulder" && this.boulderCheck == "Off") {
                                return;
                            }
                            if(soundData[this.game].sounds[i].type=="poison" && !this.poisonCheck) {
                                return;
                            }
                            if(soundData[this.game].sounds[i].type=="bonk" && !this.bonkCheck) {
                                return;
                            }
                            if(soundData[this.game].sounds[i].type=="click" && !this.clickCheck) {
                                return;
                            }
                            if(soundData[this.game].sounds[i].type=="door" && !this.doorCheck) {
                                return;
                            }
                            if(soundData[this.game].sounds[i].file === "music/silent.wav") {
                                //need to figure out what spots really need this or else it disrupts some transitions
                                //this file basically just stops playing the audio when id is 0
                                //this is more relevant for music but maybe a sound will need it someday
                                break;
                            }
                            this.playSoundAudio(soundData[this.game].sounds[i].file, soundData[this.game].sounds[i].category);
                            return soundData[this.game].sounds[i].file;                        
                        }
                    }
                    // uncomment this if adding IDs for a new game
                    if(this.mapper.properties.audio[chxname] != 0 && this.mapper.properties.audio[chxname] > 20) {
                        console.log("Channel "+chx+" match not found for id:" + this.mapper.properties.audio[chxname]);
                        // console.log("text: " + this.mapper.properties.battle.textBuffer.value + " Map group:" + this.mapper.properties.overworld.mapGroup.value + " Map Number:" + this.mapper.properties.overworld.mapNumber.value + " y:" + this.mapper.properties.overworld.y.value + " x:" + this.mapper.properties.overworld.x.value + " time:" + this.mapper.properties.time.current.timeOfDay.value);
                    }
                }, 2); //delay so gamehook can update. This is to avoid race conditions
            })
            return null;
        },   

        loadFromLocalStorage(key) {
            const value = localStorage.getItem(key);
            if (value !== null) {
                this[key] = JSON.parse(value); // Update the data property from localStorage
            }
        },
        saveToLocalStorage(key) {
            localStorage.setItem(key, JSON.stringify(this[key])); // Save the data property to localStorage
        },

        loadData() {
            this.loadFromLocalStorage('musicVolume');
            this.loadFromLocalStorage('worldSfxVolume');
            this.loadFromLocalStorage('battleSfxVolume');
            this.loadFromLocalStorage('eventSfxVolume');
            this.loadFromLocalStorage('wildCheck');
            this.loadFromLocalStorage('trainerCheck');
            this.loadFromLocalStorage('customTrainerCheck');
            this.loadFromLocalStorage('clickCheck');
            this.loadFromLocalStorage('doorCheck');
            this.loadFromLocalStorage('bonkCheck');
            this.loadFromLocalStorage('poisonCheck');
            this.loadFromLocalStorage('boulderCheck');
            this.loadFromLocalStorage('selectionType');
            this.loadFromLocalStorage('minLength');
            

        },
        
    },

    created() {

    },

    computed: {
        musicOutput() {
            return this.musicVolume / 100;
        },
        worldSfxOutput() {
            return this.worldSfxVolume * this.sfxVolumeFactor / 100;
        },
        battleSfxOutput() {
            return this.battleSfxVolume * this.sfxVolumeFactor / 100;
        },
        eventSfxOutput() {
            return this.eventSfxVolume * this.sfxVolumeFactor / 100;
        },
    },
    mounted: async function () {
        const that = this
        this.mapper = new GameHookMapperClient();
        this.mapper.onConnected = (x) => this.ready = true;
        this.mapper.onDisconnected = (x) => this.ready = false;
        await this.mapper.connect();
        
        //music player
        this.loadData();
        this.playMusic(); 
        this.playSound();
    },

    watch: {
        musicVolume(newVolume) {
            this.curSong.volume = newVolume / 100;
            this.saveToLocalStorage('musicVolume'); 
        },
        worldSfxVolume() { this.saveToLocalStorage('worldSfxVolume'); },
        battleSfxVolume() { this.saveToLocalStorage('battleSfxVolume'); },
        eventSfxVolume() { this.saveToLocalStorage('eventSfxVolume'); },
        wildCheck() { this.saveToLocalStorage('wildCheck'); },
        trainerCheck() { this.saveToLocalStorage('trainerCheck'); },
        customTrainerCheck() { this.saveToLocalStorage('customTrainerCheck'); },
        clickCheck() { this.saveToLocalStorage('clickCheck'); },
        doorCheck() { this.saveToLocalStorage('doorCheck'); },
        bonkCheck() { this.saveToLocalStorage('bonkCheck'); },
        poisonCheck() { this.saveToLocalStorage('poisonCheck'); },
        boulderCheck() { this.saveToLocalStorage('boulderCheck'); },
        selectionType() { this.saveToLocalStorage('selectionType'); },
        minLength() {this.saveToLocalStorage('minLength')},
        // ready() {
        //     if(!this.ready) {
        //         console.log("no mapper loaded")
        //         this.mapper.connect();
        //     }
        // }

    }
}).mount('#app')