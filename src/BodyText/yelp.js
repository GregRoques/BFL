/**
 * @file yelp.js
 * @description Customer review data pulled from Yelp and Facebook. Each entry
 * includes the review text, customer name, and a link to the original review.
 */

/**
 * @constant {Array<{review: string, name: string, link: string}>} yelp
 * @description Collection of customer testimonials displayed in the rotating
 * review carousel on the home page.
 */
const yelp = [
    {
        review: "Beds 4 Less has great prices, and such friendly and knowledgeable employees!",
        name: "Lauren L.",
        link: "https://www.yelp.com/biz/beds-4-less-kenner?hrid=zCQ8tK89OTKHG9T7lR3v0w&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"
    },
    {
        review: "Ended up with a high end mattress for a fantastic price. I haven't slept this good in years.",
        name: "Susan C.",
        link: "https://www.yelp.com/biz/beds-4-less-kenner?hrid=-nApd3t64CQWPFtSa5AZ9Q&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"
    },
    {
        review: "If you're looking for a mattress check this place out.",
        name: "Molly B.",
        link: "https://www.yelp.com/biz/beds-4-less-kenner?hrid=JC7dTy898MIYOWFIjmzpuw&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"
    },
    {
        review: "If you want a nice mattress, but don't want to break the bank...this is the place to go!",
        name: "Christopher J.",
        link: "https://www.yelp.com/biz/beds-4-less-kenner?hrid=cpk9XrSMxrYBKP6dEJHmfw&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"
    },
    {
        review: "This is one of the least painful big purchases I've ever made.",
        name: "Wayne R.",
        link: "https://www.yelp.com/biz/beds-4-less-kenner?hrid=eCZKw24d2cIZE5EWnEQW4Q&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"
    },
    {
        review: "Great service, awesome mattress, INCREDIBLE PRICE!",
        name: "Mike M.",
        link: "https://www.yelp.com/biz/beds-4-less-kenner?hrid=0ONXauY5xUztI_Tb8OtCxw&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"
    },
    {
        review: "I can't be more happy with the decision I made to buy a mattress from Jason.",
        name: "Shannon P.",
        link: "https://www.yelp.com/biz/beds-4-less-kenner?hrid=SI8kD8gcnDFVnPlYcqMNaw&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"
    },
    {
        review: "A great experience, much better than their competitors.",
        name: "Lindsay A.",
        link: "https://www.yelp.com/biz/beds-4-less-kenner?hrid=MMAF_3CLi6AxN5_fHaGOKA&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"
    },
    {
        review: "The bed is comfortable and the whole experience of buying it was great.",
        name: "Dæn D.",
        link: "https://www.yelp.com/biz/beds-4-less-kenner?hrid=z8YapwxoQzPPanF-GGUZow&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"
    },
    {
        review: "The delivery service they use is prompt, courteous and efficient - couldn't ask for a better experience.",
        name: "Donna W.",
        link: "https://www.yelp.com/biz/beds-4-less-kenner?hrid=GzjN4o5vc5xag8qTpcA2Eg&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"
    },
    {
        review: "Beds 4 Less has friendly, helpful staff and a large selection of mattresses at wonderful prices!",
        name: "Mandy W.",
        link: "https://www.yelp.com/biz/beds-4-less-kenner?hrid=5f7W5j4Pt7bpLaCFF69tfQ&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"
    },
    {
        review: "Got a great price for something that would have cost hundreds more at another place.",
        name: "Tom H.",
        link: "https://www.yelp.com/biz/beds-4-less-kenner?hrid=FFxI2xBymSNuduTMzgLGLg&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"
    },
    {
        review: "Got a great price for something that would have cost hundreds more at another place.",
        name: "Tom H.",
        link: "https://www.yelp.com/biz/beds-4-less-kenner?hrid=FFxI2xBymSNuduTMzgLGLg&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"
    },
    {
        review: "Would rate 10/5 if possible.",
        name: "Ben G.",
        link: "https://www.facebook.com/Beds4Less/reviews"
    },
    {
        review: "I have found my bed to be high quality at a ridiculously great value.",
        name: "Richard W.",
        link: "https://www.facebook.com/Beds4Less/reviews"
    },
    {
        review: "Highly suggest seeing them if you are looking for a great new mattress for a great price.",
        name: "Adam K.",
        link: "https://www.facebook.com/Beds4Less/reviews"
    },
    {
        review: "I bought an awesome bed at a great price!",
        name: "Carly L.",
        link: "https://www.facebook.com/Beds4Less/reviews"
    },
    {
        review: "Beds 4 Less has amazing deals with excellent quality merchandise!",
        name: "Lauren E.",
        link: "https://www.facebook.com/Beds4Less/reviews"
    },
    {
        review: "The prices are the best!",
        name: "Celeste G.",
        link: "https://www.facebook.com/Beds4Less/reviews"
    },
]

export default yelp;
