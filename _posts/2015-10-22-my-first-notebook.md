---
layout: post
published: false
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

![png]({{ site.url }}/assets/my-first-notebook-post_files/my-first-notebook-post_2_0.png)



    
