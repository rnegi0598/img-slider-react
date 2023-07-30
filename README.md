# React slider 
In this tutorial we build img slider as a react component.    

We don't want to specify fixed width and height inside of our slider.User must provide width and height.    

when to use backgroundImage vs img tag ?  
with img the image will stretch but with backgroundImage the image will cover as we provide backgroundSize=cover. 
but it can be solved by using object-fit:cover in img tag styles.  

adding auto-scrolling and animation to the slides .
- adding animation : Loading all the images will be necessary to perform then transform .
- for auto-scrolling we used setTimeOut as using setInterval would interupt when the user would  click the slide prev or next.So we used SetTimout and timer will start on new slide load and if user clicks on next or prev the old timer will be reset and a new timer will start .  
