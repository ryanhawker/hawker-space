---
published: true
---
This is a topic that is worth talking about if you're into any kind of electronnics prototyping or hacking.

What do you do if you only use 3 opamps in a quad pack? Just leave the fourth opamp floating? 500 x NO. Leaving the opamp foating is literaly the worst thing you can do, as both inputs are floating and will pick up noise the output may switch from rail to rail randomly. Much bad. 

There are two steps to insuring the best setup for an unused opamp:
1. The op amp inputs must be actively held within the input common-mode voltage range of the device. 
2. The op amp output must be set within the output voltage swing range of the device.
