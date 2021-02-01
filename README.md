# XioamiCloudDownloader
Download Gallery items (Images/Videos) from Xioami Cloud. The concept should be replicatable for Recordings as well.

# Supported Browsers
Tested to work on Chrome browser, expected to work with all modern browsers,including Chrome-based web browsers (e.g: Microsoft Edge) and Firefox.

# Steps
1. Open Microsoft Edge or any of the supported browsers above
2. Login to [Xiaomi Cloud](https://i.mi.com/)
3. Open the Gallery in Xiaomi Cloud
4. *[Optional] - Open an album if you only want to download a specific album.*
5. Click and open a photo to download.
*Note: Only the pictures after the picture that you select (next picture action) will be downloaded, so, click on the first picture in the top left corner to download all pictures in the page.*
6. Disable 'Ask where to save each file before downloading' in [Chrome Download Settings](chrome://settings/downloads)
7. *[Optional] - [Choose a download directory in Chrome](chrome://settings/downloads)*
8. On the Chrome tab with the Xiaomi Cloud Gallery: Right-click > Inspect > Console.
9. Copy and Paste the code from [here](https://raw.githubusercontent.com/haneef95/XioamiCloudDownloader/master/miGalleryDownloader.js).
10. This should automatically download each item and click next and loop. Go for a coffee! It'll take a while!