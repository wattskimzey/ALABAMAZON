# ALABAMAZON
It's the place to go to buy the stuff you need in Alabama.  Y'all.  

# ALABAMAZON
![ALABAMAZON](https://raw.githubusercontent.com/tomboygitty/Project-2/master/public/images/LBK2GO_LOGO.png)

## Description
LBK2GO is a song request program that allows multiple users to request songs to sing at live band karaoke shows.  As songs are submitted, they enter a queue.  The MC of the show monitors the queue and marks songs as sung.  Queue order can be manipulated by the MC in the event of a tip or multiple requests from the same singer.

## Motivation
Live Band Karaoke (LBK for the un-initiated) is different from traditional karaoke in that the singer sings with a live band rather than backing tracks.  While modern karoke venues have access to hundreds of thousands of backing tracks, most LBK bands only know a few hundred songs.  As such, song menus must be distributed, along with pens and requests slips in the venue.  Singers review the song menu, fill out request slips and give them to the MC. The MC has to run the show based on a stack of request slips in hand.  The manual solution is costly, hard to maintain, and not effective in extremely dark venues.  So we decided to come up with a less sucky solution. 

## Results
We're pretty happy with what we were able to accomplish with our MVP.  Initially, we had a large list of use cases we were trying to tackle, but the tight turnaround forced us to re-swizzle a realistic MVP.

## Team Efforts
* _Idea and project management_ - Richard 
* _front end/back end_ - Tom & James

### Challenges
The biggest challenge was time.  Standups and daily meetings were minimal due to personal schedules. Luckily, we were able to get in a couple of days in class to work solely on the project. Secondly, we had to keep in mind that 90%+ of the guest singers would be inebriated - so a simple interface was key.  This meant dumbing down the MVP, as evidenced by the lengthy list of future improvements.

## Improvements
The MVP is the framework for a far greater program. Among the things we'd like to incorporate in future releases (_in no particular order_)
* incorporate tip to skip
    * hook in Paypal, Venmo et al.  If a user submits an online payment, the MC is alerted and can re-order the queue based on tip amount
    * allow MC to manually enter a tip if paid in cash
* authentication
    * Credentials for dedicated MC control room
    * Show code credentials for users   
* Post Show wrap up
    * allow show to be pushed to a show database
    * Date, Venue, songs performed, songs deferred, songs deleted, songs tipped
    * Tip Total
    * user tracking via email (_if provided_)
* User Feedback
    * allow users to submit suggestions for new songs for the band to learn
    * allow users to submit a note to the band
* Ad Hoc Song Input
    * allow MC to insert a song into the queue in case the band performs on their own or band performs a song not on the song menu
* Expand from a mobile-friendly site to mobile app platform.  
* User performance download
    * user has option to download video of their performance.  Monetization may not be possible due to DMCA
* Automated user thank you notification
    * If user provided an email address and their song was marked as sung by the MC, they'll receive an email that thanks them for singing their selection at the venue on the date of the event
* View all songs
    * users can scroll through all songs alphabetically by song title or artist, genre or key
* Song Roulette
    * the program picks a song at random
* User messaging
    * this can be used to broadcast messages to users who are in the program, such as drink specials
* MC messaging
    * a user can message the MC during the show
* Advertising
    * there's always room for a banner somewhere.
* In-app click tracking
    * by user session, what did they do?  Use this to further tweak the program
