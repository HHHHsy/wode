Page({
  data: {
    isPlayingMusic: false
  },
  bgm:null,
  music_url:'http://localhost:80/1.mp3',
  music_coverImgUrl:'http://localhost:80/1.jpg',
  onReady: function(){
    this.bgm = wx.getBackgroundAudioManager()
    this.bgm.title = 'marry me'
    this.bgm.epname = 'wedding'
    this.bgm.singer = 'singer'
    this.bgm.coverImgUrl = this.music_coverImgUrl
    this.bgm.onCanplay(()=> {
      this.bgm.pause()
    })
    this.bgm.src = this.music_url
  },
  play: function(e) {
    if(this.data.isPlayingMusic) {
      this.bgm.pause()
    }else{
      this.bgm.play()
    }
    this.setData({
      isPlayingMusic: !this.data.isPlayingMusic
    })
  }
})
