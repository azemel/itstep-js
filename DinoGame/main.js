window.addEventListener("load", () => {

  const canvas = $("canvas", {
    width: window.innerWidth,
    height: window.innerHeight
    // style: {
    // }
  });

  document.body.append(canvas);

  draw(canvas);
});