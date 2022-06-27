I'm reading about dynamic routes.
I create a file in pages/posts/[pid].jsx
Now I am wondering how to actually dynamically display content
If I enter the route 'http://localhost:3000/posts/123' then I get 'Post: 123' since it takes the dynamic parameter at the end
but what if posts/123 actually contents string content, how do you display that data?
I assume you fetch it by it's 'id' which is the 123

Links
"Client-side navigations to dynamic routes are handled with next/link. If we wanted to have links to the routes used above it will look like this:"
Wrap the content with link 


I am realzing that with my Tab navigation, I have two options to consider
1. take the index home and about files and put them in component folder, since with Tab nav, I don't need to use the Link
2. skips the tab completely if I want to leave those files into the posts folder so that they can be routes
I think I will go with option 1. move the files into components. 

Update - problem with no history route. 
The issue with 1 is if I press back, I will always land on the 'About' tab


