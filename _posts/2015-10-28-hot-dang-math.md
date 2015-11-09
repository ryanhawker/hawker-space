---
layout: post
published: true
---



This post is an attempt to get LaTeX math rendering using [KaTeX](https://khan.github.io/KaTeX/), "The _fastest_ math typesetting library for the web". Hot dang doesn't that sound like fun! I'll list out some problems that I face along the way and demo the final product at the end of the post!

We start by just walking through their README.md file on github. I include the two CDN links to the minified KaTeX css and js files into my default.html layout template. 
{% highlight html %}
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.3.0/katex.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.3.0/katex.min.js"></script>
{% endhighlight %}
Tada! Show me the action! \$ \cos(\omega) = \pi \$
BZZZZT. It ain't that simple.

###First Problem###
Well that didn't take long did it. The first problem that I ran into is that to render my maths, where ever I want it to be I need to put something like this:
{% highlight html %}
<script>katex.render("\cos(\omega) = \pi", element);</script>
{% endhighlight %}
IN MY MARKDOWN. Not only is that ugly, but that's going to make converting my IPython notebooks to markdown even more troublesome.. I don't like it.

So what can I do instead? Ooooh hold on at the bottom of their README.md I have found the solution ==> __*AUTO-RENDERING*__. Woo!

This solution requires just one more CDN link added to my default.html layout template
{% highlight html %}
<script src="//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/contrib/auto-render.min.js"></script>
{% endhighlight %}
and we also have to call this function after the element containing our math
{% highlight html  %}
<script>renderMathInElement(document.getElementById("example"));</script>
{% endhighlight %}
I added this line in an include file and included it at the bottom of my post layout file, so that it is included only when a post appears (because there wont be any math popping up anywhere else).

Ok so now what do we get? \\(\cos(\omega) = \pi\\) 
BOOYA! We have lift off!
How about display math? 
$$ \Omega = \frac{2\pi}{c}\cdot\sin\bigg(\omega t\bigg) $$
Ohhhh yea. Great success!
