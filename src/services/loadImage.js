let loadImage = async (image_url) => {
  // const response = await fetch(image_url);
  // let res = await response.json();
  // console.log('res', res);
  // return res.message;

  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => {
        console.log('image loaded');
        resolve(image_url)
    };
    img.onerror = reject;
    img.src = image_url;
  });
};

export default loadImage;
