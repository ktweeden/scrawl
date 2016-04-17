#Scrawl: A fully responsive theme for Ghost
Features include:

* Fully responsive, mobile first design
* Automatic estimated reading times for each post
* Easily configurable social links, without messing around with the server
* For dev blogs: includes [Prism](http://prismjs.com/) to style your code snippets   


[See the screenshots below.](#scrawl-in-action)


##How to install
Get the .zip file for the latest version [here](https://github.com/ktweeden/scrawl/archive/master.zip).

Ghost(Pro) users can upload this [.zip](https://github.com/ktweeden/scrawl/archive/master.zip) file via the Pro dashboard. See the [official guide](http://support.ghost.org/upload-theme-ghostpro/).
Self-hosted Ghost users should upload the [.zip](https://github.com/ktweeden/scrawl/archive/master.zip) file to Ghost's `content/themes/` directory and extract it with `unzip -o scrawl-master.zip`


##Configuration
Scrawl adheres to the [Ghost Theme Configuration Approach](https://github.com/unwitting/gtca), allowing you to add your own social media links to pre-formatted buttons without touching your website's server.

The configuration for Scrawl uses the code injection interface, which you will find at yourwebsite.address/ghost. Each social network or profile that you want to add, requires only one line adding to the blog header code injection.

This configuration approach is designed to be as easy for the user as possible, but if you have any problems then please don't hesitate to get in touch with me!

###Social media links
Scrawl supports a range of social media platforms. When configured, a button will appear for each platform in the footer that appears on each page of the theme.

Below is the list of the social media platforms currently supported. Choose the ones that you would like to include on your blog and copy the code. Then, replace the ... with your username for that platform. Remember to keep the speech marks!

For example, if I wanted to add a link to my twitter profile to a blog using scrawl I would simply put

`<script>window.__themeCfg.twitterUsername = 'ktweeden';<script>`

in the blog header box on the code injection tab of the blog's admin interface.

bitbucket: `<script>window.__themeCfg.bitbucketUsername = '...';</script>`

codepen: `<script>window.__themeCfg.codepenUsername = '...';<script>`

facebook: `<script>window.__themeCfg.facebookUsername = '...';<script>`

github: `<script>window.__themeCfg.githubUsername = '...';<script>`

instagram: `<script>window.__themeCfg.instagramUsername = '...';<script>`

pinterest: `<script>window.__themeCfg.pinterestUsername = '...';<script>`

tumblr: `<script>window.__themeCfg.tumblrUsername = '...';<script>`

twitter: `<script>window.__themeCfg.twitterUsername = '...';<script>`

vine: `<script>window.__themeCfg.vineUsername = '...';<script>`

youtube: `<script>window.__themeCfg.youtubeUsername = '...';<script>`

###Disqus
Scrawl comes with [Disqus](www.disquss.com) as a way for you to add commenting to your blog.

If you want to enable commenting, first make sure that you have an account on Disqus. You then need to create a "channel" for your blog using Disqus's website. This channel will hold all of the comments for your blog.

When you have created your channel, copy the following code into the blog header box in the code injection tab on your blog's admin interface, replacing ... with your channel's name (no spaces!).

`<script>window.__themeCfg.disqusUsername = '...';</script>`

##Scrawl in action
Enough talk, here are some pictures.


###Home page
![Scrawl home page example](https://dl.dropboxusercontent.com/s/k2nvu6u9uilhyo0/scrawFpFull.png?dl=0)

###Post
![Scrawl post example](https://dl.dropboxusercontent.com/s/62ia4v64y298mh1/A%20long%20article%20example.png?dl=0)

![Scraw formatting](https://dl.dropboxusercontent.com/s/sszi74h0qzpvtmw/scrawlPostFull.jpg?dl=0)

###Tablet
![Scrawl home page example](https://dl.dropboxusercontent.com/s/ew5skbpisd2gra3/scrawlTabletIndex.png?dl=0)

###Mobile
![Scrawl home page example](https://dl.dropboxusercontent.com/s/9i3eo9pl5taq5tu/scrawlPhoneIndex.png?dl=0)
