import FontFaceObserver from 'fontfaceobserver';

const Fonts = () => {
  const ubuntu = new FontFaceObserver('Ubuntu');
  const link = document.createElement('link');

  link.href = 'https://fonts.googleapis.com/css?family=Ubuntu';
  link.rel = 'stylesheet';

  ubuntu.load().then(() => { document.body.classList.add('ubuntu') });

  document.head.appendChild(link);
};

export default Fonts;
