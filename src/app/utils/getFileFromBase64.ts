export function getFileFromBase64(
  base64data: string,
  fileName: string = 'BlogImg.jpg'
) {
  let byteString;
  if (base64data.split(',')[0].indexOf('base64') >= 0) {
    byteString = atob(base64data.split(',')[1]);
  } else {
    byteString = unescape(base64data.split(',')[1]);
  }

  const mimeString = base64data.split(',')[0].split(':')[1].split(';')[0];

  const ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new File([ia], fileName, { type: mimeString });
}
