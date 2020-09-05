



export async function getDevices() {
    const devices = await navigator.mediaDevices.enumerateDevices();
    console.log(devices);
  }




 export  async function  FetchVideoLocal(){
    if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
        console.log("Let's get this party started");
        navigator.mediaDevices.getUserMedia(options)
        .then(function(stream) {
        /* use the stream */
        console.log("this down below is the stream");
        console.log(stream);
            })
        .catch(function(err) {
        /* handle the error */
        });
      }
};




const options = {
    video: {
      width: {
        min: 1280,
        ideal: 1920,
        max: 2560,
      },
      height: {
        min: 720,
        ideal: 1080,
        max: 1440
      },
      facingMode: 'user'
    }
  };