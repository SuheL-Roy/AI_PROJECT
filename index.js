

const imageUpload = document.getElementById('imageUploaded');

Promise.all([
  faceapi.nets.faceRecognitionNet.loadFromUri('./models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('./models'),
  faceapi.nets.ssdMobilenetv1.loadFromUri('./models')
]).then(start)

 async function start() {
   const container = document.createElement('div')
   container.style.position= 'relative'
   document.body.append(container)
    document.body.append("Loaded")
    imageUpload.addEventListener('change' , async () => {
        const image = await faceapi.bufferToImage(imageUpload.files[0]);
        document.body.append(image);
        const canvas = faceapi.createCanvasFromMedia(image)
        document.body.append(canvas);
        const detections = await faceapi.detectAllFaces(image)
        .withFaceLandmarks().withFaceDescriptors()
        document.body.append(detections.length);
    })
}