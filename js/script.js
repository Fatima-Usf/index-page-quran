(function(){
  var quran = {
    run: function(){
      this.initialize();
      this.startSlider();

    },
    initialize: function(){
      this.index = 0;
      this.desktopImage = document.querySelector('#imgDesk');
      this.mobileImage = document.querySelector('#imgMob');
      document.querySelector('#time').innerHTML = this.getCurrentTime();
      this.website = document.querySelector('#website');


    },
    startSlider: function(){
      setInterval(function() {
        this.desktopImage.src= this.images[this.index]['desktop'];
        this.mobileImage.src= this.images[this.index]['mobile'];

        this.updateIndex();
      }.bind(this), 4000);
    },
    updateIndex: function(){
      if (this.index < this.images.length -1) {
        this.index++;

      }else {
        this.index = 0;
      }
    },
    getCurrentTime: function() {
      var date = new Date ();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var amPm = hours >= 12 ? 'PM':'AM';
      hours = hours %12;
      hours = hours ? hours: 12;
      hours = hours < 10 ? '0'+ hours : hours;
      minutes = minutes < 10 ? '0'+ minutes : minutes;
      return hours + ':' + minutes + ' '+ amPm ;
    },
    images: [
      {
        desktop: 'img/t.png',
         mobile: 'img/ayhe.png',


    },
    {
      desktop: 'img/t2.png',
      mobile: 'img/Q.png',


  },
  {
    desktop: 'img/ayh.jpg',
    mobile: 'img/BEST.png',


}
  ]


};
quran.run();
})();
