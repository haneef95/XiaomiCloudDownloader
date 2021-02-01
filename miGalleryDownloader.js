function randomInt(min, max){
  const r = Math.random()*(max-min) + min  
  return Math.floor(r)
}

function sleep(ms) {
  console.log("Sleeping for: "+ ms)
  return new Promise(resolve => setTimeout(resolve, ms));

}
async function keepDownloadingImgs() {
  while(1){
    await sleep(randomInt(755,1100));
    console.log("Attempting download...");
    document.querySelector('.download-c_kuy').click();
    await sleep(randomInt(1100,1900));
    console.log("Attempting next gallery item...");
    document.querySelector('.ico-next-4KyWW').click()
  }
}
keepDownloadingImgs();