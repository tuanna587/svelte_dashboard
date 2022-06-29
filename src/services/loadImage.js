let loadImage = async (image_url) => {
  const promise = new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => {
      console.log('image loaded');
      resolve(image_url);
    };
    img.onerror = reject;
    img.src = image_url;
  });
  promise.catch((error) => {
    console.error(error);
  });
  return promise;
};

export default loadImage;
