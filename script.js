/* set interval is used to repeat something upto some time interval
 */

// setInterval(() => {
//   console.log("nishant");
// }, 1000);

// so byexecuting this above code on console we can say that
// it will print nishant message every second upto 1000 times , so we will
// use this method.

setInterval(() => {
  d = new Date();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();
  //  now we will calculate rotation by creating rotation variables
  // for all three hands  and we will use th formulas which we already
  // derived earlier.

  hrotation = 30 * htime + mtime / 2;
  mrotation = 6 * mtime;
  srotation = 6 * stime;

  // Now we will css transform property
  /* The transform CSS property lets you rotate, scale, skew, 
or translate an element. It modifies the coordinate space of the 
CSS visual formatting model. */

  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;
}, 1000);
