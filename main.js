Webcam.set({
    width:350,
    height:350,
    image_format: 'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach( '#camera');
function take_snapshot() {
Webcam.snap(function(data_url){
document.getElementById("results").innerHTML = '<img id="captured_image" src="' + data_url+'">';

});
}
console.log('ml5version',ml5.version);
classifier = ml5.imageClassifier('',modelLoaded);
function modelLoaded() {
    console.log("Model Loaded!");
}
function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}
function gotResult(error,results) {
if (error) {
    console.error(error);

}
else{
    console.log(results) ;
    document.getElementById("result_family_members_name").innerHTML = results[0].label;
    document.getElementById("result_family_members_accuracy").innerHTML = results[0].confidence.toFixed(3);
    
}
}