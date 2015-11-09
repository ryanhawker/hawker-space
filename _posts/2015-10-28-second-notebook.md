---
layout: post
published: true
---



{% highlight python %}
twos = [2,2,2,2]
list_comp = [z < 3 for z in twos]
truthyness = all(list_comp)
print truthyness
True
{% endhighlight %}

This is my first notebook and so, I am just going to throw in some code, some
plots, and see what happens. Chur to that.

{% highlight python %}
%matplotlib inline
from pylab import *
x = arange(0,5,0.1)
y = sin(2 * x)
plot(x,y)
show()
{% endhighlight %}

![png]({{ sitre.url }}/assets/my-first-notebook-post_files/my-first-notebook-post_2_0.png)


The first thing that I have ran into is that to get the images to work
correctly, I have created an "assests" folder in the root directory of my Jekyll
site in which I place the images. I then have to link to them in the .md file
using "\{\{ site.url \}\}/assets/some-image" or else the images get left behind.

The next problem that I can see is that the input/output of code is not being
differentiated and I have no code highlighting.. the highlighting might be ok, I
can probably take care of that in Jekyll (I think they have something for that).
Let's see what we can do there.

Let us try some LaTeX! \\(\Phi = \frac{V_{\pi}}{\pi}\cdot\cos(\omega)\\) look look
it's an equation! (I only got this working after some fidling.. see my post 
[Hot Dang Math]({% post_url 2015-10-28-hot-dang-math %}) to see what I had to go through to get this to render properly!)

Ok so I got my code highlighted using Liquid tags reading the official Jekyll
documentation. It was harder than it sounded but not too bad.. I ran into a bug
(which I haven't quit fixed..) which breaks the whole website. If you leave
blank lines near the liquid tags, they don't believe they are closed. Not good!
Will continue to try and fix/work around that. Removing lines is giving me weird
indentation issues.

Also had a problem with indenting my code blocks. Apparently if you are using
the highlighting block, you don't need to indent the code block (markdown wise).
And so that "fixes" it? Yep.
