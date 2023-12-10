## Extract Title, Description, Keywords and Images from URLs with Node.js

You want to display a preview of a website when they share the link just like when sharing on Facebook or Morioh. html-metadata-parser is a library used to separate meta tag information: title, description, image…

### How to use Html Metadata scraper and parser for Node.js
```bash
npm install html-metadata-parser
yarn add html-metadata-parser
pnpm add html-metadata-parser
```
```js
const { parser } = require('html-metadata-parser')

parser('https://www.youtube.com/watch?v=nKPbfIU442g').then((result) => {
	console.log(result)
}).catch((err) => {
	console.log(err)
})
```

### Result
```json
{
   "meta": {
      "title": "YouTube",
      "description": "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube."
   },
   "og": {
      "images": [
         {
            "url": "https://i.ytimg.com/vi/GN2nFJ9Ku6Q/maxresdefault_live.jpg",
            "width": 1280,
            "height": 720
         }
      ],
      "videos": [
         {
            "url": "https://www.youtube.com/embed/GN2nFJ9Ku6Q",
            "secure_url": "https://www.youtube.com/embed/GN2nFJ9Ku6Q",
            "type": "text/html",
            "width": 480,
            "height": 360
         }
      ],
      "site_name": "YouTube",
      "url": "https://www.youtube.com/watch?v=GN2nFJ9Ku6Q",
      "title": "Create Resilience – Pivoting a running business in real time",
      "image": "https://i.ytimg.com/vi/GN2nFJ9Ku6Q/maxresdefault_live.jpg",
      "description": "What do you do when the lockdown in response to a global pandemic shuts down your business model? Brian Fitzpatrick, Founder and CTO of Tock, led his company...",
      "type": "video.other"
   },
   "images": []
}
```