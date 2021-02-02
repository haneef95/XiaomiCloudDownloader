# Xiaomi Cloud - Mass/Bulk Gallery Downloader
Download Gallery items (Images/Videos) from Xiaomi Cloud in bulk/enmasse. The concept should be replicatable for Recordings as well.

# Supported Browsers
Tested to work on Chrome browser, expected to work with all modern browsers,including Chrome-based web browsers (e.g: Microsoft Edge) and Firefox.

# Steps
1. Open Microsoft Edge or any of the supported browsers above.
2. Disable 'Ask where to save each file before downloading' in [Chrome Download Settings](chrome://settings/downloads) - Open chrome://settings/downloads on the browser
3. *[Optional] - [Choose a download directory in Chrome](chrome://settings/downloads)*
4.  Login to [Xiaomi Cloud](https://i.mi.com/)
5. Open the Gallery in Xiaomi Cloud
6. *[Optional] - Open an album if you only want to download a specific album.*
7. Click and open a photo to download.
*Note: Only the pictures after the picture that you select ( > next picture action) will be downloaded, so, click on the first picture in the top left corner to download all pictures in the page.*
8. On the Chrome tab with the Xiaomi Cloud Gallery: Right-click > Inspect > Console.
9. Copy and Paste the code from [here](https://raw.githubusercontent.com/haneef95/XiaomiCloudDownloader/master/miGalleryDownloader.js).
10. Chrome will block one of the downloads and ask 'Download multiple files?' > Click 'Allow'.
11. This should automatically download each item, click next and loop. Go for a coffee! It'll take a while!
