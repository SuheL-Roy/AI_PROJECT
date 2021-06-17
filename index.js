

const imageUpload = document.getElementById('imageUploaded');

Promise.all([
  faceapi.nets.faceRecognitionNet.loadFromUri('./models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('./models'),
  faceapi.nets.ssdMobilenetv1.loadFromUri('./models')
]).then(start)

function start() {
    document.body.append("Loaded")
    imageUpload.addEventListener('change' , async () => {
        const image = await faceapi.bufferToImage(imageUpload.files[0]);
        document.append(image);
        const detections = await faceapi.detectAllFaces(image)
        .withFaceLandmarks().withFaceDescriptors()
        document.body.append(detections.length);
    })
}