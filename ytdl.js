const fs = require('fs');
const ytdl = require('ytdl-core');

function ytdownload(url) {
	var videoName = ytdl.getBasicInfo(url);
	ytdl('http://www.youtube.com/watch?v=A02s8omM_hI', { filter: format => format.container === 'webm' })
		.pipe(fs.createWriteStream(videoName+".webm"));
}

function getFileName(url) {
	return ytdl.getBasicInfo(url);
}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:video/webm;charset=utf-8,' + fs.readFile(filename + '.webm', 'utf-8', (err, data) => { 
    if (err) throw err; 
  
    // Converting Raw Buffer to text 
    // data using tostring function. 
    return data; 
	}) );
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

document.getElementById("dwn-btn").addEventListener("click", function(){
    // Generate download of hello.txt file with some content
    var url = document.getElementById("url-text").value;
    var filename = getFileName(url);
    
    download(filename, text);
}, false);
