function domainName(url) {
  //your code here
  if (url.includes('www')) {
    return url.split('.')[1]
  } else if (!url.includes('www') && !url.includes('http')) {
    return url.split('.')[0]
  } else {
    let splitted = url.split('//')[1];
    return splitted.split('.')[0]
  }
}

function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};